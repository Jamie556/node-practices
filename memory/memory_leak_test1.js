let theThing = null;
let replaceThing = function () {
  {
    const newThing = theThing;
    const unused = function () {
      if (newThing) console.log("hi");
    };
  }
  // 不断修改引用
  theThing = {
    longStr: new Array(1e8).join("*"),
    someMethod: function () {
      console.log("a");
    },
  };

  // 每次输出的值会越来越大
  console.log(process.memoryUsage().heapUsed);
};

setInterval(replaceThing, 100);
