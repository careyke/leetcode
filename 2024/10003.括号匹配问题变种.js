// 判断字符串里面的括号是否闭合
// ( 对应 )
// { 对应 }
// [ 对应 ]

// 规则左括号必须有对应的右括号
// 比如
// '()'  ->  true
// '(]'  ->  false
// '([){[}'  ->  true  分为两部分 因为 ([) 和 {[} 都能闭合
// '([]{[}'  ->  false {[} 可以闭合  ([] 不能闭合

const isMatch = (s) => {
  const len = s.length;
  const map = {};
  const stack = [];

  const getLeft = (c) => {
    let leftC = "";
    if (c === ")") {
      leftC = "(";
    } else if (c === "]") {
      leftC = "[";
    } else {
      leftC = "{";
    }
    return leftC;
  };

  const consume = (leftC) => {
    while (stack.length && stack.pop() !== leftC) {}
  };

  for (let i = 0; i < len; i++) {
    const c = s[i];
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
      map[c] = map[c] ? map[c] + 1 : 1;
    } else {
      const leftC = getLeft(c);
      if (map[leftC]) {
        consume(leftC);
        map[leftC]--;
      } else {
        stack.push(c);
      }
    }
  }

  return !stack.length;
};

console.log(isMatch("()"));
console.log(isMatch("(]"));

console.log(isMatch("([){[}"));
console.log(isMatch("([]{[}"));
