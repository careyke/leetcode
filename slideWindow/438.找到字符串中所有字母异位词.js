/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * 标准的滑动窗口问题
 */
var findAnagrams = function(s, p) {
  const sLen = s.length;
  const pLen = p.length;
  if(pLen > s.length) return [];

  const map = new Map(); // 保存p中这个字符出现的次数

  const res = [];
  
  // 构造对比模板
  for(let i=0;i<pLen;i++){
    const n = map.get(p[i]);
    if(n){
      map.set(p[i],n+1);
    }else{
      map.set(p[i],1);
    }
  }

  for(let i=0;i<sLen;i++){
    const c = s[i];
    const num = map.get(c);
    if(num != null){
      // 当前字符符合
      map.set(c, num-1);

      if(![...map.values()].some(v => v !== 0)){
        // 判断是否找到
        res.push(i-pLen+1);
      }
    }

    if(i<sLen-1 && i >= pLen-1){
      // 回收滑动窗口第一个元素
      const recycleC = s[i-pLen+1];
      const recycleN = map.get(recycleC);
      if(recycleN != null){
        map.set(recycleC,recycleN+1);
      }
    }
  }

  return res;
};
// @lc code=end

