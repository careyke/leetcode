/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [];
  const queue = [];
  const len = candidates.length;
  candidates.sort((a, b) => a - b); // 排序 方便剪枝
  let sum = 0;

  const backtracking = (startIndex) => {
    if (sum >= target) {
      if (sum === target) {
        res.push([...queue]);
      }
      return;
    }

    for (let i = startIndex; i < len && sum + candidates[i] <= target; i++) {
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        // 同层相同元素，跳过
        continue;
      }
      queue.push(candidates[i]);
      sum += candidates[i];

      backtracking(i + 1);

      sum -= candidates[i];
      queue.pop();
    }
  };

  backtracking(0);
  return res;
};
// @lc code=end
