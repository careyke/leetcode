/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const t = stack.pop();
    if (c !== t) {
      stack.push(t);
      stack.push(c);
    }
  }
  return stack.join("");
};
// @lc code=end
