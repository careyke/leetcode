/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 倒序
 */
var lengthOfLastWord = function(s) {
  const len = s.length;
  if(len < 1) return 0;
  let index = len-1;
  let res = 0;
  while(index >= 0){
    if(s[index] === ' '){
      if(res === 0){
        index--;
      }else{
        break;
      }
    }else{
      res++;
      index--;
    }
  }
  return res;
};
// @lc code=end

