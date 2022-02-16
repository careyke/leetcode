/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 * 不变量原则，左闭右开
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  let rStart = 0;
  let cStart = 0;
  let rOffset = 1;
  let cOffset = 1;

  const res = [];

  while (row - rOffset > 0 && col - cOffset > 0) {
    let r = rStart;
    let c = cStart;
    // 左 -> 右
    for (; c < cStart + col - cOffset; c++) {
      res.push(matrix[r][c]);
    }
    // 上 -> 下
    for (; r < rStart + row - rOffset; r++) {
      res.push(matrix[r][c]);
    }
    // 右 -> 左
    for (; c > cStart; c--) {
      res.push(matrix[r][c]);
    }
    // 下 -> 上
    for (; r > rStart; r--) {
      res.push(matrix[r][c]);
    }

    rOffset += 2;
    cOffset += 2;
    rStart += 1;
    cStart += 1;
  }

  if (row - rOffset === 0 && col - cOffset === 0) {
    // 正方形的中心，只有一个点
    res.push(matrix[rStart][cStart]);
  }
  if (row - rOffset > 0 && col - cOffset === 0) {
    // 多出一列
    let i = rStart;
    while (i <= rStart + row - rOffset) {
      res.push(matrix[i][cStart]);
      i++;
    }
  }
  if (col - cOffset > 0 && row - rOffset === 0) {
    // 多出一行
    let i = cStart;
    while (i <= cStart + col - cOffset) {
      res.push(matrix[rStart][i]);
      i++;
    }
  }
  return res;
};
// @lc code=end
