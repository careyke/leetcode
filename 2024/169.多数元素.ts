/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 * 思路：使用map
 *
 * 进阶思路：使用Boyer-Moore 投票算法。
 * 简单来说就是数据不同就消除，同归于尽，最终剩下的就是众数。
 * 因为题目规定众数的个数大于 n/2.
 * 空间复杂度：O(1)
 */

// @lc code=start
function majorityElement01(nums: number[]): number {
  const len = nums.length;
  const map: Record<string, number> = {};

  for (const n of nums) {
    let sum = 0;
    if (map[n]) {
      sum = map[n] + 1;
    } else {
      sum = 1;
    }
    if (sum > len >>> 1) {
      return n;
    } else {
      map[n] = sum;
    }
  }
  return 0;
}

// Boyer-Moore 投票算法
function majorityElement(nums: number[]): number {
  const len = nums.length;
  let num = 0;
  let count = 0;

  for (let i = 0; i < len; i++) {
    const n = nums[i];
    if (count === 0) {
      num = n;
      count++;
    } else {
      if (num === n) {
        count++;
      } else {
        count--;
      }
    }
  }

  return num;
}

// @lc code=end
