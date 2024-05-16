// 递归实现
Array.prototype.myFlat = function (num = 1) {
  if (!Number(num) || Number(num) < 0) {
    return this;
  }

  const flat = (arr, n) => {
    if (n > 0) {
      return arr.reduce((result, v) => {
        return result.concat(Array.isArray(v) ? flat(v, n - 1) : v);
      }, []);
    } else {
      return arr;
    }
  };

  const result = flat(this, num);
  console.log(JSON.stringify(result));
  return result;
};

// Generator实现
Array.prototype.myFlat = function (num = 1) {
  if (!Number(num) || Number(num) < 0) {
    return this;
  }
  function* gen(arr, n) {
    for (let v of arr) {
      if (Array.isArray(v) && n > 0) {
        yield* gen(v, n - 1);
      } else {
        yield v;
      }
    }
  }

  const g = gen(this, num);
  const result = [...g];
  console.log(JSON.stringify(result));
  return result;
};

// Test
var flatTestArray = [
  1,
  2,
  3,
  [4, 5, 6, ["7", "8", 9, [{ a: 1 }, { b: 2 }], 10]],
];

flatTestArray.myFlat(); // [1, 2, 3, 4, 5, 6, Array(5)]
flatTestArray.myFlat(2); // [1, 2, 3, 4, 5, 6, "7", "8", 9, Array(2), 10]
flatTestArray.myFlat(Infinity); // [1, 2, 3, 4, 5, 6, "7", "8", 9, {a:1}, {b:2}, 10]
flatTestArray.myFlat(null); // [1, 2, 3, Array(4)]
flatTestArray.myFlat(0); // [1, 2, 3, Array(4)]
flatTestArray.myFlat(-1); // [1, 2, 3, Array(4)]
flatTestArray.myFlat("1"); // [1, 2, 3, 4, 5, 6, Array(5)]
flatTestArray.myFlat("1w"); // [1, 2, 3, Array(4)]

[1, 2, [3, , 4, 5], 6].myFlat(Infinity); // [1, 2, 3, 4, 5, 6]  reduce函数会跳过数组的空位
