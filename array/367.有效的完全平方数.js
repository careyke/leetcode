/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    const mid = (left + right) >>> 1;
    const value = mid * mid;
    if (value > num) {
      right = mid - 1;
    } else if (value < num) {
      left = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};
// @lc code=end
