/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let dp_0 = 0;
  let dp_1 = 1;

  for (let i = 2; i <= n; i++) {
    const num = dp_0 + dp_1;
    dp_0 = dp_1;
    dp_1 = num;
  }

  return dp_1;
};
// @lc code=end
