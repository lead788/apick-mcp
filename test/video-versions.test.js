import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createBridge } from '../src/bridge.js';

test('Seedance 2.0 Fast and Mini arguments pass through without rewriting', async () => {
    const calls=[], outputs=[];
    const response={jsonrpc:'2.0',id:1,result:{content:[{type:'text',text:'{"version":"2.0","tier":"mini"}'}]}};
    const bridge=createBridge({server:'ai',fetch:async (url,init)=>{
        calls.push(JSON.parse(init.body));
        return new Response(JSON.stringify(response),{headers:{'content-type':'application/json'}});
    },write:line=>outputs.push(JSON.parse(line))});
    const miniRequest={jsonrpc:'2.0',id:1,method:'tools/call',params:{name:'seedance_jobs_create',arguments:{version:'2.0',tier:'mini',duration:4,resolution:'480p',prompt:'a fast car',reference_audio_url:'https://example.com/beat.mp3'}}};
    const fastRequest={jsonrpc:'2.0',id:2,method:'tools/call',params:{name:'seedance_jobs_create',arguments:{version:'2.0',tier:'fast',duration:4,resolution:'720p',prompt:'a fast car'}}};
    await bridge.handleLine(JSON.stringify(miniRequest));
    await bridge.handleLine(JSON.stringify(fastRequest));
    assert.deepEqual(calls,[miniRequest,fastRequest]);
    assert.equal(outputs.length,2);
    assert.match(readFileSync(new URL('../TOOLS.md', import.meta.url), 'utf8'), /reference_audio_url_3/);
});
