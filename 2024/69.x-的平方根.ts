/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 * 二分法
 */

// @lc code=start
function mySqrt(x: number): number {
  let left = 0;
  let right = x;

  while (left <= right) {
    const mid = (left + right) >>> 1;
    const n = mid * mid;
    if (n > x) {
      right = mid - 1;
    } else if (n < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return left - 1;
}

// 从 1 开始遍历
// function mySqrt(x: number): number {
//   let i = 1;
//   while (true) {
//     const n = i * i;
//     if (n > x) {
//       return i - 1;
//     } else if (n === x) {
//       return i;
//     } else {
//       i++;
//     }
//   }
// }
