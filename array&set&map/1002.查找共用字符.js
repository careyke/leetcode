/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const firstArr = new Array(26).fill(0);

  const first = words[0];
  for (let i = 0; i < first.length; i++) {
    firstArr[first[i].charCodeAt(0) - 97]++;
  }

  const nextArr = new Array(26).fill(0);
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      nextArr[word[j].charCodeAt(0) - 97]++;
    }

    for (let t = 0; t < 26; t++) {
      firstArr[t] = Math.min(firstArr[t], nextArr[t]);
      nextArr[t] = 0;
    }
  }

  const res = [];
  for (let i = 0; i < 26; i++) {
    while (firstArr[i]) {
      res.push(String.fromCharCode(i + 97));
      firstArr[i]--;
    }
  }
  return res;
};
// @lc code=end
