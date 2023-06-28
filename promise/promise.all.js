async function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new Error('arguments must be an array'));
    }
    let resolvedCounter = 0;
    let promiseNum = promises.length;
    let resolvedValues = new Array(promiseNum);

    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(res => {
        resolvedValues[i] = res;
        resolvedCounter++;
        if (resolvedCounter === promiseNum) {
          return resolve(resolvedValues);
        }
      }).catch(reason => reject(reason));
    }
  });
}

async function main() {
  const arr = [1, 2, 3, undefined, 4];
  const data = await PromiseAll(arr);
  console.log(data);
}

main();
