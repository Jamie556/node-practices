let p = Promise.reject(3);
setTimeout(console.log, 0, p);

p.then((data) => {
  console.log(data);
}, (err) => {
  console.log(err);
})
