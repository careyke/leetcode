/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 数学归纳法
 * f(n) = (f(n-1) + n) 或 n
 */
var maxSubArray = function(nums) {
  const len = nums.length;
  let max = nums[0];
  let prev = nums[0];
  for(let i=1;i<len;i++){
    prev = Math.max(prev + nums[i],nums[i]); // 当前索引的最大值
    max = Math.max(prev,max); // 获取最大值
  }
  return max;
};
// @lc code=end

