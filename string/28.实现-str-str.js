/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * Sunday匹配算法
 * 1.对齐目标串和模式串，从前向后匹配
 * 2.关注主串中位于模式串后面的第一个元素（核心）
 * 3.如果关注的字符没有在子串中出现则直接跳过
 * 4.否则开始移动模式串，移动位数 = 子串长度 - 该字符最右出现的位置(以0开始)
#
 */
var strStr = function (haystack, needle) {
  const len = needle.length;
  const len1 = haystack.length;
  if (len === 0) return 0;
  if (len > len1) return -1;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    map.set(needle[i], i);
  }

  let index = 0;
  while (len1 - index >= len) {
    for (let i = 0; i < len; i++) {
      const c1 = needle[i];
      const c2 = haystack[i + index];
      if (c1 !== c2) {
        break;
      }
      if(i === len-1){
        return index;
      }
    }
    const next = index + len;
    if(next >= len1) return -1;
    const lastIndex = map.get(haystack[next]);
    if(lastIndex != null){
      index = index + len - lastIndex;
    }else{
      index = next + 1;
    }
  }
  return -1;
};
// @lc code=end
