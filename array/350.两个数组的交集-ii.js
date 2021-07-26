/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map();
  const len1 = nums1.length;
  const len2 = nums2.length;
  const res = [];
  if (len1 === 0 || len2 === 0) return [];
  for (let i = 0; i < len1; i++) {
    const n = nums1[i];
    const t = map.get(n);
    if (t) {
      map.set(n, t + 1);
    } else {
      map.set(n, 1);
    }
  }
  for (let i = 0; i < len2; i++) {
    const n = nums2[i];
    const t = map.get(n);
    if (t) {
      res.push(n);
      map.set(n, t - 1);
    }
  }
  return res;
};
// @lc code=end

/**
 * 数组已经排序，从小到大
 * @param {*} nums1
 * @param {*} nums2
 */
var intersectByOrder = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const res = [];
  if (len1 === 0 || len2 === 0) return res;
  let p1 = 0;
  let p2 = 0;
  while (p1 < len1 && p2 < len2) {
    const n1 = nums1[p1];
    const n2 = nums2[p2];
    if (n1 < n2) {
      p1++;
    } else if (n1 > n2) {
      p2++;
    } else {
      res.push(n1);
      p1++;
      p2++;
    }
  }
  return res;
};
