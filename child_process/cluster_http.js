const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isMaster) {
  const cpuNum = os.cpus().length;
  for (let i = 0; i < cpuNum; ++i) {
    cluster.fork();
  }
} else {
  runServer();
}
function runServer() {
  http.createServer((req, res) => {
    console.log('线程id: ', process.pid);
    for (let i = 0; i < 100000; ++i) {}
    res.statusCode = 200;
    res.end("hello world!");
  }).listen(4000);
}

// 当遇到并发请求时，一个cpu处理javascript主线程处理不过来，此时可以使用cluster将程序按集群部署，充分利用到服务器
// 多个cpu核心的优势

