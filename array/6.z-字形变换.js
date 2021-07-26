/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 周期变化
 * 找到规律可以降低复杂度
 * 把数组每个子项按照规律拼成字符串
 */
var convert = function (s, numRows) {
  const len = s.length;
  if (numRows === 1) return s;
  const arr = new Array(numRows).fill("");

  const period = numRows * 2 - 2;
  for (let i = 0; i < len; i++) {
    const n = i % period;
    const m = n % numRows;
    if (n < numRows) {
      arr[m] = arr[m] + s[i];
    } else {
      const index = numRows - 2 - m;
      arr[index] = arr[index] + s[i];
    }
  }

  return arr.join("");
};
// @lc code=end
