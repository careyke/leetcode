function myCurry(fn, ...args) {
  const len = fn.length;
  return function (...params) {
    const newParams = args.concat(params);
    if (newParams.length >= len) {
      return fn.apply(this, newParams);
    } else {
      return myCurry.apply(this, [fn, ...newParams]);
    }
  };
}

// test
function add(a, b, c, d) {
  console.log(a + b + c + d);
}
const myAdd = myCurry(add, 1, 2);
myAdd(3, 4); //10
myAdd()(3, 4); //10
myAdd(3)(4); //10
