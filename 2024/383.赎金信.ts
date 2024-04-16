/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 * 判断ransomNote是不是magazine的子集
 * 使用array存储
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  const arr = Array(26).fill(0);
  for (let i = 0; i < magazine.length; i++) {
    const index = magazine.charCodeAt(i) - 97;
    arr[index]++;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const index = ransomNote.charCodeAt(i) - 97;
    if (arr[index] <= 0) return false;
    arr[index]--;
  }

  return true;
}
// @lc code=end
