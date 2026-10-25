import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {createBridge,SERVERS} from '../src/bridge.js';
test('스킬 브릿지는 인증키를 전송하기 전에 이전 안내로 중단한다',()=>{
 let calls=0;assert.ok(!SERVERS.includes('skills'));
 assert.throws(()=>createBridge({server:'skills',apiKey:'private-test-key',fetch:async()=>{calls++;}}),/SKILLS_MOVED/);assert.equal(calls,0);
 const run=spawnSync(process.execPath,['src/index.js','--server','skills'],{encoding:'utf8',env:{...process.env,APICK_API_KEY:'private-test-key'}});
 assert.equal(run.status,2);assert.match(run.stderr,/SKILLS_MOVED/);assert.doesNotMatch(run.stderr,/private-test-key/);
});
test('공개 문서는 리퀘오 인증과 계정·포인트 분리를 안내한다',()=>{
 for(const file of ['README.md','TOOLS.md']){const text=readFileSync(new URL('../'+file,import.meta.url),'utf8');assert.match(text,/https:\/\/reqeo.com\/mcp\/skills/);assert.match(text,/계정과 포인트는 별개/);assert.doesNotMatch(text,/https:\/\/apick.app\/mcp\/skills/);}
});
