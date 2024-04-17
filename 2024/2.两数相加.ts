/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 * 指针数据相加
 * 主要进位和长度不等场景下的处理
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
interface ListNode {
  val: number;
  next: ListNode | null;
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const root: ListNode = {
    val: 0,
    next: null,
  };
  let head = root;
  let t = 0;
  while (l1 && l2) {
    const sum = l1.val + l2.val + t;
    const n = sum % 10;
    if (sum >= 10) {
      t = 1;
    } else {
      t = 0;
    }
    head.next = {
      val: n,
      next: null,
    };
    head = head.next;
    l1 = l1.next;
    l2 = l2.next;
  }

  let rest = l1 || l2;
  if (rest) {
    while (rest) {
      const sum = rest.val + t;
      const n = sum % 10;
      if (sum >= 10) {
        t = 1;
      } else {
        t = 0;
      }
      head.next = {
        val: n,
        next: null,
      };
      head = head.next;
      rest = rest.next;
    }
  }
  if (t) {
    head.next = {
      val: 1,
      next: null,
    };
  }
  return root.next;
}
// @lc code=end
