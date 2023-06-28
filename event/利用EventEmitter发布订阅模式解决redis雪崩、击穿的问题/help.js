const { EventEmitter } = require('events');
const proxy = new EventEmitter();
const map = new Map();

exports.preventAvalanche = async function(key, searchFn, resolve) {
  // 监听数据查询结果
  proxy.once(key, (res) => {
    resolve(res);
  });

  // 状态锁判断
  if (map.get(key) === 'pending') return;
  // 上锁
  map.set(key, 'pending');

  // 查询数据库数据
  const result = await searchFn();

  // 发布查询结果
  proxy.emit(key, result);
  // 清楚没用的key
  map.delete(key);
}


