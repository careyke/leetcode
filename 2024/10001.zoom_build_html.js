// const arr = [
//   {level: 1, label: '1'},
//   {level: 1, label: '2'},
//   {level: 4, label: '3'},
//   {level: 2, label: '4'},
//   {level: 3, label: '5'},
//   {level: 3, label: '6'},
//   {level: 5, label: '7'},
// ]
// 实现下面的输出
// <li>1</li>
// <li>2</li>
// <li>
//   <li>
//     <li>
//       <li>3</li>
//     </li>
//   </li>
//   <li>4</li>
//   <li>
//     <li>5</li>
//     <li>6</li>
//     <li>
//       <li>
//         <li>7</li>
//       </li>
//     </li>
//   </li>
//   </li>
// </li>

// interface IItem {
//   level: number;
//   label: string;
// }

// interface INode {
//   label?: string;
//   children?: INode[];
//   level: number;
// }

// INode 中 level 可以不用，这里只是为了 debug 好看。
// 构建树
const buildTree = (arr) => {
  const root = {
    level: 0,
    children: [],
  };
  // 各个层级可以插入子元素的节点
  const lastParentNodeArr = [root];

  const buildNode = (item) => {
    const node = {
      label: item.label,
      level: item.level,
    };
    if (item.level < 1) return;
    // 构建路径空父节点
    while (lastParentNodeArr.length < item.level) {
      const parent = {
        level: lastParentNodeArr.length,
        children: [],
      };
      lastParentNodeArr[lastParentNodeArr.length - 1].children.push(parent);
      lastParentNodeArr[lastParentNodeArr.length] = parent;
    }
    // 插入新的节点之后需要修改层级数组的长度，以上一个插入节点的level为标准
    lastParentNodeArr.length = item.level;
    lastParentNodeArr[item.level - 1].children.push(node);
  };

  arr.forEach((item) => {
    buildNode(item);
  });

  return root;
};

// 深度优先遍历树
const buildHtml = (nodes) => {
  const len = nodes.length;
  let res = "";

  for (let i = 0; i < len; i++) {
    const node = nodes[i];
    res += "<li>";
    if (node.label) {
      res += node.label;
    } else {
      res += buildHtml(node.children);
    }
    res += "</li>";
  }

  return res;
};

const result = (arr) => {
  const root = buildTree(arr);
  return buildHtml(root.children);
};

const arr = [
  { level: 1, label: "1" },
  { level: 1, label: "2" },
  { level: 4, label: "3" },
  { level: 2, label: "4" },
  { level: 3, label: "5" },
  { level: 3, label: "6" },
  { level: 5, label: "7" },
];

console.log(result(arr));
