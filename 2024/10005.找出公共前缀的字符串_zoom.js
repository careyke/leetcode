// 存在如下所示的字符串数组，请实现输入一个字符串，检索字符串数组，返回以该字符串开头的字符串数组。
// const words = ["preference", "present", "pressure", "preview", "premium", "statement", "statistics", "stabilize", "stereotype", "stethoscope", "internship", "interview", "intersection", "intermediate", "interpretation", "relationship", "relaxation", "religious", "remarkable", "remember"]
// input: 'pre'
// output: ["preference", "present", "pressure", "preview", "premium"]

/**
 *
 * @param {*} arr
 * @param {*} pre
 * 第一种解法：直接用String.startWith() 方法就可以。
 * 但是在查询的次数很大的时候，每次时间复杂度都是 O(n) 不能接受，有没有优化空间。
 *
 * 第二种解法：构建字典树，产生一次性成本。但是二次查找会减低复杂度。O(logn)
 *
 * 这里直接采用第二种解法
 */
const buildTree = (arr) => {
  const root = {};

  const addString = (str) => {
    const len = str.length;
    let map = root;
    for (let i = 0; i < len; i++) {
      const c = str[i];
      if (!map[c]) {
        map[c] = {};
      }
      map = map[c];
    }
  };

  arr.forEach((str) => {
    addString(str);
  });

  return root;
};

const searchByPrefix = (tree, pre) => {
  const len = pre.length;
  let map = tree;
  for (let i = 0; i < len; i++) {
    const c = pre[i];
    if (map[c]) {
      map = map[c];
    } else {
      return [];
    }
  }

  const res = [];
  const search = (map, s) => {
    const keys = Object.keys(map);
    if (keys.length) {
      keys.forEach((k) => {
        search(map[k], s + k);
      });
    } else {
      res.push(pre + s);
    }
  };

  search(map, "");
  return res;
};

const words = [
  "preference",
  "present",
  "pressure",
  "preview",
  "premium",
  "statement",
  "statistics",
  "stabilize",
  "stereotype",
  "stethoscope",
  "internship",
  "interview",
  "intersection",
  "intermediate",
  "interpretation",
  "relationship",
  "relaxation",
  "religious",
  "remarkable",
  "remember",
];
const tree = buildTree(words);

console.log(searchByPrefix(tree, "pre"));
console.log(searchByPrefix(tree, "pres"));
console.log(searchByPrefix(tree, "ste"));
