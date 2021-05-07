/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 * 针对于二分查找的总结：
 * https://www.geekxh.com/1.9.%E4%BA%8C%E5%88%86%E6%B3%95%E7%B3%BB%E5%88%97/901.html#_01%E3%80%81%E9%A2%98%E7%9B%AE%E7%A4%BA%E4%BE%8B
 */
var minEatingSpeed = function(piles, h) {
  let left=1;
  let right = piles.reduce((num,n)=>{
    return Math.max(num,n);
  },1);

  while(left < right){
    const mid = (left + right) >> 1;
    if(canEat(piles,mid,h)){
      right = mid;
    }else{
      left = mid+1;
    }
  }
  return right;
};

// 当前速度能否在规定时间内吃完
var canEat=function(piles,speed,h){
  let sum = piles.reduce((num,n)=>{
    return num + Math.ceil(n/speed);
  },0)
  return sum <= h;
}
// @lc code=end

