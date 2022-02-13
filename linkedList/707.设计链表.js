/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var MyLinkedList = function () {
  this.size = 0;
  this.head = null; // 头指针
  this.tail = null; // 尾指针
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.size || index < 0) return -1;
  let node = this.head;
  while (index > 0) {
    node = node.next;
    index--;
  }
  return node.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const root = new ListNode(val, this.head);
  this.head = root;
  if (!this.tail) {
    this.tail = root;
  }
  this.size += 1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const tail = new ListNode(val, null);
  if (!this.tail) {
    this.head = tail;
  } else {
    this.tail.next = tail;
  }
  this.tail = tail;
  this.size += 1;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return;
  if (index <= 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this.size) {
    this.addAtTail(val);
    return;
  }
  const node = new ListNode(val);
  let root = new ListNode(val, this.head);
  while (index > 0) {
    root = root.next;
    index--;
  }
  node.next = root.next;
  root.next = node;

  this.size += 1;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size || index < 0) return;
  let root = new ListNode(0, this.head);
  let i = index;
  while (i > 0) {
    root = root.next;
    i--;
  }
  root.next = root.next.next;
  // 删除节点时注意头尾节点指针需要移动
  if (index === 0) {
    this.head = root.next;
  }
  if (index === this.size - 1) {
    this.tail = this.size === 1 ? null : root;
  }
  this.size -= 1;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

var linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);
linkedList.get(1);
linkedList.deleteAtIndex(0);
linkedList.get(0);

// linkedList.addAtTail(3);
// linkedList.addAtIndex(1, 2); //链表变为1-> 2-> 3
// linkedList.get(1); //返回2
// linkedList.deleteAtIndex(1); //现在链表是1-> 3
// linkedList.get(1);
