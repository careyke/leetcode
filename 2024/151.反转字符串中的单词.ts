/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 * 解题思路：从后往前遍历，获取单词，然后以单词为单位拼接。
 */

// @lc code=start
function reverseWords(s: string): string {
  const len = s.length;
  let right = len - 1;
  let word = "";
  let res = "";

  while (right >= 0) {
    const c = s[right];
    if (c === " ") {
      while (s[right] === " ") {
        right--;
      }
      if (res.length) {
        res = res + " " + word;
      } else {
        res = word;
      }
      word = "";
    } else {
      word = c + word;
      right--;
    }
  }
  if (word.length) {
    if (res.length) {
      res = res + " " + word;
    } else {
      res = word;
    }
  }
  return res;
}
// @lc code=end
