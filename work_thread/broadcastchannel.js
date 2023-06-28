`use strict';`

const { Worker, BroadcastChannel, isMainThread } = require('worker_threads');

const bc = new BroadcastChannel('hello');

if (isMainThread) {
  let c = 0;
  bc.onmessage = (event) => {
    console.log(event.data);
    if (++c === 10) {
      bc.close();
    }
  };
  for (let i = 0 ; i < 10; i++) {
    new Worker(__filename);
  }
} else {
  bc.postMessage('hello from every worker');
  bc.close();
}
