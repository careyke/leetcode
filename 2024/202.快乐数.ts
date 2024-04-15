/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 * 这道题主要是对于循环的数据结束点不好判断
 * 试了下，对于无线循序的数据一定会有重复的结果，
 * 可以根据这个来判断是否需要中断循环
 */

// @lc code=start
function isHappy(n: number): boolean {
  const getSqare = (n: number): number => {
    return Array.from(String(n)).reduce((num, i) => {
      return num + Number(i) * Number(i);
    }, 0);
  };

  const set = new Set<number>();
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = getSqare(n);
  }

  return n === 1;
}
// @lc code=end
