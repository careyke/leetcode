/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const arr1 = genArr(s);
  // 1. 解法1
  // const arr2 = genArr(t);
  // for (let i = 0; i < 26; i++) {
  //   if (arr1[i] !== arr2[i]) return false;
  // }

  // 2. 解法2 - 两个字符串长度必相等
  for (let i = 0; i < t.length; i++) {
    const index = t.charCodeAt(i) - 97;
    if (!arr1[index]) return false;
    arr1[index]--;
  }

  return true;
};

function genArr(str) {
  const arr = new Array(26).fill(0);
  const len = str.length;

  for (let i = 0; i < len; i++) {
    arr[str.charCodeAt(i) - 97]++;
  }
  return arr;
}
// @lc code=end
