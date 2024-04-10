/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 * 设计四个哨兵标记边界，然后依次循环，并且移动哨兵的位置
 * 边界需要注意：需要保证横向和纵向都有空间时才可以开始遍历
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  const row = matrix.length;
  const col = matrix[0].length;
  let left = 0;
  let top = 0;
  let bottom = row - 1;
  let right = col - 1;
  const res: number[] = [];

  while (left <= right && top <= bottom) {
    // 从左往右遍历，遍历完成之后 top+1
    for (let i = left; i <= right && top <= bottom; i++) {
      res.push(matrix[top][i]);
    }
    top++;

    // 从上往下遍历，遍历完成之后 right-1
    for (let i = top; i <= bottom && left <= right; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    // 从右往左遍历，遍历完成之后 bottom-1
    for (let i = right; i >= left && top <= bottom; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;

    // 从下往上遍历，遍历完成之后 left+1
    for (let i = bottom; i >= top && left <= right; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
}
// @lc code=end
