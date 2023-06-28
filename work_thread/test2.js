const { MessageChannel, markAsUntransferable  } = require('worker_threads');

const pooledBuffer = new ArrayBuffer(8);
const typedArray1 = new Uint8Array(pooledBuffer);
const typedArray2 = new Float64Array(pooledBuffer);

const buffers = new ArrayBuffer(16);
markAsUntransferable(buffers);
const typedArray3 = new Uint16Array(buffers);


const { port1 } = new MessageChannel();
port1.postMessage(typedArray3, [ typedArray3.buffer ])
port1.postMessage(typedArray1, [ typedArray1.buffer ]);

console.log(typedArray1);
console.log(typedArray2);



