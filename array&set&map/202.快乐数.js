/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();
  // 一旦这个数之前出现过，再次出现说明一定会死循环
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = getSquare(n);
  }

  return n === 1;
};

function getSquare(num) {
  return Array.from(String(num)).reduce((count, n) => {
    return count + Number(n) * Number(n);
  }, 0);
}
// @lc code=end
