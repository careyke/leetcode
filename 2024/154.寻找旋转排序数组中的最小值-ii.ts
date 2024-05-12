/*
 * @lc app=leetcode.cn id=154 lang=typescript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 * 思路：二分查找 - 和153题一样
 * 需要多考虑的一个边界是 mid === right时，二分法的区间指针如何移动
 * mid === right时，无法确定最小值在那边，但是可以确定又指针一定不会唯一最小值，可以移动右指针。
 */

// @lc code=start
function findMin(nums: number[]): number {
  const len = nums.length;

  let left = 0;
  let right = len - 1;
  while (left < right) {
    const mid = (left + right) >>> 1;
    const num = nums[mid];
    if (num > nums[right]) {
      left = mid + 1;
    } else if (num < nums[right]) {
      right = mid;
    } else {
      right--;
    }
  }
  return nums[left];
}
// @lc code=end
