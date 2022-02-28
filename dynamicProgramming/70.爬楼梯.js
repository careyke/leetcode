/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 数学归纳法
 * f(n) = f(n-1) + f(n-2)
 * 使用空间，递归边循环
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let dp_1 = 1;
  let dp_2 = 2;

  for (let i = 3; i <= n; i++) {
    const num = dp_1 + dp_2;
    dp_1 = dp_2;
    dp_2 = num;
  }
  return dp_2;
};
// @lc code=end
