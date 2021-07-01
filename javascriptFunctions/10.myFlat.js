Array.prototype.myFlat = function (level = 1) {
  if (!Number(level) || Number(level) < 1) return this;
  const flat = (arr, n) => {
    if (n < 1) return arr;
    return arr.reduce(
      (result, v) => result.concat(Array.isArray(v) ? flat(v, n - 1) : v),
      []
    );
  };
  return flat(this, level);
};

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
