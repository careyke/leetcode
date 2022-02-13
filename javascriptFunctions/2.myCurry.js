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

// 两种方法实现的细节不一致
function myCurry(fn, ...args) {
  const len = fn.length;
  return function curry(...newArgs) {
    const currentArgs = args.concat(newArgs);
    if (currentArgs.length < len) {
      return curry.bind(this, ...newArgs);
    }

    return fn.apply(this, currentArgs);
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
