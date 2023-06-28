const { Buffer } = require('buffer');

// 创建一个填充零值，长度为10的buffer
const buf1 = Buffer.alloc(10);
// 创建一个填充为1，长度为10的buffer
const buf2 = Buffer.alloc(10, 1);
// 创建一个未初始化的buffer,长度为10
// 这样创建的buffer会非常的快，但是返回的buffer实例可能会包含许多的旧数据
// 需要使用fill、write函数重写，或者用其他函数填充buffer的内容
const buf3 = Buffer.allocUnsafe(10);
// 创建一个buffer通过Buffer.from
const buf4 = Buffer.from([1, 2, 3]);
// 创建buffer时，输入值将会进行”(value & 255)“操作，来调增适应0-255的范围
const buf5 = Buffer.from([257, 257.5, -255, '1']);
//
const buf6 = Buffer.from('tést');
const buf7 = Buffer.from('test', 'latin1');


