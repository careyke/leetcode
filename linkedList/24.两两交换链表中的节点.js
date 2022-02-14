/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const root = new ListNode(0, head);
  let cur = root;
  while (cur.next && cur.next.next) {
    const p = cur.next;
    const q = cur.next.next;
    cur.next = cur.next.next;
    p.next = q.next;
    q.next = p;
    cur = p;
  }
  return root.next;
};
// @lc code=end
