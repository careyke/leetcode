/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 * 思路：迭代的方式
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  const queue: TreeNode[] = [];
  root && queue.push(root);

  while (queue.length) {
    const len = queue.length;
    const arr: number[] = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      node && arr.push(node.val);
      node?.left && queue.push(node.left);
      node?.right && queue.push(node.right);
    }
    res.push(arr);
  }

  return res;
}
// @lc code=end
