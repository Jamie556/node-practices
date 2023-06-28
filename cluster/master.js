const cluster = require('cluster')
const os = require('os');
const { clearInterval } = require('timers');

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; i++) {
    let timmer = null;
    const worker = cluster.fork();
    let missedPing = 0;

    timmer = setInterval(() => {
      missedPing++;
      worker.send('ping');
      console.log('发送ping请求', 'missedPing的值为：', missedPing);
      if (missedPing > 5) {
        process.kill(worker.process.pid);
        worker.send('ping');
        clearInterval(timmer);
      }
    }, 5000)

    worker.on('message', (msg) => {
      console.log('收到pong响应');
      msg === 'pong' && missedPing--;
    });
  }
} else {
  // require('/index.js');
  process.on('message', (msg) => {
    console.log('收到ping请求');
    msg === 'ping' && process.send('pong');
  });

  process.on('uncaughtException', (err) => {
    console.error(err);
    if (process.memoryUsage().rss > 734003200) {
      console.log('大于700m了，退出程序吧');
      process.exit(1);
    }
    process.exit(1);
  });
}
