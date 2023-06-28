const fs = require('fs');

fs.watchFile(__dirname + '/' + 'message.txt', (curr, prev) => {
  console.log(curr);
  console.log(prev);
});
