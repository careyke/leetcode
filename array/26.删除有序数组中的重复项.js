/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 * 需要保持相对顺序，最优解是快慢指针
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length;
  if (len < 2) return len;
  let left = 0;
  let right = 1;

  for (; right < len; right++) {
    if (nums[right] !== nums[right - 1]) {
      nums[++left] = nums[right];
    }
  }
  return left + 1;
};
// @lc code=end
