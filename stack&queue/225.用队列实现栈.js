/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.mainQueue = []; // 主队列
  this.copyQueue = []; // 副队列 - 辅助操作
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.copyQueue.push(x);
  while (this.mainQueue.length) {
    this.copyQueue.push(this.mainQueue.shift());
  }
  const temp = this.mainQueue;
  this.mainQueue = this.copyQueue;
  this.copyQueue = temp;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.mainQueue.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.mainQueue[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.mainQueue.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// @lc code=end
