/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const map = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };
  for (let i = 0; i < tokens.length; i++) {
    const c = tokens[i];
    if (map[c]) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(map[c](a, b));
    } else {
      stack.push(Number(c));
    }
  }
  return stack[0];
};
// @lc code=end
