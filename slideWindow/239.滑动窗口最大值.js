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
 * 双端队列：
 * 是一种具有队列和栈的性质的数据结构。双端队列中的元素可以从两端弹出或者插入
 * 
 * 这个题目涉及到动态数组和最大值，可以使用大顶堆来解答
 */
var maxSlidingWindow = function(nums, k) {
  const len = nums.length;
  if(len === 0) return [];
  const res=[];
  const maxQueue = []; // 第一个位置用来保存当前窗口中最大的数
  for(let i=0; i<len; i++){
    const current = nums[i];
    while(i>0 && maxQueue.length > 0 && maxQueue[maxQueue.length-1] < current){
      // 删除maxQueue中小于当前数的数
      maxQueue.pop();
    }
    maxQueue.push(current);

    if(i >= k && nums[i-k] === maxQueue[0]){
      // 如果上一个窗口的最大值不属于当前窗口 需要清除掉
      // 也就是判断最大值的作用范围，超出范围需要弹出
      maxQueue.shift();
    }

    if(i >= k-1){
      // 取出当前窗口的最大数值
      res.push(maxQueue[0]);
    }
  }
  return res;
};
// @lc code=end

