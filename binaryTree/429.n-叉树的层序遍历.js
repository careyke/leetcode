/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    const levelArr = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      levelArr.push(node.val);
      if (node.children) {
        node.children.forEach((item) => {
          queue.push(item);
        });
      }
    }
    res.push(levelArr);
  }

  return res;
};
// @lc code=end
