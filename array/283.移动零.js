/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 * 凡是在移动元素之后需要保持相对顺序的，都可以考虑使用快慢指针
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const len = nums.length;
  let left = 0;
  let right = 0;
  for (; right < len; right++) {
    if (nums[right] !== 0) {
      const temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      left++;
    }
  }
};
// @lc code=end
