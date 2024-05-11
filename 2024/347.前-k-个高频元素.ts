/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 * 思路：使用堆数据结构来解决 - 小顶堆
 * 注意这里需要构造的是小顶堆，堆结构一般是和堆顶元素来对比。这里如果构造大顶堆的话
 * 新进入元素和堆顶元素对比无法确定是否要入堆
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map();
  nums.forEach((n) => {
    const num = map.get(n);
    if (num) {
      map.set(n, num + 1)
    } else {
      map.set(n, 1)
    }
  });

  const heap = new MyHeap((left: Item, right: Item) => {
    return left.num - right.num
  });

  for (let key of map.keys()) {
    const num = map.get(key) as number;
    if (heap.size < k) {
      heap.enqueue({ key, num })
    } else {
      const topItem = heap.getTop();
      if (topItem.num < num) {
        heap.replaceQueue({ key, num })
      }
    }
  }

  return heap.getNums();
};

interface Item {
  key: number;
  num: number
}

class MyHeap {
  private queue: Item[] = [];
  private compareFn: (num1: Item, num2: Item) => number

  constructor(compareFn: (num1: Item, num2: Item) => number) {
    this.compareFn = compareFn
  }

  private swap = (left: number, right: number) => {
    [this.queue[left], this.queue[right]] = [this.queue[right], this.queue[left]]
  }

  public enqueue = (item: Item) => {
    this.queue.push(item);
    let index = this.queue.length - 1
    while (index > 0) {
      const parentIndex = (index - 1) >>> 1;
      const parent = this.queue[parentIndex];
      if (this.compareFn(item, parent) < 0) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        return;
      }
    }
  }

  public replaceQueue = (item: Item) => {
    this.queue[0] = item;
    let index = 0;
    while (true) {
      const leftIndex = (index + 1) * 2 - 1;
      const left = this.queue[leftIndex];
      const rightIndex = leftIndex + 1
      const right = this.queue[rightIndex];

      let newIndex = index;
      if (left && this.compareFn(item, left) > 0) {
        if (right && this.compareFn(left, right) > 0) {
          newIndex = rightIndex;
        } else {
          newIndex = leftIndex;
        }
      } else if (right && this.compareFn(item, right) > 0) {
        newIndex = rightIndex;
      } else {
        return;
      }

      if (newIndex < this.queue.length) {
        this.swap(newIndex, index);
        index = newIndex;
      } else {
        return;
      }
    }
  }

  public getTop = () => {
    return this.queue[0]
  }

  public get size() {
    return this.queue.length
  }

  public getNums = (): number[] => {
    return this.queue.map((item) => item.key)
  }
}

// @lc code=end

