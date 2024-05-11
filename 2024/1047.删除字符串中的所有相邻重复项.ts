/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 * 思路：使用栈结构来解决
 */

// @lc code=start
function removeDuplicates(s: string): string {
  const stack = new Stack<string>();
  const len = s.length;

  for (let i = 0; i < len; i++) {
    const c = s[i];
    if (stack.top() !== c) {
      stack.push(c);
    } else {
      stack.pop();
    }
  }

  return stack.getString();
};

class Stack<T> {
  private queue: T[] = [];

  public push = (x: T) => {
    this.queue.push(x);
  }

  public pop = (): T | undefined => {
    return this.queue.pop()
  }

  public top = (): T | undefined => {
    const len = this.queue.length;
    return this.queue[len - 1]
  }

  public get size(): number {
    return this.queue.length
  }

  public getString = () => {
    return this.queue.join('');
  }
}
// @lc code=end

