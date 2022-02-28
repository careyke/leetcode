/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//   const dp = Array.from(new Array(m)).map(() => new Array(n).fill(1));

//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//     }
//   }
//   return dp[m - 1][n - 1];
// };

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 优化空间复杂度：O(m*n) => O(n)
 * 滚动数组
 */
var uniquePaths = function (m, n) {
  const dp = new Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[j] = dp[j] + (dp[j - 1] || 0);
    }
  }

  return dp[n - 1];
};
// @lc code=end
