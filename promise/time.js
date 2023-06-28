console.log(1);
new Promise(function(resolve, reject) {
  resolve(true);
  setTimeout(() => { reject(false) }, 0);
}).then((d) => {
  console.log(2);
}).catch(e => {
  console.log(3);
});
console.log(4);

// 输出结果：1,4，2
// promise的状态只能被修改一次

const cp = require('child_process');
cp.execSync('sleep 10');
console.log('after sleep 10s');
