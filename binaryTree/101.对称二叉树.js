/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * 递归法
 */
var isSymmetric = function (root) {
  if (!root) return true;
  return compare(root.left, root.right);
};

function compare(left, right) {
  if (!left && !right) {
    return true;
  } else if (!left || !right) {
    return false;
  } else {
    if (left.val !== right.val) return false;
    return compare(left.left, right.right) && compare(left.right, right.left);
  }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 * 迭代法
 */
var isSymmetric = function (root) {
  if (!root) return true;
  const stack = [root.left, root.right];

  while (stack.length) {
    const right = stack.pop();
    const left = stack.pop();
    if (!left && !right) {
      continue;
    } else if (!left || !right) {
      return false;
    }
    if (left.val !== right.val) return false;
    // 栈中相邻两个节点就是需要对比的节点
    stack.push(left.left, right.right, left.right, right.left);
  }
  return true;
};
// @lc code=end
