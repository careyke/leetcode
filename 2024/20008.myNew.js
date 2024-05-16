/**
1. 创建一个新的对象
2. 这个新对象会通过[[Prototype]]连接，**关联构造函数的原型对象**
3. 这个新对象会**绑定到函数调用的this**
4. 如果**函数没有返回其他对象**，那么new表达式中的函数调用会自动返回这个新对象；
   如果构造函数有返回值：
   - 返回值是基本类型，则返回新对象
   - 返回值是对象类型，则返回这个对象
 */
function myNew(Ctor, ...args) {
  if (!(Ctor && typeof Ctor === "function" && Ctor.prototype)) {
    throw new Error("Ctor must be a function");
  }

  const result = Object.create(Ctor.prototype);
  const res = Ctor.apply(result, args);

  if (res && (typeof res === "object" || typeof res === "function")) {
    return res;
  } else {
    return result;
  }
}
