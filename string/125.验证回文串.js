/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 * 双指针
 * 注意跳过无关的字符
 */
var isPalindrome = function(s) {
  const len = s.length;
  if(len < 2) return true;
  const reg = /[A-Za-z0-9]{1}/;
  let left = 0;
  let right = len-1;

  while(left < right){
    const leftC = s[left].toLowerCase();
    const rightC = s[right].toLowerCase();
    const leftM = reg.test(leftC);
    const rightM = reg.test(rightC);
    if(leftM && rightM){
      if(leftC !== rightC){
        return false;
      }else{
        left++;
        right--;
      }
    }else{
      if(!leftM){
        left++;
      }
      if(!rightM){
        right--;
      }
    }
  }
  return true;
};
// @lc code=end

