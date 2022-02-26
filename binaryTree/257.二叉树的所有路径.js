/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 * 前序遍历
 * 递归
 */
var binaryTreePaths = function (root) {
  const res = [];
  if (!root) return res;
  const path = `${root.val}`;
  getPath(root, path, res);

  return res;
};

function getPath(node, path, result) {
  if (!node.left && !node.right) {
    result.push(path);
    return;
  }
  if (node.left) {
    getPath(node.left, `${path}->${node.left.val}`, result);
  }
  if (node.right) {
    getPath(node.right, `${path}->${node.right.val}`, result);
  }
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 * 迭代
 */
var binaryTreePaths = function (root) {
  if (!root) return [];
  const stack = [root];
  const paths = [""];
  const res = [];

  while (stack.length) {
    const node = stack.pop(); // 当前节点
    let path = paths.pop(); // 当前节点对应的前置路径

    if (!node.left && !node.right) {
      res.push(`${path}${node.val}`);
      continue;
    }

    path += node.val + "->";
    if (node.left) {
      stack.push(node.left);
      paths.push(path);
    }
    if (node.right) {
      stack.push(node.right);
      paths.push(path);
    }
  }

  return res;
};

// @lc code=end
