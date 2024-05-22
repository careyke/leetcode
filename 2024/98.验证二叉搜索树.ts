/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
 * 思路：递归
 * 对于每个节点而言，
 * 1. 其左子树的最大值必须小于当前节点的值。
 * 2. 其右子树的最小值必须大于当前节点的值。
 * 通过这个特性来递归求解。
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

// 递归
// function isValidBST(root: TreeNode | null): boolean {
//   const isBST = (node: TreeNode | null, min: number, max: number) => {
//     if (!node) {
//       return true;
//     }
//     if (node.val >= max) {
//       return false;
//     }
//     if (node.val <= min) {
//       return false;
//     }
//     return isBST(node.left, min, node.val) && isBST(node.right, node.val, max);
//   };

//   return isBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
// }

// 中序遍历：判断中序遍历的序列是一个上升序列即是二叉搜索树
function isValidBST(root: TreeNode | null): boolean {
  const stack: TreeNode[] = [];
  let target: number = Number.MIN_SAFE_INTEGER;

  let node = root;
  while (stack.length || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    const top = stack.pop() as TreeNode;
    if (top.val <= target) {
      return false;
    }
    target = top.val;
    node = top.right;
  }
  return true;
}

// @lc code=end
