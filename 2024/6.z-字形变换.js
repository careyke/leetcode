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
 * 数学归纳 找规律
 * 顶点下标: period = (2n-2)*m
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const res = new Array(numRows).fill("");
  const len = s.length;
  const period = numRows * 2 - 2;

  for (let i = 0; i < len; i++) {
    const n = i % period;
    const m = n % numRows;
    if (n < numRows) {
      res[n] = res[n] + s[i];
    } else {
      const index = numRows - 2 - m;
      res[index] = res[index] + s[i];
    }
  }
  return res.join("");
};
// @lc code=end
