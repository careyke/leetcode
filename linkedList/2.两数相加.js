/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 双指针
 * 
 * 从头构建一个新链表的方式更简单
 */
var addTwoNumbers = function (l1, l2) {
  let attach = 0;
  const head = l1;
  let pre = { next: l1 };
  while (l1 && l2) {
    const count = l1.val + l2.val + attach;
    if (count > 9) {
      attach = 1;
      l1.val = count - 10;
    } else {
      l1.val = count;
      attach = 0;
    }
    l1 = l1.next;
    l2 = l2.next;
    pre = pre.next;
  }
  if (l2) {
    pre.next = l2;
    l1 = l2;
  }
  if (attach > 0) {
    while (l1) {
      const count = l1.val + attach;
      if (count > 9) {
        attach = 1;
        l1.val = count - 10;
      } else {
        l1.val = count;
        attach = 0
      }
      l1 = l1.next;
      pre = pre.next;
    }
  }
  if(attach > 0){
    pre.next = new ListNode(1,null);
  }
  return head;
};
// @lc code=end
