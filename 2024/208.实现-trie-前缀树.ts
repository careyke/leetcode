/*
 * @lc app=leetcode.cn id=208 lang=typescript
 *
 * [208] 实现 Trie (前缀树)
 * 思路：构建字典树
 */

// @lc code=start
interface IDataPro {
  [key: string]: IData & { isEnd?: boolean };
}

type IData = Record<string, IDataPro> & { isEnd?: boolean };

class Trie {
  private data: IData = {};
  constructor() {}

  insert(word: string): void {
    let node = this.data;
    for (let c of word) {
      if (!node[c]) {
        node[c] = {};
      }
      node = node[c];
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    let node = this.data;
    for (let c of word) {
      if (!node[c]) {
        return false;
      } else {
        node = node[c];
      }
    }
    return !!node.isEnd;
  }

  startsWith(prefix: string): boolean {
    let node = this.data;
    for (let c of prefix) {
      if (!node[c]) {
        return false;
      } else {
        node = node[c];
      }
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
