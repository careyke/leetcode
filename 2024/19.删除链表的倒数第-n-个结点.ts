/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 * 这道题正常来处理是比较麻烦的，需要先遍历一次链表，存在数组中，
 * 然后根据数组的特性来删除倒数的节点。
 * 这种解法的时间和空间复杂度都比较高，而且对于链表数据结构的特性没有使用上。
 *
 * 解法二：区间指针
 * 可以通过双指针的方式，两个指针间隔 N。
 * 然后一起移动端，当右指针移到头时，左指针指向的位置就是倒数第N个节点。
 * 对链表中的某个节点删除，需要获取到前一个节点才能操作。
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const preRoot: ListNode = {
    val: 0,
    next: head,
  };

  let right: ListNode | null = preRoot;
  // 右指针先走，拉开差距
  while (n >= 0 && right) {
    right = right.next;
    n--;
  }

  // 左右指针一起走
  let left: ListNode | null = preRoot;
  while (right && left) {
    left = left.next;
    right = right.next;
  }
  if (left) {
    const node = left.next?.next || null;
    left.next = node;
  }

  return preRoot.next;
}
// @lc code=end
