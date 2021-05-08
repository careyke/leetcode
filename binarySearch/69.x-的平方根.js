/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0;
  let right = Math.ceil(x/2);
  while(left < right){
    // 注意： 这里需要加1，否则会出现死循环情况
    // 略微放大区间，保证正确
    const mid = left + Math.floor((right-left)/2) + 1;
    const count = mid * mid;
    if(count === x){
      return mid;
    }else if(count > x){
      right = mid - 1;
    }else{
      left = mid; // 小于不能加 1
    }
  }
  return right;
};
// @lc code=end

