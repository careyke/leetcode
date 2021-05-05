/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 滑动窗口
 * 记录当前窗口开始的索引
 */
var lengthOfLongestSubstring = function(s) {
  const map = new Map();
  let left = 0;
  let res = 0;
  const len = s.length;
  for(let i=0; i < len; i++){
    const oldIndex = map.get(s[i]);
    if(oldIndex != null && oldIndex >= left){
      left = oldIndex+1;
    }
    map.set(s[i],i);
    res = Math.max(res, i-left+1);
  }
  return res;
};
// @lc code=end

