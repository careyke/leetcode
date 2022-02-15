/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
// 方法1：旋转法
var reverseLeftWords = function (s, n) {
  const arr = Array.from(s);
  const len = arr.length;
  reverse(arr, 0, n - 1);
  reverse(arr, n, len - 1);
  reverse(arr, 0, len - 1);
  return arr.join("");
};

function reverse(arr, begin, end) {
  while (begin < end) {
    [arr[begin], arr[end]] = [arr[end], arr[begin]];
    begin++;
    end--;
  }
}

// 方法2：字符串累加
var reverseLeftWords = function (s, n) {
  for (let i = 0; i < n; i++) {
    s = s + s[i];
  }

  let res = "";
  for (let i = n; i < s.length; i++) {
    res += s[i];
  }
  return res;
};

// leetcode中执行多次证明：
// 方法2比方法1更耗时，也更耗内存！！！
