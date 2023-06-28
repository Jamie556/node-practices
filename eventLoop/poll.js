const fs = require('fs');

// poll阶段(等待新的事件出现)
const readFileStart =  Date.now();
console.time('callback');
fs.readFile('timmer.js', (err, data) => {
    console.timeEnd('callback');
    if (err) throw err
    let endTime = Date.now()
    // 获取文件读取的时间
    console.log(`read time: ${endTime - readFileStart}`)
    // 通过while循环将fs回调强制阻塞5000ms
    while(endTime - readFileStart < 5000){
        endTime = Date.now()
    }
})
