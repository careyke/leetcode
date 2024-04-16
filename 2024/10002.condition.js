// 输入'11+2-3*4+5/2*4+10/5'
// 输出 '11+2-(3*4)+(5/2*4)+(10/5)';

const transform = (s) => {
  const len = s.length;
  let res = "";

  let subStr = "";
  let hasLeft = false;
  for (let i = 0; i < len; i++) {
    const c = s[i];
    if (c === "+" || c === "-") {
      if (hasLeft) {
        subStr = "(" + subStr + ")";
        hasLeft = false;
      }
      subStr += c;
      res += subStr;
      subStr = "";
    } else if (c === "*" || c === "/") {
      subStr += c;
      hasLeft = true;
    } else {
      subStr += c;
    }
  }
  if (subStr.length) {
    if (hasLeft) {
      subStr = "(" + subStr + ")";
      hasLeft = false;
    }
    res += subStr;
  }
  return res;
};

console.log(transform("11+2-3*4+5/2*4+10/5"));
