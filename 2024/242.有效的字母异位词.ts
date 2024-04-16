/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 * 构建map
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  const buildMap = (str: string) => {
    const map: Record<string, number> = {};
    for (let i = 0; i < str.length; i++) {
      const c = str[i];
      if (map[c]) {
        map[c]++;
      } else {
        map[c] = 1;
      }
    }
    return map;
  };

  const sMap = buildMap(s);
  const tMap = buildMap(t);
  const sKeys = Object.keys(sMap);
  const tKeys = Object.keys(tMap);

  if (tKeys.length !== sKeys.length) return false;
  for (let k of sKeys) {
    if (sMap[k] !== tMap[k]) {
      return false;
    }
  }
  return true;
}
// @lc code=end
