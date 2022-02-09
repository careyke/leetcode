/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 * 设计思路：
 * 利用map数据结构在新增key的时候会保证顺序这一特性
 * 来设计 LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const value = this.map.get(key);
    // 重置key的顺序
    this.map.delete(key);
    this.map.set(key, value);

    return value;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  this.map.set(key, value);
  // 缓存溢出，需要删除前面的缓存项
  if (this.map.size > this.capacity) {
    // Map.keys()会返回一个迭代器，调用迭代器的next方法刚好返回第一个数据项
    this.map.delete(this.map.keys().next().value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
