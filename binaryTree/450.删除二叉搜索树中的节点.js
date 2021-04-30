/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if(!root) return null;
  if(key < root.val){
    root.left = deleteNode(root.left, key);
    return root;
  }
  if(key > root.val){
    root.right = deleteNode(root.right, key);
    return root;
  }
  // 当前节点命中
  if(!root.left){
    return root.right;
  }
  if(!root.right){
    return root.left;
  }
  // 命中节点左右节点都存在
  // 1. 查找左子树中的最大节点
  let maxNode = root.left;
  while(maxNode.right){
    maxNode = maxNode.right;
  }
  root.val = maxNode.val;
  // 2. 从左子树删除这个最大节点
  root.left = deleteMaxNode(root.left,maxNode.val);
  return root;
};

var deleteMaxNode = function(node,value){
  if(node.val === value){
    return node.left; // 最大节点可能存在左子节点
  }
  node.right = deleteMaxNode(node.right, value);
  return node;
}

// @lc code=end

