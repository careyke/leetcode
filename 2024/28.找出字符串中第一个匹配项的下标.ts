/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 找出字符串中第一个匹配项的下标
 * 类似滑动窗口
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  const len1 = haystack.length;
  const len2 = needle.length;
  if (len1 < len2 || len2 === 0) {
    return -1;
  }

  let res = 0;
  let left = 0;
  let right = 0;
  while (res <= len1 - len2 && right < len2) {
    const leftC = haystack[left];
    const rightC = needle[right];
    if (leftC === rightC) {
      left++;
      right++;
    } else {
      res++;
      left = res;
      right = 0;
    }
  }
  if (right === len2) {
    return res;
  } else {
    return -1;
  }
}
// @lc code=end
