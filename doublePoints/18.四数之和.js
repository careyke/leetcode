/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const len = nums.length;
  const res = [];

  //1.排序
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 3; i++) {
    // 不能通过以下方式过滤。考虑负数的情况
    // if(nums[i]>target) return res;

    //2.a去重
    if (nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < len - 2; j++) {
      // 3.b去重
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let l = j + 1;
      let r = len - 1;
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum > target) {
          r--;
        } else if (sum < target) {
          l++;
        } else {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          r--;
          l++;
          while (nums[l] === nums[l - 1]) {
            l++;
          }
          while (nums[r] === nums[r + 1]) {
            r--;
          }
        }
      }
    }
  }
  return res;
};
// @lc code=end
