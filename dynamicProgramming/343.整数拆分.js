/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 公式:dp[n] = max(dp[n-i] * dp[i],dp[n-i] * i,(n-i)*dp[i],(n-i)*i)
 */
var integerBreak = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      // 数字有拆和不拆两种状态，所以一共是4个数比大小
      dp[i] = Math.max(
        dp[i],
        dp[i - j] * dp[j],
        dp[i - j] * j,
        dp[j] * (i - j),
        (i - j) * j
      );
    }
  }
  return dp[n];
};
// @lc code=end
