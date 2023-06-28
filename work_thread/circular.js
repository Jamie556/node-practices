const { MessageChannel } = require('worker_threads');

const { port1, port2 } = new MessageChannel();

port1.on('message', (message) => {
  console.log(JSON.stringify(message));
});

const circularData = {};
circularData.foo = circularData;

port2.postMessage(circularData);
