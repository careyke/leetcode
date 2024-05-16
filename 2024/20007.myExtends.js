/**
 * 1. 成员属性复制
 * 2. 成员方法关联
 * 3. constructor指向正确
 * 4. 构造函数原型链指向正确
 */
function Parent(height) {
  this.height = height;
}
Parent.prototype.say = function () {
  console.log("parent");
};

function Son(name) {
  Parent.call(this, 100);
  this.name = name;
}

Son.prototype = Object.create(Parent.prototype);
Son.prototype.look = function () {
  console.log("Son");
};
Son.prototype.constructor = Son;

Object.setPrototypeOf(Son, Parent);
