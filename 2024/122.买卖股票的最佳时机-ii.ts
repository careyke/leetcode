/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 * 动态规划
 * 二维数组存储每天的最大利润，分两种情况。
 * 1. 当天结束时手上有股票；
 *    - 前一天有股票，今天不卖出
 *    - 前一天没有股票，今天买入
 * 2. 当天结束时手上没有股票；
 *    - 前一天有股票，今天卖出
 *    - 前一天没有股票，今天不买入
 *
 * 进一步优化空间复杂度，可以不需要用二维数组存储。
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  const len = prices.length;
  let dp_1 = 0 - prices[0];
  let dp_0 = 0;

  for (let i = 1; i < len; i++) {
    const temp = dp_1;
    dp_1 = Math.max(dp_0 - prices[i], dp_1);
    dp_0 = Math.max(dp_0, temp + prices[i]);
  }

  return dp_0;
}
// @lc code=end
