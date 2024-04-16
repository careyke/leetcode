/*
 * @lc app=leetcode.cn id=1002 lang=typescript
 *
 * [1002] 查找共用字符
 * 构建一个小写字母数组，保存当前字母的最小个数
 */

// @lc code=start
function commonChars(words: string[]): string[] {
  const len = words.length;

  const arr = Array(26).fill(0);
  for (let i = 0; i < len; i++) {
    const str = words[i];
    const currentArr = Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      const index = str.charCodeAt(j) - 97;
      currentArr[index]++;
    }
    currentArr.forEach((n, index) => {
      if (i > 0) {
        arr[index] = Math.min(n, arr[index]);
      } else {
        arr[index] = n;
      }
    });
  }

  const res: string[] = [];
  arr.forEach((n, index) => {
    const c = String.fromCodePoint(index + 97);
    while (n > 0) {
      res.push(c);
      n--;
    }
  });

  return res;
}
// @lc code=end
