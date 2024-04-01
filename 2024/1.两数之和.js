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
 */
var twoSum = function (nums, target) {
  const map = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const newIdx = map[n];
    if (newIdx == undefined) {
      map[target - n] = i;
    } else {
      result = [newIdx, i];
      break;
    }
  }
  return result;
};
// @lc code=end
console.log(twoSum([2, 7, 11, 15], 9));
