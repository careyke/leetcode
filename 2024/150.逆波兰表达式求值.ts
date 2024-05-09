/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 * 思路：使用栈的数据结构来解答。
 * 1. 如果时数字则入栈
 * 2. 遇到符号时，取出栈顶两个数字，将运算之后的值塞入栈
 * 
 * 向零截断:只取整数部分，Math.trunc
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  const isSign = (c: string) => {
    return ['+', '-', '*', '/'].includes(c)
  }
  const operate = (num1: number, num2: number, sign: string): number => {
    switch (sign) {
      case '+':
        return num1 + num2
      case '-':
        return num1 - num2
      case '*':
        return num1 * num2
      case '/':
        return Math.trunc(num1 / num2)
    }
    return 0
  }

  for (let c of tokens) {
    if (isSign(c)) {
      const num1 = stack.pop();
      const num2 = stack.pop();
      if (num1 != undefined && num2 != undefined) {
        const res = operate(num2, num1, c)
        stack.push(res)
      }
    } else {
      stack.push(Number(c))
    }
  }

  return stack[0]
};
// @lc code=end

