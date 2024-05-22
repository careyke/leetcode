/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
 * 思路：
 * 1. 递归
 * 2. 迭代
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

// 1. 递归
// function preorderTraversal(root: TreeNode | null): number[] {
//   const result: number[] = [];

//   const preorderTraversalCore = (node: TreeNode | null) => {
//     if (node) {
//       result.push(node.val);
//     } else {
//       return;
//     }

//     node.left && preorderTraversalCore(node.left);
//     node.right && preorderTraversalCore(node.right);
//   };

//   preorderTraversalCore(root);
//   return result;
// }

// 2. 递归
function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  const stack: TreeNode[] = [];

  let node = root;
  while (node || stack.length) {
    while (node) {
      result.push(node.val);
      stack.push(node);
      node = node.left;
    }

    const top = stack.pop() as TreeNode;
    if (top.right) {
      node = top.right;
    }
  }
  return result;
}
// @lc code=end
