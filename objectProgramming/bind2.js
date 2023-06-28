function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

var list1 = list(1,2,3);
console.log(list1);
var result1 = addArguments(1, 2);
console.log(result1);


var leadingThirtysevenList = list.bind(null, 37);
var addThirtySeven = addArguments.bind(null, 37);

var list2 = leadingThirtysevenList(2,3,4);
console.log(list2);
var list3 = leadingThirtysevenList();
console.log(list3);




