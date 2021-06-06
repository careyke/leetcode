/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * dp[i] = max(dp[i-2] + n, dp[i-1])
 */
var rob = function(nums) {
  const len = nums.length;
  if(len === 1) return nums[0];
  const dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0],nums[1]);
  
  let max = Math.max(dp[0],dp[1]);

  for(let i = 2; i < len; i++){
    // 使用逻辑表达式性能不好 (dp[i-2] || 0)
    dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i]);
    max = Math.max(max,dp[i]);
  }

  return max;
};
// @lc code=end

