/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 * 构建map，缓存差值
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map: Record<string, number> = {};
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    const n = nums[i];
    if (map[n] != undefined) {
      return [map[n], i];
    } else {
      map[target - n] = i;
    }
  }
  return [];
}
// @lc code=end
