/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 * 需要考虑最高位进位的情况
 */
var plusOne = function(digits) {
  const len = digits.length;
  let index = len-1;
  while(index >= 0){
    const num = digits[index];
    if(num === 9){
      digits[index] = 0;
      index--;
    }else{
      digits[index] = num + 1;
      break;
    }
  }
  if(index === -1){
    digits.unshift(1);
  }
  return digits;
};
// @lc code=end

