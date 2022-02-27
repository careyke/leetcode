/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = [];
  const queue = [];
  const len = s.length;
  let splitNum = 0; // 分隔次数

  const backtracking = (startIndex) => {
    if (splitNum === 3) {
      if (isValid(s, startIndex, len - 1)) {
        res.push([...queue, s.substring(startIndex)].join("."));
      }
      return;
    }

    const end = len - (4 - queue.length);
    for (let i = startIndex; i <= end; i++) {
      if (isValid(s, startIndex, i)) {
        queue.push(s.substring(startIndex, i + 1));
        splitNum++;

        backtracking(i + 1);

        splitNum--;
        queue.pop();
      }
    }
  };

  backtracking(0);
  return res;
};

function isValid(s, left, right) {
  if (right > left) {
    if (s[left] === "0") return false;
  }
  const num = Number(s.substring(left, right + 1));
  if (Number.isNaN(num)) return false;
  if (num >= 0 && num <= 255) return true;
  return false;
}
// @lc code=end
