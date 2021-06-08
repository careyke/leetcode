/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 比较最后一次出现的index和第一次出现的index
 */
var firstUniqChar = function(s) {
  const map = new Map();
  const len = s.length;
  if(len<1) return -1;
  for(let i=0;i<len;i++){
    map.set(s[i],i);
  }

  for(let i=0; i<len; i++){
    const index = map.get(s[i]);
    if(index === i){
      return i;
    }else{
      // 使用过之后需要排除
      map.set(s[i],-1);
    }
  }
  return -1;
};
// @lc code=end

