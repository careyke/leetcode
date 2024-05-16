/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 * 思路：双指针
 * 从后往前遍历，记录能达到目标索引的节点，然后把这个节点替换成目标。
 * 如果遍历到最后目标索引不是0，则不符合预期
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  const len = nums.length;
  if (len <= 1) return true;
  let target = len - 1;
  let index = len - 2;

  while (index >= 0) {
    const n = nums[index];
    if (index + n >= target) {
      target = index;
    }
    index--;
  }
  if (target === 0) {
    return true;
  } else {
    return false;
  }
}
// @lc code=end
