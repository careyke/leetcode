/**
 * 乱序函数
 * 1. this不能为null/undefined
 * 2. 确保this是一个对象
 * 3. empty 不跳过，处理成 undefiend。
 *
 * 思路：Fisher–Yates 算法来实现
 */
Array.prototype.shuffle = function () {
  if (this == null) {
    throw new Error("shuffle called on null or undefined");
  }

  const thisObj = Object(this);
  let len = 0;
  if (Number(thisObj.length) > 0) {
    len = Number(thisObj.length);
  }

  for (let i = len - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const value = thisObj[i];
    thisObj[i] = thisObj[randomIndex];
    thisObj[randomIndex] = value;
  }
  return thisObj;
};

// Test
function chanceTest(arr) {
  const obj = {};
  const time = 10000;
  for (let i = 0; i < time; i++) {
    let newArr = arr.concat([]).shuffle();
    let key = JSON.stringify(newArr);
    if (obj[key]) {
      obj[key]++;
    } else {
      obj[key] = 1;
    }
  }
  for (let k in obj) {
    console.log(`${k}: ${obj[k] / time}`);
  }
}
chanceTest([1, 2, 3]);
