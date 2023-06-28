let i = 0;

let start = Date.now();

function count() {

  // 做繁重的任务的一部分 (*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    console.log("Done in " + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count); // 安排（schedule）新的调用 (**)
  }

}

count();

// 使用嵌套的 setTimeout 调用来拆分这个任务
