/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = Array.from(s);
  removeSpace(arr);
  reverse(arr, 0, arr.length - 1);

  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      reverse(arr, left, i - 1);
      left = i + 1;
    }
    if (i === arr.length - 1) {
      reverse(arr, left, i);
    }
  }
  return arr.join("");
};

function removeSpace(arr) {
  const len = arr.length;
  let left = 0;
  let right = 0;
  for (; right < len; right++) {
    const prev = arr[right - 1];
    const cur = arr[right];
    if ((!prev || prev === cur) && cur === " ") {
      continue;
    } else {
      arr[left++] = arr[right];
    }
  }
  if (arr[left - 1] === " ") {
    left = left - 1;
  }
  arr.length = left;
}

function reverse(arr, begin, end) {
  while (begin < end) {
    [arr[begin], arr[end]] = [arr[end], arr[begin]];
    begin++;
    end--;
  }
}
// @lc code=end
