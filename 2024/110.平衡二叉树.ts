/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 * 平衡二叉树 是指该树所有节点的左右子树的深度相差不超过 1。
 * 思路：
 * 1. 如果其中一个节点不是平衡节点，那整棵树都不平衡。
 * 2. 计算左右节点的长度，然后计算是不是平衡的节点
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

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  if (!isBalanced(root.left) || !isBalanced(root.right)) {
    return false;
  }
  const leftLen = getLen(root.left);
  const rightLen = getLen(root.right);
  if (Math.abs(leftLen - rightLen) < 2) {
    return true;
  }
  return false;
}

function getLen(node: TreeNode | null): number {
  if (!node) {
    return 0;
  }
  return Math.max(getLen(node.left), getLen(node.right)) + 1;
}
// @lc code=end
