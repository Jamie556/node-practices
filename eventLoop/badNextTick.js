const fs = require('fs');

let count = 0;
function wait(mstime) {
  let date = Date.now();
  while(Date.now() - date < mstime) {
    // do nothing
  }
}

function nextTick() {
  process.nextTick(() => {
    wait(20);
    console.log('nextTick' + ++count);
    nextTick();
  })
}

const lastTime = Date.now();
setTimeout(() => {
  console.log('timmers', Date.now() - lastTime + 'ms');
}, 0);

nextTick();

