/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let res = "";
  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] === " ") {
      res += "%20";
    } else {
      res += s[i];
    }
  }
  return res;
};
