const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; ++i) {
    cluster.fork();
  }
  // 给工作进程广播消息
  for (const id in cluster.workers) {
    cluster.workers[id].send({
      data: "msg: " + id
    });
  }
} else if (cluster.isWorker) {
  // 工作进程接受到消息
  process.on("message", msg => {
    console.log("msg is", msg);
  });
}
