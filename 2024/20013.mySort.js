const insertSort = (arr, left, right) => {
  for (let i = left + 1; i <= right; i++) {
    const num = arr[i];
    let j = i - 1;
    for (; j >= left; j--) {
      if (num < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = num;
  }
  return arr;
};

// var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// console.log(insertSort(arr, 0, 14));

const exchange = (arr, a, b) => {
  const t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
};

const quickSort = (arr) => {
  const qiuckCore = (arr, left, right) => {
    // 快慢指针
    const pivotValue = arr[right];
    let index = left;
    for (let i = left; i <= right; i++) {
      if (arr[i] <= pivotValue) {
        exchange(arr, index, i);
        index++;
      }
    }
    return index - 1;
  };

  const list = [
    {
      left: 0,
      right: arr.length - 1,
    },
  ];

  const sortCore = (arr, left, right) => {
    const len = right - left + 1;
    if (len <= 10) {
      insertSort(arr, left, right);
      return;
    }

    const thirdIndex = (left + right) >>> 1;
    const pivotArr = insertSort([arr[left], arr[right], arr[thirdIndex]]);
    arr[left] = pivotArr[0];
    arr[right] = pivotArr[1];
    arr[thirdIndex] = pivotArr[2];
    const pivotIndex = qiuckCore(arr, left, right);
    list.push({ left, right: pivotIndex - 1 });
    list.push({ left: pivotIndex + 1, right });
  };

  // 栈替换递归
  while (list.length) {
    const { left, right } = list.pop();
    sortCore(arr, left, right);
  }

  return arr;
};

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr));
