const { MessageChannel } = require('worker_threads');

const { port1, port2 } = new MessageChannel();
port1.on('message', (message) => { console.log('received: ' + JSON.stringify(message)) });
port2.postMessage({foo:'bar'});
