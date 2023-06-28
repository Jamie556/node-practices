try {
  throw new Error("foo");
} catch (err) {
  console.log(err);
}

try {
  Promise.reject(new Error('bar'));
} catch (err) {
  console.log(err);
}
