const { Console } = require('console');
const fs = require("fs");

const output = fs.WriteStream('./stdout.log');
const errout = fs.WriteStream('./stderr.log');

const logger = new Console({ stdout: output, stderr: errout });
const count = 5;
logger.log('count: %d', count);

