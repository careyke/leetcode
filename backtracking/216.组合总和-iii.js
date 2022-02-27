/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = [];
  const queue = [];
  let sum = 0;

  const backtracking = (n, k, start) => {
    if (queue.length === k) {
      if (sum === n) {
        res.push([...queue]);
      }
      return;
    }

    const end = 9 - (k - queue.length) + 1;
    for (let i = start; i <= end; i++) {
      queue.push(i);
      sum += i;
      if (sum <= n) {
        backtracking(n, k, i + 1);
      }
      queue.pop();
      sum -= i;
    }
  };

  backtracking(n, k, 1);
  return res;
};

combinationSum3(3, 7);
// @lc code=end
