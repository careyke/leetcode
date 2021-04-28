/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * 坐标系方法：min |----------------root.val--------------| max
 * 分析左右节点命中的区间关系和区间边界
 */
var isValidBST = function(root) {
  if(!root) return false;
  return isBST(root, Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER);
};

function isBST(root,min,max){
  if(!root) return true;
  if(root.val >= max || root.val <= min) return false;
  return isBST(root.left, min,root.val) && isBST(root.right, root.val, max);
}
// @lc code=end

