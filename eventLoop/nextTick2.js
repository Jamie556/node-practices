setImmediate(function(){
  console.log("setImmediate");
  setImmediate(function(){
    console.log("嵌套setImmediate");
  });
  process.nextTick(function(){
    console.log("nextTick");
  })
});

/*
	C:\Users\92809\Desktop\node_test>node test.js
	setImmediate
	nextTick
	嵌套setImmediate
*/
