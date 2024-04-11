/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 * 主要难点在空间复杂度O(1)上，正常的解法空间复杂度都是O(n)
 * 要想达到空间复杂度O(1)，需要使用一些奇技淫巧。
 * 需要做三次对称旋转。
 * 1. 旋转整个数据
 * 2. 旋转前 k%nums.len 个元素
 * 3. 旋转后面的元素
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const reverse = (start: number, end: number) => {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };

  const len = nums.length;
  const t = k % len;
  reverse(0, len - 1);
  reverse(0, t - 1);
  reverse(t, len - 1);
}
// @lc code=end
