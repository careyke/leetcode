Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("only function has call method");
  }

  if (context == null) {
    context = window;
  }

  const key = Symbol("key");
  context[key] = this;
  const result = context[key](...args);
  delete context[key];

  return result;
};

function isArrayLike(o) {
  if (
    o && // o不是null、undefined等
    typeof o === "object" && // o是对象
    isFinite(o.length) && // o.length是有限数值
    o.length >= 0 && // o.length为非负值
    o.length === Math.floor(o.length) && // o.length是整数
    o.length < 4294967296
  )
    // o.length < 2^32
    return true;
  else return false;
}

Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw new Error("only function has apply method");
  }

  if (context == null) {
    context = window;
  }

  if (!isArrayLike(args)) {
    throw new Error("args is invalid");
  }

  const key = Symbol("key");
  context[key] = this;
  const result = context[key](...args);
  delete context[key];

  return result;
};
