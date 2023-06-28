const { EventEmitter } = require('events');

var proxy = new EventEmitter();

var status = "ready";
var select = function(callback) {
  proxy.on('selected', callback);

  if (status === 'ready') {
    status = 'pending';
    db.select("SQL", function (result) {
      proxy.emit('selected', result);
      status = 'ready';
    });
  }
}

// 状态锁
// 发布/订阅 模式通知数据结果
// 因为nodejs是单线程执行的，所以不用单行状态同步的问题
// 类似派代表领取礼品的方案

// 参考文档：（nodejs实战解决雪崩问题）https://juejin.cn/post/7130282647388946446

// 以上是针对单个业务的场景
// 实际生产中使用可以参看controller.js、service.js、helper.js






