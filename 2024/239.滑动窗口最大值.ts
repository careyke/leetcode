/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 * 思路：使用一个从大到小的队列 Queue 来保存窗口数据。保证Queue[0]是当前的最大值
 * 1. x进入队列时，从后往前遍历，剔除队列小于x的元素，因为这些元素不会成为最大值。
 * 2. y移除队列时，判断y是不是最大值，如果是最大值，则需要移除队列第一个元素。
 * 
 * 关键点：当X入队列时，队列中不会存在小于X的元素。所以不存在X出队列的时候，还存在X之前的元素存在在队列。
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  const queue: number[] = [];
  const res: number[] = []

  nums.forEach((n, i) => {
    // 入队
    while (queue.length) {
      const num = queue[queue.length - 1];
      if (n > num) {
        queue.pop()
      } else {
        break;
      }
    }
    queue.push(n);

    // 出队
    if (i >= k) {
      const leftNum = nums[i - k];
      if (leftNum === queue[0]) {
        queue.shift()
      }
    }

    // 取数据
    if (i >= k - 1) {
      res.push(queue[0])
    }
  })

  return res;
};

// 失败解法，边界没有处理清楚，对一般是删除堆顶元素，但是这个问题中并不一定删除堆顶元素。
// // 解法2：构造大顶堆 - 处理Top K 问题，首先得想到堆
// const swap = (arr: { num: number, index: number }[], left: number, right: number) => {
//   const temp = arr[left];
//   arr[left] = arr[right];
//   arr[right] = temp;
// }

// const heapAdd = (heap: { num: number, index: number }[], n: number, i: number) => {
//   heap.push({ num: n, index: i });
//   let index = heap.length - 1;
//   while (index > 0) {
//     const parentIndex = ((index + 1) >>> 1) - 1;
//     const parent = heap[parentIndex];
//     if (n > parent.num) {
//       swap(heap, index, parentIndex)
//       index = parentIndex;
//     } else {
//       break;
//     }
//   }
// }

// const heapReorder = (heap: { num: number, index: number }[]) => {
//   let index = 0;
//   const n = heap[index].num;
//   while (true) {
//     const leftIndex = (index + 1) * 2 - 1;
//     const left = heap[leftIndex];
//     const rightIndex = leftIndex + 1
//     const right = heap[rightIndex];

//     let newIndex = index;
//     if (left && n < left.num) {
//       if (right && left.num < right.num) {
//         newIndex = rightIndex;
//       } else {
//         newIndex = leftIndex;
//       }
//     } else if (right && n < right.num) {
//       newIndex = rightIndex;
//     } else {
//       return;
//     }

//     if (newIndex < heap.length) {
//       swap(heap, index, newIndex);
//       index = newIndex;
//     } else {
//       return;
//     }

//   }
// }

// function maxSlidingWindow(nums: number[], k: number): number[] {
//   if (k === 1) {
//     return nums;
//   }
//   const heap: { num: number, index: number }[] = [];
//   const res: number[] = [];

//   nums.forEach((n, i) => {

//     if (i >= k) {
//       heap.unshift({ num: n, index: i });
//       heapReorder(heap);
//       while (heap[0].index < i - k + 1) {
//         heap.shift();
//         heapReorder(heap);
//       }
//     } else {
//       heapAdd(heap, n, i);
//     }

//     if (i >= k - 1) {
//       res.push(heap[0].num)
//     }
//   });

//   return res;
// }

// @lc code=end


