/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 双指针
 */
var reverseString = function(s) {
  const len = s.length;
  if(len < 2) return s;
  let left = 0;
  let right = len-1;

  while(left < right){
    const temp = s[right];
    s[right] = s[left];
    s[left] = temp;
    left++;
    right--;
  }

  return s;
};
// @lc code=end

