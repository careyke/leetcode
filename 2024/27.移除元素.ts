/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 * 快慢指针
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  const len = nums.length;
  let left = 0;
  let right = 0;

  for (; right < len; right++) {
    if (nums[right] !== val) {
      nums[left++] = nums[right];
    }
  }
  return left;
}
// @lc code=end
