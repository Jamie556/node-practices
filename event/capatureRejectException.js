const { EventEmitter } = require('events');

const ee1 = new EventEmitter({ captureRejections: true });
ee1.on('something', async (value) => {
  // throw new Error('kaboom');
  console.log('kaboom1');
});

ee1.on('error', (data) => {
  console.log(data.a);
});

const ee2 = new EventEmitter({ captureRejections: true });
ee2.on('something', async (value) => {
  console.log('kaboom2');
  throw new Error('kaboom');
});

ee2[Symbol.for('nodejs.rejection')] = console.log;

ee1.emit('error', { a: 'test' });
ee1.emit('something');
ee2.emit('something');
