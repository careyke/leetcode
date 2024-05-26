/*
 * @lc app=leetcode.cn id=450 lang=typescript
 *
 * [450] 删除二叉搜索树中的节点
 * 思路：
 * 1. 先通过二叉搜索树的特性查找要删除的几点
 * 2. 能够替换这个节点的是
 *    1. 左子树的最右侧节点
 *    2. 右子树的最左侧节点
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  let parentNode: TreeNode | null = null;
  let node: TreeNode | null = root;

  // 1. 查找
  while (node) {
    if (node.val === key) {
      break;
    } else if (node.val > key) {
      parentNode = node;
      node = node.left;
    } else {
      parentNode = node;
      node = node.right;
    }
  }
  if (!node) return root;

  // 2.删除
  if (node.left) {
    // 2.1 找出左子树最右边节点，复制&删除
    let moveNode = node.left;
    let moveParentNode = node;
    while (moveNode.right) {
      moveParentNode = moveNode;
      moveNode = moveNode.right;
    }
    if (moveParentNode.left === moveNode) {
      moveParentNode.left = moveNode.left;
    } else if (moveParentNode.right === moveNode) {
      moveParentNode.right = moveNode.left;
    }
    node.val = moveNode.val;
  } else if (node.right) {
    // 2.2 直接用右子树
    node.val = node.right.val;
    node.left = node.right.left;
    node.right = node.right.right;
  } else {
    // 2.3 删除的节点是叶子节点 - 直接去掉
    if (parentNode) {
      parentNode.left === node && (parentNode.left = null);
      parentNode.right === node && (parentNode.right = null);
    } else {
      return null;
    }
  }

  return root;
}
// @lc code=end
