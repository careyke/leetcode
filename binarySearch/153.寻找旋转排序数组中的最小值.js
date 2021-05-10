/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 最小的元素：小于左边的元素 大于右边的元素
 * 要考虑最小元素在边缘的情况
 */
var findMin = function(nums) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  while(left < right){
    const mid = Math.floor((left+right)/2);
    const n = nums[mid];
    // 这里只能使用right的值来判断
    // 这样才能判断最小值是在mid右边的区间
    // 使用left的值无法判断，因为最初就是升序
    if(n > nums[right]){
      left = mid + 1;
    }else{
      right = mid; // 这里不能减一，这种情况下有可能mid直接命中最小值
    }
  }
  return nums[left];
};
// @lc code=end

