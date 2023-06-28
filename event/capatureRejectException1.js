const events = require('events');
events.captureRejections = true;
const ee1 = new events.EventEmitter();
ee1.on('something', async (value) => {
  throw new Error('kaboom');
});

// ee1.on('error', console.log);

ee1.emit('error');
