import {readFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
const p=JSON.parse(readFileSync(new URL('../package.json',import.meta.url),'utf8'));
if(process.env.RELEASE_TAG!=='v'+p.version)throw Error('Release tag must be v'+p.version);
if(p.name!=='@pahooper/soundforge')throw Error('Unexpected package name');
if(p.version.includes('-'))throw Error('This workflow publishes stable releases only');
if(process.argv.includes('--check')){console.log('Verified release tag and package '+p.name+'@'+p.version);process.exit(0);}
if(process.env.GITHUB_ACTIONS!=='true'||!process.env.ACTIONS_ID_TOKEN_REQUEST_URL)throw Error('Publishing requires the GitHub Actions trusted publishing environment');
function npm(args){const r=spawnSync('npm',args,{encoding:'utf8',stdio:'inherit'});if(r.status!==0)process.exit(r.status??1);}
npm(['pack','--ignore-scripts']);
npm(['publish','./pahooper-soundforge-'+p.version+'.tgz','--access','public','--provenance','--registry=https://registry.npmjs.org/']);
