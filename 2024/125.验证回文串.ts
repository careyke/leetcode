/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 * 双指针解法：前后指针
 * 需要注意字符是否符合预期，不符合预期的字符需要跳过
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const isValid = (c: string): boolean => {
    const n = c.toLowerCase().charCodeAt(0);
    return (n >= 97 && n <= 122) || (n >= 48 && n <= 57);
  };

  const len = s.length;
  let left = 0;
  let right = len - 1;

  while (left <= right) {
    while (s[left] && !isValid(s[left])) {
      left++;
    }
    while (s[right] && !isValid(s[right])) {
      right--;
    }
    if (left > right) {
      return true;
    }
    const leftC = s[left].toLowerCase();
    const rightC = s[right].toLowerCase();
    if (leftC === rightC) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}
// @lc code=end
