let i = 0;

let start = Date.now();

function count() {

  // 做一个繁重的任务
  for (let j = 0; j < 1e9; j++) {
    i++;
  }

  console.log("Done in " + (Date.now() - start) + 'ms');
}

count();
