function myCurry(fn, ...params) {
  if (typeof fn !== "function") {
    throw new Error("fn is not a function");
  }
  const result = function (...args) {
    const newParams = [...params, ...args];
    if (fn.length > newParams.length) {
      return myCurry(fn, ...newParams);
    } else {
      return fn.apply(this, newParams.slice(0, fn.length));
    }
  };
  return result;
}

// test case
function add(a, b, c, d) {
  return a + b + c + d;
}
const myAdd = myCurry(add, 1, 2);
console.log(myAdd(3, 4)); //10
console.log(myAdd()(3, 4)); //10
console.log(myAdd(3)(4)); //10
console.log(myAdd(3)(4, 5, 6)); //10
