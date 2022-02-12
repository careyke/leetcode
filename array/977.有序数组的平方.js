/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const len = nums.length;
  const result = new Array(len);

  let left = 0;
  let right = len - 1;
  let index = len - 1;
  while (left <= right) {
    const rV = nums[right] * nums[right];
    const lV = nums[left] * nums[left];
    if (lV >= rV) {
      result[index--] = lV;
      left++;
    } else {
      result[index--] = rV;
      right--;
    }
  }
  return result;
};
// @lc code=end
