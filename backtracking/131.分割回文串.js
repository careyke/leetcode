/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = [];
  const queue = [];
  const len = s.length;

  const backtracking = (startIndex) => {
    if (startIndex >= len) {
      res.push([...queue]);
      return;
    }

    for (let i = startIndex; i < len; i++) {
      if (isPalindrome(s, startIndex, i)) {
        queue.push(s.substring(startIndex, i + 1));
        backtracking(i + 1);
        queue.pop();
      }
    }
  };

  backtracking(0);
  return res;
};

function isPalindrome(s, left, right) {
  while (left <= right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
// @lc code=end
