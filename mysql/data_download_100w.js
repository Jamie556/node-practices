const mysql = require('mysql')
const http = require('http');
const fs = require('fs');
const csv = require('csv');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'test'
});

http.createServer((req, res)=> {
  const writeStream = fs.createWriteStream('./data.csv'); //.pipe(csv.stringify({quoted: true}));
  writeStream.write('uname,age,city\n');

  console.time('查询时间');
	let sql = 'SELECT uname, age, city FROM hd_test limit 1000000';
	let readStream = pool.query(sql).stream({ highWaterMark: 50 });
  readStream.pipe(csv.stringify({quoted: true})).pipe(writeStream);

  readStream.on('end', () => {
    console.timeEnd('查询时间');
    // console.log('查询结束');
    // res.statusCode = 200;
    // res.end('successed');

    res.setHeader('Content-Type', 'application/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=data.csv');
    fs.createReadStream('./data.csv').pipe(res);
  });
}).listen(8000);

// excel表格文件大小限制是100w条，1024 * 1024
//

