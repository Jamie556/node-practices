this.x = 9;
var module = {
  x: 81,
  getX: function() {
    console.log(this.x);
    return this.x;
  }
};

module.getX();
var retrieveX = module.getX;
retrieveX();

// 创建绑定函数
var boundGetX = retrieveX.bind(module);
boundGetX();



