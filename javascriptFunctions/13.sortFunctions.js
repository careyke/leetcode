const exchange = (arr, i, j) => {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
};

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

// 1. 冒泡排序
const bubbleSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        exchange(arr, j, j + 1);
      }
    }
  }
  return arr;
};
console.log("bubbleSort: ", bubbleSort(arr));

// 2. 选择排序
const selectSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      exchange(arr, minIndex, i);
    }
  }
  return arr;
};
console.log("selectSort: ", selectSort(arr));

// 3. 插入排序
const insertSort = (arr) => {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    const value = arr[i];
    let j = i - 1;
    for (; j >= 0 && value < arr[j]; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j + 1] = value;
  }
  return arr;
};
console.log("insertSort: ", insertSort(arr));

// 4. 快速排序
const quickSort = (arr) => {
  const quickSortCore = (arr, left, right) => {
    if (left >= right) return;
    const pivotValue = arr[right];
    let p = left;
    for (let i = left; i <= right; i++) {
      if (arr[i] <= pivotValue) {
        if (p !== i) {
          exchange(arr, p, i);
        }
        p++;
      }
    }
    const currentPivotIndex = p - 1;
    quickSortCore(arr, left, currentPivotIndex - 1);
    quickSortCore(arr, currentPivotIndex + 1, right);
  };
  quickSortCore(arr, 0, arr.length - 1);
  return arr;
};
console.log("quickSort: ", quickSort(arr));

// 5. 归并排序
const mergeSort = (arr) => {
  const merge = (arrA, arrB) => {
    const rightA = arrA.length - 1;
    const rightB = arrB.length - 1;
    let i = 0;
    let j = 0;
    const result = [];
    while (i <= rightA && j <= rightB) {
      if (arrA[i] <= arrB[j]) {
        result.push(arrA[i]);
        i++;
      } else {
        result.push(arrB[j]);
        j++;
      }
    }
    while (i <= rightA) {
      result.push(arrA[i]);
      i++;
    }
    while (j <= rightB) {
      result.push(arrB[j]);
      j++;
    }
    return result;
  };

  const mergeSortCore = (arr) => {
    const len = arr.length;
    if (len < 2) return arr;
    const mid = len >>> 1;
    const arrLeft = arr.slice(0, mid);
    const arrRight = arr.slice(mid);
    return merge(mergeSortCore(arrLeft), mergeSortCore(arrRight));
  };

  return mergeSortCore(arr);
};
console.log("mergeSort: ", mergeSort(arr));
