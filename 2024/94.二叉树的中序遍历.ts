/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 * 思路：递归 or 迭代
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

// 递归
// function inorderTraversal(root: TreeNode | null): number[] {
//   const result: number[] = [];

//   const traversal = (node: TreeNode) => {
//     if (node.left) {
//       traversal(node.left);
//     }
//     result.push(node.val);
//     if (node.right) {
//       traversal(node.right);
//     }
//   };

//   root && traversal(root);

//   return result;
// }

// 循环
function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  const stack: TreeNode[] = [];

  let node = root;
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    const top = stack.pop() as TreeNode;
    result.push(top.val);
    if (top.right) {
      node = top.right;
    }
  }

  return result;
}
// @lc code=end
