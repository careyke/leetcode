/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = x;

  while (left <= right) {
    const mid = (left + right) >>> 1;
    const value = mid * mid;
    if (value > x) {
      right = mid - 1;
    } else if (value < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return left - 1;
};
// @lc code=end
