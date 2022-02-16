// 题目：
// 从起点开始接下来有100个方块，相邻方块间隔为 1，每个方块上有增加体力的食用蘑菇或者减体力的毒蘑菇，
// 蘑菇带来的体力改变是已知的。一个人初始体力为 m，每次可以往前跳任意个方块，体力耗尽就是失败。
// （1）每跳一次消耗的体力与跳的距离成正比，比例为 1。这个人是否能到达终点，如果可以，求可能剩余的最大体力。
// （2）每跳一次消耗的体力与跳的距离的平方。这个人是否能到达终点，如果可以，求可能剩余的最大体力。

// (1)贪心算法
const getCount = (nums, m) => {
  const len = nums.length;
  let res = m;
  let index = -1;
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      const t = i - index; // 本次需要消耗体力
      if (res - t <= 0) return -1;
      res = res - t + nums[i];
      index = i;
    }
  }
  return res;
};

// (2)动态规划
// 公式：dp[n] = Math.max(dp[0]-n*n,...,dp[n-1]-1*1) + nums[n-1];
const getCount = (nums, m) => {
  const len = nums.length;
  const dp = [m];

  for (let i = 1; i <= len; i++) {
    dp[i] = Number.MIN_VALUE;
    for (let j = 0; j < i; j++) {
      const t = (i - j) * (i - j);
      dp[i] = Math.max(dp[i], dp[j] - t); // 达到i的最大体力，此时还没有采i的蘑菇
    }
    if (dp[i] <= 0) return -1;
    dp[i] = dp[i] + nums[i - 1]; // 采i的蘑菇
  }

  return dp[len];
};
