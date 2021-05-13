/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 * 先选一个字符串当模板
 */
var longestCommonPrefix = function(strs) {
  const len = strs.length;
  if(len === 0) return '';
  if(len === 1) return strs[0];

  const first = strs[0];
  const firstLen = first.length
  let res = '';
  let index = 0;
  while(index < firstLen){
    const c = first[index];
    for(let i=1;i<len;i++){
      if(strs[i][index] !== c){
        return res;
      }
    }
    res = res + c;
    index++;
  }
  return res;
};
// @lc code=end

