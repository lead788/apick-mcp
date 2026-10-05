import test from 'node:test';
import assert from 'node:assert/strict';
import {createBridge} from '../src/bridge.js';
test('Gemini·ChatGPT TTS와 확장 옵션·정산 결과를 변경 없이 전달',async()=>{
  const received=[],output=[];
  const response={jsonrpc:'2.0',id:1,result:{content:[],structuredContent:{job_id:'a'.repeat(32),billing:{reserved:100,total:0},synthesis:{engine:'gemini',voice_id:'Kore'}}}};
  const bridge=createBridge({server:'convert',apiKey:'test-key',write:line=>output.push(JSON.parse(line)),fetch:async(url,request)=>{received.push(JSON.parse(request.body));return new Response(JSON.stringify(response),{headers:{'Content-Type':'application/json'}});}});
  const message={jsonrpc:'2.0',id:1,method:'tools/call',params:{name:'tts_gemini_create',arguments:{text:'본문',voice_id:'Kore',normalize_text:false,idempotency_key:'tts-1'}}};
  await bridge.handleLine(JSON.stringify(message));assert.deepEqual(received[0],message);assert.deepEqual(output[0],response);
  const chat={...message,params:{name:'tts_openai_create',arguments:{text:'본문',voice_id:'alloy',emotion:'calm',pace:0.8,pitch:1,volume_gain_db:-2,normalize_text:false}}};
  await bridge.handleLine(JSON.stringify(chat));assert.deepEqual(received[1],chat);
  for(const name of ['tts_options','tts_openai_voices']){const query={...message,params:{name,arguments:{}}};await bridge.handleLine(JSON.stringify(query));assert.deepEqual(received.at(-1),query);}
});
