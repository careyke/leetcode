// 思路：instance的原型链中是否存在constructor的原型对象

const isObject = (x) => {
  return x && (typeof x === "object" || typeof x === "function");
};

const myInstanceof = (instance, constructor) => {
  if (!isObject(constructor)) {
    throw new Error("constructor is not an object");
  }
  if (!isObject(instance)) {
    return false;
  }

  let proto = Object.getPrototypeOf(instance);
  while (proto) {
    if (proto === constructor.prototype) {
      return true;
    } else {
      proto = Object.getPrototypeOf(proto);
    }
  }
  return false;
};

try {
  console.log(myInstanceof(1, 2));
} catch (error) {
  console.log(error);
}
console.log(myInstanceof(1, Object));
console.log(myInstanceof({}, Object));
console.log(myInstanceof(Object, Function));
console.log(myInstanceof(Function, Object));
