/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 * 滑动窗口
 * 1. 右指针移动 - 查找符合条件的连续子串
 * 2. 左指针移动 - 缩小窗口的大小
 */

// @lc code=start
function minWindow(s, t) {
  const len = s.length;
  const tLen = t.length;
  const tMap = {};
  const sMap = {};
  for (let i = 0; i < tLen; i++) {
    const c = t[i];
    if (tMap[c]) {
      tMap[c] = tMap[c] + 1;
    } else {
      tMap[c] = 1;
    }
  }
  const isValidStr = () => {
    const keys = Object.keys(tMap);
    for (let k of keys) {
      if (sMap[k] && sMap[k] >= tMap[k]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  };

  let left = 0;
  let right = 0;
  let leftIndex = 0;
  let rightIndex = 0;
  let minLen = Number.MAX_SAFE_INTEGER;

  for (; right < len; right++) {
    // 滑动右指针
    const c = s[right];
    if (tMap[c]) {
      if (sMap[c]) {
        sMap[c] += 1;
      } else {
        sMap[c] = 1;
      }
    }

    // 滑动左指针
    while (left <= right) {
      if (isValidStr()) {
        if (right - left + 1 < minLen) {
          minLen = right - left + 1;
          leftIndex = left;
          rightIndex = right;
        }
        const leftV = s[left];
        if (tMap[leftV] && sMap[leftV]) {
          sMap[leftV]--;
        }
        left++;
      } else {
        break;
      }
    }
  }

  if (minLen > len) {
    return "";
  } else {
    return s.substring(leftIndex, rightIndex + 1);
  }
}
// @lc code=end
