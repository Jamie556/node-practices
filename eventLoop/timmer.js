const fs = require('fs')

// timers阶段
const startTime = Date.now();
setTimeout(() => {
  const endTime = Date.now()
  console.log(`timers: ${endTime - startTime}`)
}, 1000)
