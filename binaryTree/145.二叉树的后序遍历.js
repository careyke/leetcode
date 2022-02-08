/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 * 迭代版本
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
var postorderTraversal = function (root) {
  const result = [];
  const stack = [];

  let prev = null;

  while (stack.length || root) {
    while (root) {
      // 1. 迭代左节点，找到最左边节点
      stack.push(root);
      root = root.left;
    }

    const node = stack.pop();
    if (node.right == null || node.right === prev) {
      // 2. 如果没有右节点，说明当前节点可以取值
      // 3. 如果当前节点的右节点已经取过值，说明当前节点可以取值
      result.push(node.val);
      prev = node;
    } else {
      // 4. 当前节点存在右节点，需要将当前节点重新push到栈中。然后对右节点重复迭代操作
      stack.push(node);
      root = node.right;
    }
  }

  return result;
};
// @lc code=end
