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
 * 链表经典的题目：快慢指针
 * 对于快慢指针的题目，重要的一点是确定快慢指针之间的距离。
 * 对于这个题目
 * 1. 先计算两个链表的长度，差值就是快慢指针的距离n
 * 2. 快指针先走n步，然后两个指针一起同步移动，如果有环的话，一定会出现相等的情况。
 */
var getIntersectionNode = function (headA, headB) {
  const getLinkLength = (head) => {
    let res = 0;
    while (head) {
      res++;
      head = head.next;
    }
    return res;
  };

  const linkALen = getLinkLength(headA);
  const linkBLen = getLinkLength(headB);
  let gap = Math.abs(linkALen - linkBLen);

  if (linkALen > linkBLen) {
    while (gap && headA) {
      headA = headA.next;
      gap--;
    }
  } else {
    while (gap && headB) {
      headB = headB.next;
      gap--;
    }
  }

  while (headA && headB) {
    if (headA === headB) {
      return headA;
    } else {
      headA = headA.next;
      headB = headB.next;
    }
  }
  return null;
};
