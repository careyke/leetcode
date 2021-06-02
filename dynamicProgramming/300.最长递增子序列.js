/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * f(n) = max(f(i)+1, f(j)+1,....)
 */
var lengthOfLIS = function(nums) {
  const len = nums.length;
  if(len < 0) return 0;
  const dp = [];
  let max = 0;
  for(let i=0;i<len;i++){
    let count = 1;
    for(let j=0;j<i;j++){
      if(nums[j] < nums[i]){
        count = Math.max(count,dp[j]+1);
      }
    }
    dp[i] = count;
    max = Math.max(max,count);
  }
  return max;
};
// @lc code=end

