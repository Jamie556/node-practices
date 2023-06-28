const { Worker, SHARE_ENV } = require('worker_threads');

const worker = new Worker('process.env.SET_IN_WORKER = "fool"', { eval: true, env: SHARE_ENV })
  .on('exit', () => {
    console.log(process.env.SET_IN_WORKER);
  });

console.log(worker.threadId);
