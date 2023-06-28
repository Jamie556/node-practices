const fs = require('fs');

const watcher = fs.watch(__dirname + '/message.txt', (eventType, filename) => {
  console.log(eventType);
  console.log(filename);
});

process.nextTick(watcher)

fs.unwatchFile(__dirname + '/message.txt', (cur, pre) => {
  console.log(cur);
  console.log(pre);
})
