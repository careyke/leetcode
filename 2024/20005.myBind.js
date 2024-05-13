/**
1. bind返回一个新的函数
2. bind方法可以修改函数的this，并且可以预先为函数传递参数
3. 当thisArg为null或者undefined时，新函数this为全局对象window
4. **new操作符修改this的优先级高于bind**
5. **bind返回函数的原型链( ______proto______ )和原型对象(prototype)要继承原始函数**
 */

Function.prototype.myBind = function (context, ...params) {
  if (typeof this !== "function") {
    throw new Error("only function has bind method");
  }
  if (context == null) {
    context = window;
  }
  const fn = this;
  const bound = function bound(...args) {
    const newArgs = [...params, ...args];
    const thisArg = new.target ? this : context;
    return fn.apply(thisArg, newArgs);
  };

  const proto = Object.getPrototypeOf(fn);
  Object.setPrototypeOf(bound, proto);

  bound.prototype = Object.create(fn.prototype);

  return bound;
};
