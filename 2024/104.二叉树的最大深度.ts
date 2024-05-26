/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
 * 思路：
 * 1. 递归
 * 2. 层级遍历（广度优先）
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

// function maxDepth(root: TreeNode | null): number {
//   let res: number = 0;
//   const maxDepthCore = (node: TreeNode | null, num: number) => {
//     if (!node) {
//       res = Math.max(res, num);
//     } else {
//       maxDepthCore(node.left, num + 1);
//       maxDepthCore(node.right, num + 1);
//     }
//   };
//   maxDepthCore(root, 0);
//   return res;
// }

function maxDepth(root: TreeNode | null): number {
  let res: number = 0;
  const queue: TreeNode[] = [];
  root && queue.push(root);

  while (queue.length) {
    res++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      node?.left && queue.push(node.left);
      node?.right && queue.push(node.right);
    }
  }

  return res;
}
// @lc code=end
