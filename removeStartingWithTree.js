function removeStartingWith(list, valuesToRemove) {

  const treeRoot = buildTree(list);

  const filteredList = [];

  valuesToRemove.forEach(toRemove => remove(treeRoot, toRemove));
  buildListRecursively(treeRoot, filteredList);

  return filteredList;
}

function buildTree(list) {
  const root = { children: {} };
  let node = root;
  list.forEach(value => {
    addNodesForValue(value, node);

    node = root;
  });
  return root;
}

function addNodesForValue(value, node) {
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

  return node;
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

function buildListRecursively(node, filteredList) {
  if (node.key)
    filteredList.push(node.key);

  for (let key in node.children) {
    buildListRecursively(node.children[key], filteredList);
  }
}


module.exports = removeStartingWith;