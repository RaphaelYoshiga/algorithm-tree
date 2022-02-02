function removeStartingWithTree(list, valuesToRemove) {
  return list.filter(x => !valuesToRemove.some(remove => x.startsWith(remove)));
}
module.exports = removeStartingWithTree;