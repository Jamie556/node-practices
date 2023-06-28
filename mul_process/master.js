const fs = require('fs');
const child_process = require('child_process');

for (var i = 0; i < 30; i++) {
  var work_Process = child_process.exec('node support.js ' + i, function(err, stdout, stderr) {
    if (err) {
      console.log(err.stack);
      console.log('Error code: ' + err.code);
      console.log('Signal received: ' + err.signal);
    }
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
  });

  work_Process.on('exit', function(code) {
    console.log('子进程已经退出，退出码：' + code);
  });
}
