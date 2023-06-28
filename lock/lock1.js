let isLock = false;
let lockList = [];
async function lock() {
  function unlock() {
    let waitFun = lockList.shift();
    if (waitFun) {
      waitFun.resolve(unlock);
    } else {
      isLock = false;
    }
  }
  if (isLock) {
    return new Promise(function(resolve, reject) {
      lockList.push({resolve, reject});
    });
  } else {
    isLock = true;
    return unlock;
  }
}

module.exports = lock;

// 一段时间内，将进入需要加锁的代码块执行，通过Promise.then进行连锁执行，这样就达到了锁的效果。

// 借助数组的push和shift方法，实现一个先进先出的队列，用于存储promise的resolve和reject处理函数
// 通过微任务promise.then实现对并发任务先后顺序控制。
// 通过数组的push和shift方法，实现一个先进先出的队列，用于存储promise.then的每一个链节点的resolve和reject处理
// 我们通过Promise.then可以实现异步方法的同步处理，假如有一段异步的代码块需要加锁，从而实现每次只有一个代码块进入执行
// 这相当于将代码块按执行顺序依次排序塞进每一个promise.then中，并进行连锁执行。
// 而这样的实现需要一个先进先出的数组，用于保证执行的顺序。


