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
// @lc code=end
