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
 */
var isBalanced = function(root) {
  if(!root) return true;
  if(!isBalanced(root.left) || !isBalanced(root.right)){
    return false;
  }
  const leftDeep = maxDepth(root.left);
  const rightDeep = maxDepth(root.right);
  if(Math.abs(leftDeep - rightDeep) > 1){
    return false;
  }
  return true;
};

var maxDepth = function(root){
  if(!root) return 0;
  return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
}
// @lc code=end

