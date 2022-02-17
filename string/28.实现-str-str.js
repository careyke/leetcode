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
      if (i === len - 1) {
        return index;
      }
    }
    const next = index + len;
    if (next >= len1) return -1;
    const lastIndex = map.get(haystack[next]);
    if (lastIndex != null) {
      index = index + len - lastIndex;
    } else {
      index = next + 1;
    }
  }
  return -1;
};
// @lc code=end

/*
 * KMP
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 * KMP算法
 * 重点在于next数组的求取
 * 理解可以参考：https://www.zhihu.com/question/21923021
 * next[i]表示的意思是：模式串中以索引 i 位置的字符结尾的子串(必须是子串)中，最长的公共前后缀子串的长度
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  const next = getNext(needle);

  const len = haystack.length;
  let j = 0;
  for (let i = 0; i < len; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === needle.length) {
      return i - needle.length + 1;
    }
  }
  return -1;
};

function getNext(needle) {
  const len = needle.length;
  const next = [0];
  let j = 0;
  for (let i = 1; i < len; i++) {
    while (j > 0 && needle[j] !== needle[i]) {
      j = next[j - 1]; // 本质上也是KMP
    }
    if (needle[j] === needle[i]) {
      j++;
    }
    next[i] = j;
  }
  return next;
}
