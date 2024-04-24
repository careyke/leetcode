/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 * 构造一个map存储字符次数+索引下标，然后遍历map取第一个为1的字符
 */

// @lc code=start
function firstUniqChar(s: string): number {
  const map: Record<string, { num: number; index: number }> = {};

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (map[c]) {
      map[c].num++;
    } else {
      map[c] = {
        num: 1,
        index: i,
      };
    }
  }

  for (let k in map) {
    if (map[k].num === 1) {
      return map[k].index;
    }
  }

  return -1;
}
// @lc code=end
