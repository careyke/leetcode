/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 * 滑动窗口问题的关键在于：
 * 左指针和右指针的移动时机
 * 1.窗口由不满足变成满足：移动右指针
 * 2.窗口由满足变成不满足：移动左指针
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  const len = fruits.length;
  const door = new Map();

  let res = 0;
  let left = 0;
  let right = 0;
  for (; right < len; ) {
    const rightV = fruits[right];
    if (door.size === 2 && !door.has(rightV)) {
      res = Math.max(res, right - left);
      while (door.size === 2) {
        const leftV = fruits[left];
        const t = door.get(leftV);
        if (t === 1) {
          door.delete(leftV);
        } else {
          door.set(leftV, t - 1);
        }
        left++;
      }
    } else {
      if (door.has(rightV)) {
        door.set(rightV, door.get(rightV) + 1);
      } else {
        door.set(rightV, 1);
      }
      right++;
    }
  }
  res = Math.max(res, right - left);
  return res;
};
// @lc code=end
// totalFruit([0, 1, 1, 4, 3]);
