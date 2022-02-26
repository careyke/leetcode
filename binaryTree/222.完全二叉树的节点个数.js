/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 * 利用完全二叉树和满二叉树来求解
 * 完全二叉树可以分解成一个完全二叉子树和满二叉子树
 * 事件复杂度：O(logN * logN)
 */
var countNodes = function (root) {
  if (!root) return 0;
  const leftDepth = depth(root.left);
  const rightDepth = depth(root.right);
  if (leftDepth === rightDepth) {
    // 左边子树是满二叉树
    return countNodes(root.right) + (1 << leftDepth);
  } else {
    // 右边子树是满二叉树
    return countNodes(root.left) + (1 << rightDepth);
  }
};

var depth = function (root) {
  let depth = 0;
  while (root) {
    depth++;
    root = root.left;
  }
  return depth;
};

/**
 * @param {TreeNode} root
 * @return {number}
 * 递归法 - 不利用 完全二叉树 的特点
 * 时间复杂度：O(n)
 */
var countNodes = function (root) {
  if (!root) return 0;
  return countNodes(root.left) + countNodes(root.right) + 1;
};
// @lc code=end
