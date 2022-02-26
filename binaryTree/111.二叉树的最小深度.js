/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * 迭代
 */
var minDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let res = 0;
  while (queue.length) {
    const len = queue.length;
    res++;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (!node.left && !node.right) {
        return res;
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
};

/**
 * @param {TreeNode} root
 * @return {number}
 * 递归
 */
var minDepth = function (root) {
  if (!root) return 0;
  const leftLen = minDepth(root.left);
  const rightLen = minDepth(root.right);

  // 叶子节点表示的是 左右子节点都没有的节点
  if (!root.left && root.right) {
    return 1 + rightLen;
  }
  if (root.left && !root.right) {
    return 1 + leftLen;
  }

  return Math.min(leftLen, rightLen) + 1;
};
// @lc code=end
