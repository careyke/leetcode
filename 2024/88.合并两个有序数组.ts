/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 * 思路：逆向双指针，从后往前遍历。
 * 如果使用正向双指针的话，由于需要原地在num1中操作，会涉及元素的插入操作
 * 时间复杂度上达不到要求。
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const len1 = nums1.length;
  let left = m - 1;
  let right = n - 1;
  let pos = len1 - 1

  while (left >= 0 && right >= 0) {
    const leftNum = nums1[left];
    const rightNum = nums2[right];

    if (leftNum <= rightNum) {
      nums1[pos] = rightNum;
      right--;
    } else {
      nums1[pos] = leftNum;
      left--;
    }
    pos--;
  }

  if (right >= 0) {
    while (right >= 0) {
      nums1[pos--] = nums2[right];
      right--;
    }
  }
};
// @lc code=end

