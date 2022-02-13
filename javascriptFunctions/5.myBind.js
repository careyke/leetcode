Function.prototype.myBind = function (context, ...args) {
  if (context == null) {
    context = window;
  }
  const fn = this;
  function bound(...params) {
    const currentArgs = args.concat(params);
    // !!!!注意：这里判断条件可以用 [this instanceof bound] 来代替
    if (new.target) {
      // const result = fn.apply(this, currentArgs);
      // if (result && typeof result === "object") {
      //   return result;
      // } else {
      //   return this;
      // }
      return fn.apply(this instanceof bound ? this : context, currentArgs);
    } else {
      return fn.apply(context, currentArgs);
    }
  }

  Object.setPrototypeOf(bound, Object.getPrototypeOf(fn));
  bound.prototype = Object.create(fn.prototype);

  return bound;
};

// test
function Foo() {
  this.a = 1;
  return "hehe";
}
Foo.prototype = {
  b: 2,
};
function protoFunc() {}
protoFunc.c = 3;
Object.setPrototypeOf(Foo, protoFunc);
var obj = { d: 4 };
var fn = Foo.myBind(obj);

console.log(fn.__proto__ === Foo.__proto__); // true
console.log(fn.prototype === Foo.prototype); // false
var v = new fn();
console.log(v.b); // 2 说明Foo.prototype在fn.prototype的原型链上

console.log(v.a); // 1
console.log(obj.a); //undefined 说明new的优先级高于bind
