/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 递归
 * 时间复杂度：O(n)
 */
var isBalanced = function (root) {
  if (!root) return true;
  const leftDepth = getDepth(root.left);
  const rightDepth = getDepth(root.right);
  if (leftDepth === -1 || rightDepth === -1) return false;
  if (Math.abs(leftDepth - rightDepth) > 1) {
    return false;
  }
  return true;
};

function getDepth(node) {
  if (!node) return 0;
  const leftDepth = getDepth(node.left);
  if (leftDepth === -1) return -1;

  const rightDepth = getDepth(node.right);
  if (rightDepth === -1) return -1;

  if (Math.abs(leftDepth - rightDepth) > 1) {
    return -1;
  }
  return Math.max(leftDepth, rightDepth) + 1;
}
// @lc code=end
