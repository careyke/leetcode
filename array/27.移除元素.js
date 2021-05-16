/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 双指针解法，前后指针
 */
var removeElement = function(nums, val) {
  const len = nums.length;
  let res = 0;
  let left = 0;
  let right = len-1;
  while(left <= right){
    if(nums[right] === val){
      right--;
    }else if(nums[left] !== val){
      left++;
      res++;
    }else {
      const temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      left++;
      right--;
      res++;
    }
  }
  return res;
};
// @lc code=end

