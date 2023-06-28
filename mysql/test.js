const fs = require('fs');

const output = fs.createWriteStream('./data.csv');
output.write('uname,age,city');


