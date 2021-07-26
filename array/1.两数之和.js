/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 构建map解法
 */
var twoSum = function (nums, target) {
  const map = new Map();
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    const n = target - num;
    if (map.has(n)) {
      return [map.get(n), i];
    } else {
      map.set(num, i);
    }
  }
  return [];
};
// @lc code=end
