/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * [153] 寻找旋转排序数组中的最小值
 * 思路：二分查找
 * 1. if mid > right 说明最小值在右区间
 */

// @lc code=start
function findMin(nums: number[]): number {
  const len = nums.length;

  let left = 0;
  let right = len - 1;
  while (left < right) {
    const mid = (left + right) >>> 1;
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
}
// @lc code=end
