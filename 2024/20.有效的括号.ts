/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 * 思路：使用栈来存储，利用栈先进后出的特点来处理这个问题
 */

// @lc code=start
function isValid(s: string): boolean {
  const stack: string[] = []

  const isLeft = (c: string): boolean => {
    return c === '(' || c === '[' || c === '{'
  }

  const isMatch = (leftC: string, rightC: string): boolean => {
    return (leftC === '(' && rightC === ')') || (leftC === '[' && rightC === ']') || (leftC === '{' && rightC === '}')
  }

  for (let c of s) {
    if (isLeft(c)) {
      stack.push(c)
    } else {
      if (stack.length) {
        const topC = stack.pop() as string;
        if (isMatch(topC, c)) {
          continue;
        }
      }
      return false
    }
  }

  return stack.length ? false : true
};
// @lc code=end

