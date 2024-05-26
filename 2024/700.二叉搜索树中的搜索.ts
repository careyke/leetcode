/*
 * @lc app=leetcode.cn id=700 lang=typescript
 *
 * [700] 二叉搜索树中的搜索
 * 思路：根据二叉搜索树的特性来缩小查找范围
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
// function searchBST(root: TreeNode | null, val: number): TreeNode | null {
//   if (!root) return null;
//   if (root.val === val) {
//     return root;
//   } else if (root.val > val) {
//     return searchBST(root.left, val);
//   } else {
//     return searchBST(root.right, val);
//   }
// }

// 迭代
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  while (root) {
    if (root.val === val) {
      return root;
    } else if (root.val > val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return null;
}

// @lc code=end
