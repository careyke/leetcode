/*
 * @lc app=leetcode.cn id=844 lang=typescript
 *
 * [844] 比较含退格的字符串
 * 用栈的方式来看待问题
 * 使用双指针的方式来解答问题
 * 常规的正向双指针问题会比较复杂，可以使用【倒序双指针】的方式来做，问题会简化很多
 */

// @lc code=start
function backspaceCompare(s: string, t: string): boolean {
  let left = s.length - 1;
  let right = t.length - 1;
  // 退格字符个数
  let sNum = 0;
  let tNum = 0;

  while (left >= 0 || right >= 0) {
    let leftV = "";
    let rightV = "";

    while (left >= 0) {
      const n = s[left];
      if (n === "#") {
        left--;
        sNum++;
      } else {
        if (sNum) {
          sNum--;
          left--;
        } else {
          leftV = n;
          break;
        }
      }
    }

    while (right >= 0) {
      const n = t[right];
      if (n === "#") {
        right--;
        tNum++;
      } else {
        if (tNum) {
          tNum--;
          right--;
        } else {
          rightV = n;
          break;
        }
      }
    }

    if (leftV !== rightV) {
      return false;
    } else {
      left--;
      right--;
    }
  }

  return true;
}
// @lc code=end
