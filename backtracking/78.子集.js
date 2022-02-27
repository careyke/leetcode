/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [[]];
  const queue = [];
  const len = nums.length;

  const backtracking = (startIndex) => {
    if (startIndex >= len) {
      return;
    }

    for (let i = startIndex; i < len; i++) {
      queue.push(nums[i]);
      res.push([...queue]);

      backtracking(i + 1);
      queue.pop();
    }
  };

  backtracking(0);
  return res;
};
// @lc code=end
