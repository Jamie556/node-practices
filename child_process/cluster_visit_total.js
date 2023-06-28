const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  const cpuNum = os.cpus().length;
  for (let i = 0; i < cpuNum; ++i) {
      cluster.fork();
  }
  listenWorker()
} else if (cluster.isWorker) {
  runWorker();
}

// 监听来自工作进程的消息
function listenWorker(initVisitTotal = 0) {
  let visitTotal = initVisitTotal || 0;

  for (const id in cluster.workers) {
      cluster.workers[id].on("message", msg => {
          // 如果是report类型的消息：
          // 1. 更新总访问数
          // 2. 给所有的工作进程同步
          if (msg.tag === "report") {
              ++visitTotal;
              broadcast(cluster.workers, { visitTotal });
          }
      });
  }
}

// 主进程给工作进程「广播」
function broadcast(workers, data) {
  for (const id in workers) {
      workers[id].send({
          tag: "broadcast",
          ...data
      });
  }
}

// 1. 工作进程监听来自主进程的广播，同步公共状态（访问次数）
// 2. 请求每次进来，给主进程上报，由主进程来更新公共状态。
function runWorker() {
  let visitTotal = 0;
  // 接收主进程的广播
  process.on("message", msg => {
      if (msg.tag === "broadcast") visitTotal = msg.visitTotal;
  });
  http.createServer((req, res) => {
      // 消息上报给主进程
      process.send({
          tag: "report"
      });
      res.statusCode = 200;
      res.end(`visit total times is ${visitTotal + 1}`);
  }).listen(4000);
}
