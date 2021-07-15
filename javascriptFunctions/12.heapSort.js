/**
 * 堆排序
 * node index: i
 * parent node index: (i-1) >>> 1
 * left son node index: (i+1)*2 -1
 * right son node index: (i+1)*2
 */

const arr = [1, 9, 2, 8, 3, 7, 4, 6, 5];

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// 数组堆化 大顶堆
// 查找方向：从下至上
const siftUp = (heap, i) => {
  while (true) {
    const parentIndex = (i - 1) >>> 1;
    const node = heap[i];
    const parentNode = heap[parentIndex];
    if (node > parentNode) {
      swap(heap, i, parentIndex);
      i = parentIndex;
    } else {
      return;
    }
  }
};

const buildHeap = (arr) => {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    siftUp(arr, i);
  }
  return arr;
};

console.log(buildHeap(arr));

/**
 * 查找方向 从顶到下
 * 顶元素发生修改，重置堆
 * @param {*} heap
 * @param {*} i
 * @param {*} lastIndex
 */
const siftDown = (heap, i, lastIndex) => {
  let index = i;
  while (index < lastIndex) {
    const leftIndex = (index + 1) * 2 - 1;
    const leftNode = heap[leftIndex];
    const rightIndex = leftIndex + 1;
    const rightNode = heap[rightIndex];
    const node = heap[index];
    let newIndex = index;

    if (node < leftNode ) {
      if (leftNode < rightNode) {
        newIndex = rightIndex;
      } else {
        newIndex = leftIndex;
      }
    } else if (node < rightNode) {
      newIndex = rightIndex;
    } else {
      return;
    }
    if (newIndex <= lastIndex) {
      swap(heap, index, newIndex);
      index = newIndex;
    } else {
      return;
    }
  }
};

const heapSort = (arr) => {
  const len = arr.length;
  arr = buildHeap(arr);
  for (let i = len - 1; i > 0; i--) {
    console.log(arr);
    swap(arr, 0, i);
    siftDown(arr, 0, i - 1);
  }
  return arr;
};

console.log(heapSort(arr));