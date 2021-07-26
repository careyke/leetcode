/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * 这种方式会超时
 * @param {*} nums
 * @param {*} k
 * @returns
 */
var rotate1 = function (nums, k) {
  const len = nums.length;
  if (len === 1) return nums;
  const n = k % len;
  for (let i = 0; i < n; i++) {
    const num = nums.pop();
    nums.unshift(num);
  }
};

/**
 * 先整体reverse 在分片reverse
 * @param {*} nums
 * @param {*} k
 * @returns
 */
var rotate = function (nums, k) {
  const len = nums.length;
  if (len === 1) return nums;
  const n = k % len;
  reverse(nums, 0, len - 1);
  reverse(nums, 0, n - 1);
  reverse(nums, n, len - 1);
};

var reverse = function (nums, left, right) {
  for (let i = left; i < (left + right) / 2; i++) {
    const temp = nums[i];
    nums[i] = nums[right + left - i];
    nums[right + left - i] = temp;
  }
  return nums;
};

// @lc code=end
