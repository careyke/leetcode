/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 * 从后往前遍历
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  const len = s.length;
  let res = "";

  for (let i = len - 1; i >= 0; i--) {
    const c = s[i];
    if (c !== " ") {
      res = c + res;
    } else {
      if (res.length) {
        break;
      }
    }
  }
  return res.length;
}
// @lc code=end
