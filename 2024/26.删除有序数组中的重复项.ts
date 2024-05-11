/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 * 思路：双指针 - 快慢指针
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  const len = nums.length;
  let left = 0;
  let right = 0;
  let res: number = 0;

  while (right < len) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left++;
      res++;
    }
    right++;
  }

  return res;
};
// @lc code=end

