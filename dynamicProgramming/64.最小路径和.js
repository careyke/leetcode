/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 * dp[i][j] = min(dp[i][j-1] + n, dp[i-1][j] + n);
 */
var minPathSum = function(grid) {
  const row = grid.length;
  const col = grid[0].length;
  const dp=[];
  for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
      const n = grid[i][j];
      if(i===0 && j===0){
        dp[j] = n;
      }else if(i===0){
        dp[j] = dp[j-1] + n;
      }else if(j===0){
        dp[j] = dp[j] + n;
      }else{
        dp[j] = Math.min(dp[j-1]+n,dp[j]+n);
      }
    }
  }
  return dp[col-1];
};
// @lc code=end

