/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let left = s.length - 1;
  let right = t.length - 1;
  let sNum = 0;
  let tNum = 0;

  while (left >= 0 && right >= 0) {
    let sV = false;
    let tV = false;
    if (s[left] === "#") {
      sNum++;
      left--;
    } else if (sNum) {
      left--;
      sNum--;
    } else {
      sV = true;
    }
    if (t[right] === "#") {
      tNum++;
      right--;
    } else if (tNum) {
      right--;
      tNum--;
    } else {
      tV = true;
    }
    console.log("right", right, left);
    if (sV && tV) {
      console.log(left, right);
      if (s[left] !== t[right]) return false;
      left--;
      right--;
    }
  }
  console.log("mmm", left, right);
  if (left >= 0 || right >= 0) return false;
  return true;
};
// @lc code=end
console.log(backspaceCompare("y#fo##f", "y#fx#o##f"));
