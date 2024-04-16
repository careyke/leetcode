/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 * 使用set结构
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const map: Record<string, number> = {};
  for (let i = 0; i < nums1.length; i++) {
    const n = nums1[i];
    map[n] = 1;
  }

  const set = new Set<number>();
  for (let i = 0; i < nums2.length; i++) {
    const n = nums2[i];
    if (map[n]) {
      set.add(n);
    }
  }

  return [...set];
}
// @lc code=end
