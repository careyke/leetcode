/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 * 快慢指针：
 * 块指针先走几步，然后和慢指针一起走
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const root = new ListNode(0, head);
  let left = root;
  let right = root;

  // 1. right指针先走n+1步
  while (n >= 0) {
    right = right.next;
    n--;
  }

  // 2. 同时移动快慢指针
  while (right) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;
  return root.next;
};
// @lc code=end
