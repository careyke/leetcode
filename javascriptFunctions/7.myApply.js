Function.prototype.apply = function (context, args) {
  if (!isArrayLike(args)) {
    throw new Error("the arguments of apply must be array like");
  }

  if (context == null) {
    context = window;
  }

  const smybolKey = Symbol("fn_key_");
  context[smybolKey] = this;
  const result = context[smybolKey](...args);

  // clear
  delete context[smybolKey];

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
