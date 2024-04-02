/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 * 多指针
 */
var longestCommonPrefix = function (strs) {
  const len = strs.length;
  if (len < 1) {
    return "";
  }
  if (len === 1) {
    return strs[0];
  }
  let res = "";
  const str = strs[0];
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    for (let j = 1; j < len; j++) {
      const c1 = strs[j][i];
      if (c1 !== c) {
        return res;
      }
    }
    res += c;
  }
  return res;
};
// @lc code=end
