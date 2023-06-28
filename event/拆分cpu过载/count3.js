let i = 0;

let start = Date.now();

function count() {

  // 将调度（scheduling）移动到开头
  if (i < 1e9 - 1e6) {
    setTimeout(count); // 安排（schedule）新的调用
  }

  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    console.log("Done in " + (Date.now() - start) + 'ms');
  }

}

count();

// 把调度（scheduling）移动到 count() 的开头
