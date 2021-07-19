/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
/**
 * Initialize your data structure here.
 * 可以使用一个队列
 */
var MyStack = function() {
  // 插入时交换位置
  this.queue1 = []; // 主队列
  this.queue2 = []; // 辅助队列
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 * 构造一个反向的队列
 */
MyStack.prototype.push = function(x) {
  this.queue2.push(x);
  this.queue1.forEach((value)=>{
    this.queue2.push(value);
  });
  this.queue1 = this.queue2;
  this.queue2 = [];
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.queue1.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.queue1[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue1.length === 0;
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

