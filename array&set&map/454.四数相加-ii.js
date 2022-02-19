/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const len = nums1.length;
  const map = new Map();

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const sum = 0 - nums1[i] - nums2[j];
      if (map.has(sum)) {
        map.set(sum, map.get(sum) + 1);
      } else {
        map.set(sum, 1);
      }
    }
  }

  let res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const sum = nums3[i] + nums4[j];
      if (map.has(sum)) {
        res += map.get(sum);
      }
    }
  }

  return res;
};
// @lc code=end
