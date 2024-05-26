/*
 * @lc app=leetcode.cn id=222 lang=typescript
 *
 * [222] 完全二叉树的节点个数
 * 思路：
 * 方法一：遍历节点 - 常规遍历即可
 * 方法二：根据完全二叉树的特点来求解。
 * 比较两棵子树的深度，
 * 1. 如果left>right：说明右子树是满二叉树
 * 2. 如果left === right: 说明左子树是满二叉树
 * 以此递归
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

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const leftLen = getLen(root.left);
  const rightLen = getLen(root.right);
  if (leftLen > rightLen) {
    return countNodes(root.left) + Math.pow(2, rightLen);
  } else {
    return countNodes(root.right) + Math.pow(2, leftLen);
  }
}

function getLen(node: TreeNode | null): number {
  if (!node) {
    return 0;
  }
  return getLen(node.left) + 1;
}
// @lc code=end
