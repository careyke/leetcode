/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 * BFS 广度优先遍历
 */
var levelOrder = function(root) {
  const res = [];
  if(!root) return res;
  const stack = [root];
  while(stack.length>0){
    const current=[];

    // 这里需要使用临时变量保存当前长度
    // 不能直接使用stack.length，后面会实时修改长度
    const len = stack.length; 
    for(let i=0;i<len;i++){
      const node = stack.pop();
      current.push(node.val);
      if(node.left){
        stack.unshift(node.left);
      }
      if(node.right){
        stack.unshift(node.right);
      }
    }
    res.push(current);
  }
  return res;
};
// @lc code=end

