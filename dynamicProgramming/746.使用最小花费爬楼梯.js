/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const len = cost.length;
  const dp = new Array(len);
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i <= len; i++) {
    dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
  }
  return dp[len];
};

/**
 * @param {number[]} cost
 * @return {number}
 * 空间复杂度优化
 */
var minCostClimbingStairs = function (cost) {
  const len = cost.length;
  if (len < 2) return 0;

  let dp_0 = 0;
  let dp_1 = 0;

  for (let i = 2; i <= len; i++) {
    const num = Math.min(dp_0 + cost[i - 2], dp_1 + cost[i - 1]);
    dp_0 = dp_1;
    dp_1 = num;
  }
  return dp_1;
};
// @lc code=end
