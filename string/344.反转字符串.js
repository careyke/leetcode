/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const len = s.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    const temp = s[right];
    s[right--] = s[left];
    s[left++] = temp;
  }
};
// @lc code=end
