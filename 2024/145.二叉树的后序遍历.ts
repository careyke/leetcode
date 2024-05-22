/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
 * 思路:
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
// function postorderTraversal(root: TreeNode | null): number[] {
//   const result: number[] = [];
//   const postorderTraversalCore = (node: TreeNode | null) => {
//     if (!node) {
//       return;
//     }
//     if (node.left) {
//       postorderTraversalCore(node.left);
//     }
//     if (node.right) {
//       postorderTraversalCore(node.right);
//     }
//     result.push(node.val);
//   };

//   postorderTraversalCore(root);
//   return result;
// }

// 2.迭代
function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  const stack: TreeNode[] = [];

  let node = root;
  let prev: TreeNode | null = null;
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    const top = stack.pop() as TreeNode;
    if (top.right === null || top.right === prev) {
      prev = top;
      result.push(top.val);
    } else {
      stack.push(top);
      node = top.right;
    }
  }

  return result;
}
// @lc code=end
