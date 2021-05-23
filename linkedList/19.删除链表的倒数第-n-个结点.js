/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * 双指针
 * 保持距离n
 * 边界情况： 需要在前面加一个虚拟节点
 * 保持距离为n, 左右指针最少包含n+1个元素 所以需要在前面加一个虚拟节点
 */
var removeNthFromEnd = function(head, n) {
  const preHead = {next:head}
  let left = preHead;
  let right = preHead;
  while(right.next){
    right = right.next;
    if(n === 0){
      left = left.next;
    }else{
      n--;
    }
  }
  if(n > 0) return null;
  left.next = left.next.next;

  return preHead.next;
};
// @lc code=end

