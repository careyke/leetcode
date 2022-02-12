/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const sLen = s.length;
  const tLen = t.length;
  if (sLen < tLen) return "";

  const tMap = new Map();
  for (let i = 0; i < tLen; i++) {
    const v = t[i];
    if (tMap.has(v)) {
      tMap.set(v, tMap.get(v) + 1);
    } else {
      tMap.set(v, 1);
    }
  }
  const sMap = new Map();

  let left = 0;
  let right = 0;
  let lIndex = 0;
  let rIndex = -1;
  let len = Number.MAX_SAFE_INTEGER;
  for (; right < sLen; right++) {
    const c = s[right];
    if (tMap.has(c)) {
      if (sMap.has(c)) {
        sMap.set(c, sMap.get(c) + 1);
      } else {
        sMap.set(c, 1);
      }
    }
    while (check(tMap, sMap) && left <= right) {
      if (right - left + 1 < len) {
        len = right - left + 1;
        lIndex = left;
        rIndex = right;
      }
      const c = s[left];
      if (sMap.has(c)) {
        sMap.set(c, sMap.get(c) - 1);
      }
      left++;
    }
  }
  if (rIndex >= lIndex) {
    return s.substring(lIndex, rIndex + 1);
  }
  return "";
};

var check = (tMap, sMap) => {
  for (let key of tMap.keys()) {
    if (!sMap.has(key) || sMap.get(key) < tMap.get(key)) return false;
  }
  return true;
};
// @lc code=end
// minWindow("ADOBECODEBANC", "ABC");
