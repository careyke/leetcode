/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const len = nums.length;
  const maxQueue = new MaxQueue();
  const res = [];

  for (let i = 0; i < k; i++) {
    maxQueue.enqueue(nums[i]);
  }
  res.push(maxQueue.front());

  for (let i = k; i < len; i++) {
    maxQueue.dequeue(nums[i - k]);
    maxQueue.enqueue(nums[i]);
    res.push(maxQueue.front());
  }

  return res;
};

class MaxQueue {
  constructor() {
    // 保存当前滑动窗口可能成为最大值的数据(双向队列)
    // 单调递减队列
    this.queue = [];
  }
  enqueue(x) {
    // x如果大于queue中所有的值，说明前面的值都不可能作为最大值，需要舍弃
    while (this.queue.length > 0 && this.queue[this.queue.length - 1] < x) {
      this.queue.pop();
    }
    this.queue.push(x);
  }
  dequeue(x) {
    if (this.queue[0] === x) {
      this.queue.shift();
    }
  }
  front() {
    return this.queue[0];
  }
}
// @lc code=end
