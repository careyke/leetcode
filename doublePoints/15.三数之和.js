/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1) (除去存值数组)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length;
  const res = [];

  // 1.排序，方便去重
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break;
    // 2.对a去重
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
        // 3.对b去重
        while (nums[l] === nums[l - 1]) {
          l++;
        }
        while (nums[r] === nums[r + 1]) {
          r--;
        }
      }
    }
  }
  return res;
};
// @lc code=end
