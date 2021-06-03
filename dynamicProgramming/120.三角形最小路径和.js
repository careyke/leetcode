/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 * dp[i][j] = min(dp[i-1][j] + n,dp[i-1][j-1]+n)
 */
var minimumTotal = function(triangle) {
  const row = triangle.length;
  if(row === 1) return triangle[0][0];
  const dp = [];
  dp[0] = triangle[0][0];
  let min = Number.MAX_SAFE_INTEGER;

  for(let i=1; i<row; i++){
    const arr = triangle[i];
    const currentLen = arr.length;
    // 这里倒序可以节省空间
    for(let j=currentLen-1; j>=0; j--){
      if(j === currentLen-1){
        dp[j] = dp[j-1] + arr[j];
      }else if (j === 0){
        dp[j] = dp[j] + arr[j];
      }else{
        dp[j] = Math.min(dp[j-1], dp[j]) + arr[j];
      }
      if(i === row-1){
        min = Math.min(min,dp[j])
      }
    }
  }
  return min;
};

// @lc code=end

