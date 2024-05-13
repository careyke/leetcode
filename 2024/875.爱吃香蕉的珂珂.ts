/*
 * @lc app=leetcode.cn id=875 lang=typescript
 *
 * [875] 爱吃香蕉的珂珂
 * 思路：从1开始递增查找，二分法
 * 这里需要先写一个是否能吃完的判断方法
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
  // 获取最大值，速度>=max时耗时最少
  const max = piles.reduce((m, n) => {
    return Math.max(m, n);
  }, 0);

  const canEat = (speed: number): boolean => {
    const sum = piles.reduce((s, n) => {
      return s + Math.ceil(n / speed);
    }, 0);
    return sum <= h;
  };

  let left = 1;
  let right = max;

  while (left < right) {
    const mid = left + ((right - left) >>> 1);
    if (canEat(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
// @lc code=end
