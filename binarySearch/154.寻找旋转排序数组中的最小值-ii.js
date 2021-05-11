/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const len = nums.length;
  let left = 0;
  let right = len-1;
  while(left < right){
    const mid = Math.floor((left+right)/2);
    const n = nums[mid];
    if(n > nums[right]){
      left = mid + 1;
    }else if(n < nums[right]){
      right = mid;
    }else{
      // 出现相等，right肯定不是唯一的最小数.
      // 这种情况下 二分法作废
      right--;
    }
  }
  return nums[left];
};
// @lc code=end

