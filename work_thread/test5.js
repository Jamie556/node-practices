const { workerData, isMainThread, Worker } = require('worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename, { workerData: 'hello world!' });
} else {
  console.log(workerData);
}
