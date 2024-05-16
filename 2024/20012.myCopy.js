/**
 * 1. 各个类型的值是否可以复制
 * 2. 相同引用是否可以保留
 * 3. 循环引用是否可以保留
 */
function testSpecial(deepClone) {
  var specialObj = {
    a: 1,
    b: null,
    c: undefined,
    d: { v: 2 },
  };
  return deepClone(specialObj);
}

function testSameQuote(deepClone) {
  var obj = { v: 1 };
  var o = {
    a: obj,
    b: obj,
  };
  var newO = deepClone(o);
  return newO.a === newO.b;
}

function testCircleQuote(deepClone) {
  var a = {};
  a.b = a;
  return deepClone(a); // 不会陷入死循环，超出时间限制
}

const copyObject = (o) => {
  const ctor = o.constructor;
  return new ctor();
};
const isObject = (o) => {
  return o && (typeof o === "object" || typeof o === "function");
};

// 递归实现
const deepCopy = (obj) => {
  if (!isObject(obj)) {
    throw new Error("obj must be an object");
  }

  const map = new WeakMap();

  const deepCloneCore = (o) => {
    if (map.has(o)) {
      return map.get(o);
    }
    const result = copyObject(o);
    map.set(o, result);
    for (const k in o) {
      if (o.hasOwnProperty(k)) {
        const v = o[k];
        if (isObject(v)) {
          result[k] = deepCloneCore(v);
        } else {
          result[k] = v;
        }
      }
    }
    return result;
  };

  return deepCloneCore(obj);
};

// test
console.log(testSpecial(deepCopy));
console.log(testSameQuote(deepCopy));
console.log(testCircleQuote(deepCopy));

// 循环实现
const deepCloneByLoop = (obj) => {
  if (!isObject(obj)) {
    throw new Error("obj must be an object");
  }
  const map = new WeakMap();
  const result = copyObject(obj);
  map.set(obj, result);
  const list = [
    {
      origin: obj,
      target: result,
    },
  ];

  while (list.length) {
    const { origin, target } = list.pop();
    for (const k in origin) {
      if (origin.hasOwnProperty(k)) {
        const v = origin[k];
        if (isObject(v)) {
          if (map.has(v)) {
            target[k] = map.get(v);
          } else {
            // 先复制对象，建立引用关系。
            // 然后push进入队列，后续在copy对象里面的属性
            const tv = copyObject(v);
            target[k] = tv;
            map.set(v, tv);
            list.push({ target: tv, origin: v });
          }
        } else {
          target[k] = v;
        }
      }
    }
  }

  return result;
};

// test
console.log(testSpecial(deepCloneByLoop));
console.log(testSameQuote(deepCloneByLoop));
console.log(testCircleQuote(deepCloneByLoop));
