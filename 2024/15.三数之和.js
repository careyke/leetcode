/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 先排序，双指针
 * 排序更好剪枝，可以降低时间复杂度
 */
var threeSum = function (nums) {
  const len = nums.length;
  if (len < 3) return [];
  nums.sort((a, b) => a - b);

  const res = [];
  for (let i = 0; i < len - 2; i++) {
    const n = nums[i];
    if (n > 0) return res;
    if (n === nums[i - 1]) continue;

    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const leftNum = nums[left];
      const rightNum = nums[right];
      if (n + leftNum + rightNum < 0) {
        left++;
      } else if (n + leftNum + rightNum > 0) {
        right--;
      } else {
        res.push([n, leftNum, rightNum]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return res;
};
// @lc code=end
