/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * 巧妙转化
 * 判断goal是不是 a+a 的子串即可，前提是长度goal和a长度相等
 * 
 * 可以使用sunday算法来优化查找子串的过程，参考：28.实现-str-str.js
 */
var rotateString = function(s, goal) {
  const len1 = s.length;
  const len2 = goal.length;
  if(len1 !== len2) return false;
  return (s+s).includes(goal);
};
// @lc code=end

