/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 * 数学归纳法
 * 两种情况：
 * 1. 假设第i天手上有股票，当天可选择卖出或者不交易，计算当天结束时的最大利润
 * 2. 假设第i天手上没有股票，当天可选择买入或者不交易，计算当天结束时的最大利润
 * dp_i_0: 表示第i天结束后 手上没有股票时的最大利润
 * dp_i_1: 表示第i天结束后 手上有股票时的最大利润
 * 不需要使用二维数组存储
 */
var maxProfit = function(prices) {
  const len =  prices.length;
  if(len < 2) return 0;
  let dp_i_0 = 0;
  let dp_i_1 = 0 - prices[0];
  for(let i=1;i<len;i++){
    const p = prices[i];
    const temp = dp_i_0;
    dp_i_0 = Math.max(temp, dp_i_1 + p);
    dp_i_1 = Math.max(dp_i_1, temp - p);
  }
  return dp_i_0;
};
// @lc code=end

