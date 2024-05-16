/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 * 思路：map + 双向链表
 * 双向链表的意义是用来降低插入和删除节点的时间复杂度
 */

// @lc code=start

interface ILinkItem {
  key: number;
  value: number;
  prev: ILinkItem | null;
  next: ILinkItem | null;
}

class LRUCache {
  private cache: Map<number, ILinkItem> = new Map();
  private head: ILinkItem = { key: -1, value: -1, prev: null, next: null };
  private tail: ILinkItem = { key: -1, value: -1, prev: null, next: null };
  private capacity: number;
  private count: number = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    const node = this.cache.get(key);
    if (node) {
      this.deleteNode(node);
      this.unshiftNode(node);
      return node.value;
    }
    return -1;
  }

  put(key: number, value: number): void {
    const node = this.cache.get(key);
    if (node) {
      this.deleteNode(node);
    }
    const newNode: ILinkItem = {
      key,
      value,
      prev: null,
      next: null,
    };
    this.unshiftNode(newNode);

    if (this.count > this.capacity) {
      this.disuseNode();
    }
  }

  private unshiftNode = (node: ILinkItem) => {
    const { key } = node;
    const firstNode = this.head.next;
    if (firstNode) {
      this.head.next = node;
      node.next = firstNode;
      node.prev = this.head;
      firstNode.prev = node;

      this.count = this.count + 1;
      this.cache.set(key, node);
    }
  };

  private deleteNode = (node: ILinkItem) => {
    const { key, prev, next } = node;
    if (prev && next) {
      prev.next = next;
      next.prev = prev;

      this.count--;
      this.cache.delete(key);
    }
  };

  private disuseNode = () => {
    const lastNode = this.tail.prev;
    if (lastNode && lastNode !== this.head) {
      this.deleteNode(lastNode);
    }
  };
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
