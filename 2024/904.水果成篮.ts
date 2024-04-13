/*
 * @lc app=leetcode.cn id=904 lang=typescript
 *
 * [904] 水果成篮
 * 分析：需要获取的是种类为2的最大连续子数组。
 * 一般连续最小或者最大子串的问题都可以使用滑动窗口来解决。
 * 1. 开始移动右指针，当种类为3的时候，暂停移动。
 * 2. 移动左指针，当种类为2的时候，暂停移动。
 * 以上两个步骤交替循序执行
 *
 * 代码写得好搓！！！
 * 多维护了一个types，应该直接用map，变量越多，边界维护越麻烦，错的越多。
 */

// @lc code=start
function totalFruit(fruits: number[]): number {
  const len = fruits.length;
  let res = 0;
  // 记录当前已有的种类
  const map: Record<string, number> = {};
  let types = 0;

  let left = 0;
  let right = 0;

  while (right < len) {
    // 移动端右指针
    let shouldMoveLeft = false;
    const num = fruits[right];
    if (types <= 2) {
      if (map[num]) {
        map[num]++;
      } else {
        map[num] = 1;
        types++;
      }
      if (types <= 2) {
        res = Math.max(res, right - left + 1);
      }
      right++;
    } else {
      shouldMoveLeft = true;
    }

    if (shouldMoveLeft) {
      // 移动左指针
      while (types > 2) {
        const leftNum = fruits[left];
        map[leftNum]--;
        if (map[leftNum] === 0) {
          types--;
        }
        left++;
      }
    }
  }
  return res;
}
// @lc code=end
