/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * [541] 反转字符串 II
 * 解法思路：每K个字符为一组，奇数组的字符做翻转
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  const reverse = (left: number, right: number): string => {
    let res = "";
    while (left <= right) {
      res += s[right];
      right--;
    }
    return res;
  };

  const len = s.length;
  const num = Math.ceil(len / (k * 2));
  let res = "";

  let i = 0;
  while (i < num) {
    const left = i * k * 2;
    const mid = Math.min(left + k - 1, len - 1);
    const right = Math.min(left + 2 * k - 1, len - 1);
    res += reverse(left, mid);
    if (right > mid) {
      let p = mid + 1;
      while (p <= right) {
        res += s[p];
        p++;
      }
    }
    i++;
  }

  return res;
}
// @lc code=end
