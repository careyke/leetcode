/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 * 双指针
 * 1. 一个指针指向目标index位置
 * 2. 一个指针指向元素然后移动
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let left = 0;
  let right = 0;
  const len = nums.length;

  while (right < len) {
    const num = nums[right];
    if (num !== 0) {
      if (left !== right) {
        const t = nums[left];
        nums[left] = num;
        nums[right] = t;
      }
      left++;
    }
    right++;
  }
}
// @lc code=end
