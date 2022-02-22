/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const len = nums.length;
  const map = new Map();

  for (let i = 0; i < len; i++) {
    const num = nums[i];
    map.set(num, (map.get(num) || 0) + 1);
  }

  const compareFn = (entry1, entry2) => {
    if (entry1 && entry2) {
      return entry1[1] - entry2[1];
    }
    return undefined;
  };
  const heapQueue = new HeapQueue(compareFn);
  for (let entry of map.entries()) {
    if (heapQueue.size() < k) {
      heapQueue.enqueue(entry);
    } else {
      if (heapQueue.top()[1] < entry[1]) {
        heapQueue.replaceQueue(entry);
      }
    }
  }

  const res = [];
  while (heapQueue.size()) {
    res.push(heapQueue.pop()[0]);
  }
  return res;
};

class HeapQueue {
  constructor(compareFn) {
    this.queue = [];
    this.compareFn = compareFn;
  }
  enqueue(x) {
    this.queue.push(x);
    const len = this.queue.length;

    let index = len - 1;
    let parentIndex = (index - 1) >>> 1;
    // 小顶堆
    while (parentIndex >= 0 && parentIndex < len) {
      if (this.compare(index, parentIndex) < 0) {
        [this.queue[index], this.queue[parentIndex]] = [
          this.queue[parentIndex],
          this.queue[index],
        ];
        index = parentIndex;
        parentIndex = (index - 1) >>> 1;
      } else {
        return;
      }
    }
  }
  replaceQueue(x) {
    this.queue[0] = x;
    const len = this.queue.length;

    let index = 0;
    let leftIndex = index * 2 + 1;
    let rightIndex = leftIndex + 1;

    while (leftIndex < len || rightIndex < len) {
      let newIndex = index;

      if (this.compare(index, leftIndex) > 0) {
        if (this.compare(leftIndex, rightIndex) > 0) {
          newIndex = rightIndex;
        } else {
          newIndex = leftIndex;
        }
      } else if (this.compare(index, rightIndex) > 0) {
        newIndex = rightIndex;
      } else {
        return;
      }

      if (newIndex < len) {
        [this.queue[index], this.queue[newIndex]] = [
          this.queue[newIndex],
          this.queue[index],
        ];
        index = newIndex;
        leftIndex = index * 2 + 1;
        rightIndex = leftIndex + 1;
      } else {
        return;
      }
    }
  }
  pop() {
    return this.queue.shift();
  }
  top() {
    return this.queue[0];
  }
  size() {
    return this.queue.length;
  }
  compare(left, right) {
    return this.compareFn(this.queue[left], this.queue[right]);
  }
}
// @lc code=end
