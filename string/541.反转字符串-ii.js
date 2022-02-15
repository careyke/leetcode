/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const res = s.split("");
  const len = res.length;
  for (let i = 0; i < len; i += k * 2) {
    if (i + k <= len) {
      reverse(res, i, i + k - 1);
    } else {
      reverse(res, i, len - 1);
    }
  }
  return res.join("");
};

function reverse(arr, begin, end) {
  while (begin < end) {
    const temp = arr[begin];
    arr[begin++] = arr[end];
    arr[end--] = temp;
  }
}
// @lc code=end
