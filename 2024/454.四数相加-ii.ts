/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 * 分成2+2
 * 记录map
 */

// @lc code=start
function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const map: Record<string, number> = {};
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const num = 0 - nums1[i] - nums2[j];
      if (map[num]) {
        map[num]++;
      } else {
        map[num] = 1;
      }
    }
  }

  let res: number = 0;
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const num = nums3[i] + nums4[j];
      if (map[num]) {
        res += map[num];
      }
    }
  }

  return res;
}
// @lc code=end
