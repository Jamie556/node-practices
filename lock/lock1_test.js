const fs = require('fs');
const lock = require('./lock1');

async function testLock() {
  for (let i = 0; i < 5; i++) {
    const unlock = await lock();
    fs.readFile(__filename, () => {
      console.log(i);
      unlock();
    });
  }
}

await lock();{ promise
  callback ==> fs.readFile() then
  await lock(); { promise
    callback ==> fs.readFile(); then
    await lock();{ promise
      callback ==> fs.readFile(); then
      await lock(); { promise
        callback ==> fs.readFile(); then
        await lock(); { promise
          callback ==> fs.readFile(); then
        }
      }
    }
  }

}


async function main() {
  testLock();
}

main();
