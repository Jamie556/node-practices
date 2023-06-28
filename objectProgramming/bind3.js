// 给异步函数的回调绑定指定的上下文，如给setTimeout绑定指定的this,调用外部的方法。


function lateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

lateBloomer.prototype.bloom = function() {
  setTimeout(this.declare.bind(this), 1000);
}

lateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' + this.petalCount + ' petals!');
}

var flower = new lateBloomer();
flower.bloom();
