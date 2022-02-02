function removeStartingWith(list, valuesToRemove) {

  const treeRoot = buildTree(list);

  const filteredList = [];

  valuesToRemove.forEach(x => remove(treeRoot, x));
  recursiveTransverse(treeRoot, filteredList);

  return filteredList;
}

function remove(treeRoot, toRemove) {
  let node = treeRoot;
  let previousNode = treeRoot;
  let lastCharacter = "";

  for (var i = 0; i < toRemove.length; i++) {
    let char = toRemove.charAt(i)
    if (node.children[char]) {
      previousNode = node;
      node = node.children[char];
      lastCharacter = char;
    } else {
      return;
    }
  }

  delete previousNode.children[lastCharacter];


}

function recursiveTransverse(node, filteredList) {

  if (node.key)
    filteredList.push(node.key);

  for (let key in node.children) {
    console.log(key);
    recursiveTransverse(node.children[key], filteredList);
  }
}

function buildTree(list) {
  const root = { children: {} };
  let node = root;
  list.forEach(value => {
    for (var i = 0; i < value.length; i++) {
      let char = value.charAt(i);
      if (node.children[char]) {
        node = node.children[char];
      } else {
        const newNode = { children: {} };
        node.children[char] = newNode;
        node = newNode;
      }
    }

    node.key = value;
    node = root;
  });
  return root;
}

module.exports = removeStartingWith;