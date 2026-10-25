#!/usr/bin/env node
// Local example server. Binds only to your computer; not a production server.
import {createServer} from 'node:http';
import {readFile, stat} from 'node:fs/promises';
import {resolve, sep, extname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(process.argv[2] || fileURLToPath(new URL('.',import.meta.url)));
const port = Number(process.env.PORT || 8080);
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.wav':'audio/wav','.mp3':'audio/mpeg','.ogg':'audio/ogg','.flac':'audio/flac','.m4a':'audio/mp4','.md':'text/plain; charset=utf-8'};
const server = createServer(async (req,res) => {
  try {
    let path = resolve(root, '.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
    if (path!==root && !path.startsWith(root+sep)) {res.writeHead(403);res.end('Forbidden');return;}
    if ((await stat(path)).isDirectory()) path=join(path,'index.html');
    const bytes=await readFile(path);
    const headers={'Content-Type':types[extname(path)]||'application/octet-stream','Cache-Control':'no-store','Accept-Ranges':'bytes'};
    const range=req.headers.range;
    if (range) {
      const match=/^bytes=(\d+)-(\d*)$/.exec(range);
      const start=match?Number(match[1]):NaN;
      const end=match&&match[2]?Math.min(Number(match[2]),bytes.length-1):bytes.length-1;
      if (!Number.isSafeInteger(start)||start<0||start>=bytes.length||end<start) {
        res.writeHead(416,{'Content-Range':'bytes */'+bytes.length});res.end();return;
      }
      res.writeHead(206,{...headers,'Content-Range':'bytes '+start+'-'+end+'/'+bytes.length,'Content-Length':end-start+1});
      res.end(req.method==='HEAD'?undefined:bytes.subarray(start,end+1));return;
    }
    res.writeHead(200,{...headers,'Content-Length':bytes.length});
    res.end(req.method==='HEAD'?undefined:bytes);
  } catch(error) {res.writeHead(error.code==='ENOENT'?404:400);res.end('File not found or invalid request');}
});
server.on('error',error=>{console.error(error.code==='EADDRINUSE'?'Port '+port+' is busy. Set PORT to another port.':error.message);process.exitCode=1;});
server.listen(port,'127.0.0.1',()=>console.log('SoundForge demo: http://127.0.0.1:'+server.address().port+'\nPress Ctrl+C to stop.'));
