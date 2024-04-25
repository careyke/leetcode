/*
 * @lc app=leetcode.cn id=796 lang=typescript
 *
 * [796] 旋转字符串
 * 思路：旋转 length 次。如果不匹配就是不行
 */

// @lc code=start
function rotateString(s: string, goal: string): boolean {
  const len = s.length;
  let index = 0;

  while (index < len) {
    const subStr = s.substring(index + 1);
    const pre = s.substring(0, index + 1);
    const newStr = subStr + pre;
    if (newStr === goal) {
      return true;
    }
    index++;
  }
  return false;
}
// @lc code=end
