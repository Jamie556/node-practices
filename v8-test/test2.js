// Our optimized function.
function add(a, b) {
  return a + b;
  console.log(a + b);
}

// Typical cheat code enabled by --allow-natives-syntax.
%PrepareFunctionForOptimization(add);

// Give the optimizing compiler type feedback so it'll speculate `a` and `b` are
// numbers.
add(1, 3);

// And force it to optimize.
%OptimizeFunctionOnNextCall(add);
add(5, 7);
