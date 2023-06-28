const { EventEmitter } = require('events');

// 通过事件队列制作锁，
// eventEmitter作为锁，只能注册一个事件，当被注册的事件被移除时，才能注册另一个事件。
const Lock = function() {

  const locked = {};
  const eventEmitter = new EventEmitter();
  eventEmitter.setMaxListeners(0);

  return {
    acquire: (key) => new Promise((resolve) => {
      if (!locked[key]) {
        locked[key] = true;
        resolve();
        return;
      }
      const tryAcquire = () => {
        if (!locked[key]) {
          locked[key] = true;
          eventEmitter.removeListener(key, tryAcquire);
          resolve();
        }
      };

      eventEmitter.on(key, tryAcquire);
    }),
    release: (key) => {
      delete locked[key];
      // process.nextTick(() => { eventEmitter.emit(key); })
      setImmediate(() => eventEmitter.emit(key));
    }
  };
};




module.exports = Lock;
