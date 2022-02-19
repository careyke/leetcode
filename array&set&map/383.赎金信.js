/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const arr = new Array(26).fill(0);
  for (let i = 0; i < magazine.length; i++) {
    arr[magazine[i].charCodeAt() - 97]++;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const index = ransomNote[i].charCodeAt() - 97;
    if (arr[index] <= 0) return false;
    arr[index]--;
  }

  return true;
};
// @lc code=end
