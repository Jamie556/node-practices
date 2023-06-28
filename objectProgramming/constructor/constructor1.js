function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    console.log(this.name);
  };
}

let person1 = new Person('Nicholas', 29, 'software engineer');
let person2 = new Person('Greg', 27, 'Doctor');
let person3 = new Person; // 没有参数，构造函数后面的括号可加可不加

person1.sayName();
person2.sayName();
person3.sayName();

console.log(person1.constructor === person2.constructor, person1.constructor, person2.constructor);

// 没有显示的创建对象
// 属性和方法直接赋值给了this
// 没有return

// 要创建对象需要使用到new操作符，通过这种方式调用构造函数将会执行如下操作
// 1）在内存中创建一个对象
// 2）这个新对象内部的[[Prototype]]特性被赋值为构造函数的prototype属性
// 3）构造函数中的this被赋值为新对象
// 4）执行构造函数内部的代码
// 5）如果构造函数返回非空对象，则返回这个对象；否则返回刚刚创建的新对象

console.log(person1 instanceof Object);
console.log(person1 instanceof Person);
console.log(person2 instanceof Object);
console.log(person2 instanceof Person);


// 1. 构造函数也是函数
// 作为构造函数调用
let person4 = new Person('Nicholas', 29, 'software engineer');
person4.sayName();

// 作为普通函数调用, 在没有指定作用域时，
Person('Greg', 27, 'Doctor');
globalThis.sayName();

// 在另一个对象的作用域中调用
let o = new Object();
Person.call(o, 'Kristen', 23, 'Nurse');
o.sayName();

const moduleObject = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = moduleObject.getX;
console.log(unboundGetX());

const boundGetX = unboundGetX.bind(moduleObject);
console.log(boundGetX())

