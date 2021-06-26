Function.prototype.myBind = function (context, ...args) {
  if (context == null) {
    context = window;
  }
  const fn = this;
  function bound(...params) {
    const currentArgs = args.concat(params);
    const thisArg = this instanceof fn ? this : context;
    return fn.apply(thisArg, currentArgs);
  }

  Object.setPrototypeOf(bound, Object.getPrototypeOf(fn));
  bound.prototype = Object.create(fn.prototype);

  return bound;
};

// test
function Foo() {
  this.a = 1;
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
