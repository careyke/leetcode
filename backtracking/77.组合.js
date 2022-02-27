/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 回溯
 */
var combine = function (n, k) {
  const res = [];
  const queue = [];

  const backtracking = (n, k, startIndex) => {
    if (queue.length === k) {
      res.push([...queue]);
      return;
    }

    const end = n - (k - queue.length) + 1; // 剪枝
    for (let i = startIndex; i <= end; i++) {
      queue.push(i);
      backtracking(n, k, i + 1);
      queue.pop();
    }
  };

  backtracking(n, k, 1);
  return res;
};
// @lc code=end
