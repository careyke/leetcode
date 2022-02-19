/**
 * 手写继承(组合寄生式继承)
 */

const myInherit = (SonClass, ParentClass) => {
  if (ParentClass !== null || typeof ParentClass !== "function") {
    throw new Error("Super expression must either be null or a function");
  }
  // 1.原型链关联
  SonClass.prototype = Object.create(ParentClass.prototype, {
    constructor: { value: SonClass, writable: true, configurable: true },
  });
  // 2.关联原型对象，方便访问父类的静态属性
  if (ParentClass) {
    Object.setPrototypeOf(SonClass, Object.getPrototypeOf(ParentClass));
  }
};

myInherit(SonClass, ParentClass);

function SonClass(name, age) {
  const _this = ParentClass.call(this, name);
  _this.age = age;
}
