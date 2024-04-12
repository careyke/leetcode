/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 * 1. 第一种解法：针对小数组建立map，然后遍历
 * 2. 第二种解法：先排序 + 双指针
 * 3. 如果磁盘大小有限，则需要采用第一种，可以分片来操作。
 */

// 第一种解法
// @lc code=start
// function intersect(nums1: number[], nums2: number[]): number[] {
//   const buildMap = (arr: number[]) => {
//     const map: Record<string, number> = {};
//     for (let i = 0; i < arr.length; i++) {
//       const n = arr[i];
//       if (map[n]) {
//         map[n]++;
//       } else {
//         map[n] = 1;
//       }
//     }
//     return map;
//   };
//   const len1 = nums1.length;
//   const len2 = nums2.length;
//   let nums: number[] = [];
//   let map: Record<string, number> = {};
//   if (len1 < len2) {
//     map = buildMap(nums1);
//     nums = nums2;
//   } else {
//     map = buildMap(nums2);
//     nums = nums1;
//   }

//   const res: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     const n = nums[i];
//     const mn = map[n];
//     if (mn > 0) {
//       map[n]--;
//       res.push(n);
//     }
//   }

//   return res;
// }

// 解法二：先排序+双指针
function intersect(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const len1 = nums1.length;
  const len2 = nums2.length;
  let left = 0;
  let right = 0;
  const res: number[] = [];

  while (left < len1 && right < len2) {
    const leftNum = nums1[left];
    const rightNum = nums2[right];
    if (leftNum < rightNum) {
      left++;
    } else if (leftNum > rightNum) {
      right++;
    } else {
      res.push(leftNum);
      left++;
      right++;
    }
  }
  return res;
}
// @lc code=end
