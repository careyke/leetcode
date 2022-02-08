/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 * 不能使用递归的方式完成
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];

  let node = root;

  while (stack.length || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    const top = stack.pop();
    result.push(top.val);
    if (top.right) {
      node = top.right;
    }
  }

  return result;
};
// @lc code=end
