const { EventEmitter, errorMonitor } = require('events');

const myEmitter = new EventEmitter();
myEmitter.on(errorMonitor, (err) => {
  console.error(err.message);
});
myEmitter.emit('error', new Error('whoops!'));
// Still throws and crashes Node.js
