/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 排序 + 双指针
 * 注意排除重复元素
 * O(n^2)
 */
var threeSum = function (nums) {
  const len = nums.length;
  const res = [];
  if (len < 3) return res;

  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 2; i++) {
    const num = nums[i];
    if (num > 0) return res;
    if (num === nums[i - 1]) continue;
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const leftNum = nums[left];
      const rightNum = nums[right];
      if (leftNum + rightNum + num < 0) {
        left++;
      } else if (leftNum + rightNum + num > 0) {
        right--;
      } else {
        res.push([num, leftNum, rightNum]);
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
// console.log(threeSum([-1,0,1,2,-1,-4]));
