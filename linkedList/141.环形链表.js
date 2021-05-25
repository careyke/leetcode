/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 1. map 空间复杂度比较高
 * 2. 快慢指针  空间复杂度 O(1)
 */
// var hasCycle = function(head) {
//   const map = new Map();
//   let res = false;
//   let p = head;
//   while(p){
//     if(map.has(p)){
//       return true;
//     }else{
//       map.set(p, 1);
//       p = p.next;
//     }
//   }
//   return false;
// };

var hasCycle = function(head) {
  if(!head) return false;
  let quick = head.next;
  let slow = head;
  while(quick && slow && quick.next){
    if(quick === slow){
      return true;
    }
    quick = quick.next.next;
    slow = slow.next;
  }
  return false;
};
// @lc code=end

