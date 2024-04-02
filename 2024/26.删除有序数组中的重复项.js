/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 双指针 - 快慢指针
 */
var removeDuplicates = function (nums) {
  const len = nums.length;
  if (len === 1) return len;

  let left = 1;
  let prevValue = nums[0];
  let right = 1;
  while (right < len) {
    const rightNum = nums[right];
    if (rightNum <= prevValue) {
      right++;
    } else {
      if (left < right) {
        nums[left] = rightNum;
        nums[right] = prevValue;
      }
      prevValue = rightNum;
      left++;
      right++;
    }
  }
  return left;
};
// @lc code=end
