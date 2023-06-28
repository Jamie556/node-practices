const fs = require('fs');
const lock = require('./lock');

async function main() {
  const mutex = new lock();
  for (let i = 0; i < 5; i++) {
    await mutex.acquire('key');
    fs.readFile(__filename, () => {
      console.log(i);
      mutex.release('key');
    });
  }
}


main();
