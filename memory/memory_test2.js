// 一段存在内存泄漏问题的示例代码
const heapdump = require('heapdump');

heapdump.writeSnapshot('init.heapsnapshot'); // 记录初始内存的堆快照

let i = 0; // 记录调用次数
let theThing = null;
let replaceThing = function () {
  const newThing = theThing;
  let unused = function () {
    if (newThing) console.log("hi");
  };

  // 不断修改引用
  theThing = {
    longStr: new Array(1e8).join("*"),
    someMethod: function () {
      console.log("a");
    },
  };

  if (++i >= 1000) {
    heapdump.writeSnapshot('leak.heapsnapshot'); // 记录运行一段时间后内存的堆快照
    process.exit(0);
  }
};

setInterval(replaceThing, 100);

// 通过heapdump将堆内存中的状态信息生成快照导出，
// 然后我们将其导入到 Chrome DevTools 中看到具体的详情，例如堆中有哪些对象、占据多少空间等等。
