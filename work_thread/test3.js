const { MessageChannel, receiveMessageOnPort } = require('worker_threads');

const { port1, port2 } = new MessageChannel();
port1.postMessage({ hello: 'world' });

console.log(receiveMessageOnPort(port2));
console.log(receiveMessageOnPort(port2));
