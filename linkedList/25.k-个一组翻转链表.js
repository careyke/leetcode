/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const root = new ListNode(0, head);
  let pre = root;
  let tail = root;

  while (true) {
    for (let i = 0; i < k; i++) {
      if (tail.next) {
        tail = tail.next;
      } else {
        return root.next;
      }
    }

    [head, tail] = reverse(head, tail);
    pre.next = head;
    head = tail.next;
    pre = tail;
  }
};

function reverse(head, tail) {
  let prev = tail.next;
  let p = head;
  while (prev !== tail) {
    const next = p.next;
    p.next = prev;
    prev = p;
    p = next;
  }
  return [tail, head];
}
// @lc code=end
