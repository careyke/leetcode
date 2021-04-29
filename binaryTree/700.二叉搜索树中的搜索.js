/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 * 递归
 */
var searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) {
    return root;
  } else if (root.val > val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};

/**
 * 迭代
 */
var searchBST = function (root, val) {
  while(root){
    if(root.val > val){
      root = root.left;
    }else if(root.val < val){
      root = root.right;
    }else{
      return root;
    }
  }
  return null;
};

// @lc code=end
