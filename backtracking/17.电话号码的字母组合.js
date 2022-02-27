/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const res = [];
  const queue = [];
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const len = digits.length;
  if (len < 1) return res;

  const backtracking = (index) => {
    if (queue.length === len) {
      res.push(queue.join(""));
      return;
    }

    const str = map[digits[index]] || [""]; // 考虑有非法字符的情况
    for (let i = 0; i < str.length; i++) {
      queue.push(str[i]);
      backtracking(index + 1);
      queue.pop();
    }
  };

  backtracking(0);
  return res;
};
// @lc code=end
