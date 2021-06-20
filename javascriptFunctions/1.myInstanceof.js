/**
 * 手写 instanceof 操作符
 * 1. 操作符右边的数据必须是构造函数
 * 2. 操作符左边如果是基本类型，直接返回false
 * 3. 左边对象的原型链上如果有右边构造函数的原型对象，则返回true；否则返回false
 */
const myInstanceof = (left,right) => {
  // #1
  if(typeof right !== "function"){
    throw TypeError("Right-hand side of 'instanceof' is not callable");
  }
  if(!(left && (typeof left === 'object') || typeof left === 'function')){
    return false;
  }
  const rightPrototype = right.prototype;
  let leftProto = Object.getPrototypeOf(left);
  while(leftProto){
    if(leftProto === rightPrototype){
      return true;
    }else{
      leftProto = Object.getPrototypeOf(leftProto);
    }
  }
  return false;
}

// test
try {
  console.log(myInstanceof(1,{}));
} catch (error) {
  console.log(error)
} 
console.log(myInstanceof(1,Object));
console.log(myInstanceof({},Object));
console.log(myInstanceof(Object,Function));
console.log(myInstanceof(Function,Object));