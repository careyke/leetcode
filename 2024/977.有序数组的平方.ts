/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 * 解法：双指针 - 前后指针
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  const res: number[] = Array(len);
  let index = len - 1;

  while (left <= right) {
    const leftV = nums[left] * nums[left];
    const rightV = nums[right] * nums[right];

    if (leftV >= rightV) {
      res[index--] = leftV;
      left++;
    } else {
      res[index--] = rightV;
      right--;
    }
  }
  return res;
}
// @lc code=end
