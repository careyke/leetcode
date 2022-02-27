/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  const queue = [];

  // 排序，方便后面剪枝
  candidates.sort((a, b) => a - b);
  const len = candidates.length;
  let sum = 0;

  const backtracking = (startIndex) => {
    if (sum >= target) {
      if (sum === target) {
        res.push([...queue]);
      }
      return;
    }

    for (let i = startIndex; i < len && sum + candidates[i] <= target; i++) {
      queue.push(candidates[i]);
      sum += candidates[i]; // 当前元素可以被选取多次

      backtracking(i);

      sum -= candidates[i];
      queue.pop();
    }
  };

  backtracking(0);
  return res;
};
// @lc code=end
