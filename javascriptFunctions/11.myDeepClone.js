function deepClone(object) {
  if (!isObject(object)) {
    throw TypeError("object must be a Object");
  }

  const result = createObject(object);
  const list = [{ data: object, targetObject: result }];
  const map = new WeakMap();
  map.set(object, result);

  while (list.length > 0) {
    const { data, targetObject } = list.pop();
    for (const key in data) {
      if (!data.hasOwnProperty(key)) break;
      const v = data[key];
      if (isObject(v)) {
        if (map.has(v)) {
          targetObject[key] = map.get(v);
        } else {
          const newObject = createObject(v);
          map.set(v, newObject);
          targetObject[key] = newObject;
          list.push({ data: v, targetObject: newObject });
        }
      } else {
        targetObject[key] = v;
      }
    }
  }

  return result;
}

function createObject(obj) {
  const constructor = obj.constructor;
  return new constructor();
}

function isObject(obj) {
  return obj && (typeof obj === "object" || typeof obj === "function");
}

// test
var specialObj = {
  a: 1,
  b: null,
  c: undefined,
  d: { v: 2 },
};
console.log(deepClone(specialObj));

var obj = { v: 1 };
var o = {
  a: obj,
  b: obj,
};
var newO = deepClone(o);
console.log(newO.a === newO.b);

var a={}
a.b = a;
console.log(deepClone(a));
