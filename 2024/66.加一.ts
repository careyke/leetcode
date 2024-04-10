/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 * 重点在进位，极端的情况下需要增加组件的长度。比如999+1
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let prefix = 1;
  const len = digits.length;

  for (let i = len - 1; i >= 0 && prefix > 0; i--) {
    const n = digits[i];
    if (n > 8) {
      digits[i] = 0;
      prefix = 1;
    } else {
      digits[i] = n + 1;
      prefix = 0;
    }
  }
  if (prefix) {
    return [1].concat(digits);
  } else {
    return digits;
  }
}
// @lc code=end
