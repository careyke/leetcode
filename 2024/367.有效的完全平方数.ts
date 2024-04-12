/*
 * @lc app=leetcode.cn id=367 lang=typescript
 *
 * [367] 有效的完全平方数
 * 二分法
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
  let left = 0;
  let right = num;

  while (left <= right) {
    const mid = (left + right) >>> 1;
    const midValue = mid * mid;
    if (midValue > num) {
      right = mid - 1;
    } else if (midValue < num) {
      left = mid + 1;
    } else {
      return true;
    }
  }
  return false;
}
// @lc code=end
