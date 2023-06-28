const net = require('net')
const fs = require('fs')

const pipeFile = process.platform === 'win32' ? '\\\\.\\pipe\\mypip' : '/tmp/unix.sock'

const server = net.createServer(connection => {
  console.log('socket connected.')
  connection.on('close', () => console.log('disconnected.'))
  connection.on('data', data => {
    console.log(`receive: ${data}`)
    connection.write(data)
    console.log(`send: ${data}`)
  })
  connection.on('error', err => console.error(err.message))
})

try {
  fs.unlinkSync(pipeFile)
} catch (error) {}

server.listen(pipeFile)
