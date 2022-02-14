/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// leetcode链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 空间复杂度O(1)
 * 快慢指针：
 * 1. 先求两个链表的长度差k
 * 2. 快指针先走k步
 * 3. 然后两个指针一起移动
 */
var getIntersectionNode = function (headA, headB) {
  const lenA = getLen(headA);
  const lenB = getLen(headB);

  if (lenA >= lenB) {
    let k = lenA - lenB;
    while (k > 0) {
      headA = headA.next;
      k--;
    }
  } else {
    let k = lenB - lenA;
    while (k > 0) {
      headB = headB.next;
      k--;
    }
  }

  while (headA && headB) {
    if (headA === headB) return headA;
    headA = headA.next;
    headB = headB.next;
  }
  return null;
};

function getLen(head) {
  let len = 0;
  while (head) {
    len++;
    head = head.next;
  }
  return len;
}

// const c = { val: 2, next: null };
// const a = { val: 1, next: c };
// const b = { val: 3, next: c };

// console.log(getIntersectionNode(a, b));
