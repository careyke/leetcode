/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)(字典树)
 * 多叉树 - 类比字典
 */

// @lc code=start

var Trie = function () {
  this.children = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.children;
  for (let c of word) {
    if (!node[c]) {
      node[c] = {};
    }
    node = node[c];
  }
  node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.children;
  for (let c of word) {
    if (!node[c]) return false;
    node = node[c];
  }
  if (node.isEnd) return true;
  return false;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.children;
  for (let c of prefix) {
    if (!node[c]) return false;
    node = node[c];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
