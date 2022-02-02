describe('Naive brute force removal approach', () => {
  const removeStartingWith = require('./removeStartingWith');
  test('Remove starting with simple', () => {
    expect(removeStartingWith(["abc"], ["ab"])).toStrictEqual([]);
  });

  test('Remove starting medium dataSet', () => {
    const values = [
      "a",
      "abc",
      "abcd",
      "abcdf",
      "bcd",
      "bdcf",
      "bdcfg"
    ];
    const toRemove = [
      "ab",
      "bdcf"
    ];
    expect(removeStartingWith(values, toRemove)).toStrictEqual(["a", "bcd"]);
  });


  test('Remove large dataset', () => {
    const seed = "asdasdasdlkpoifjdsaknfhsdlfs"; // To make the starts with operation more expensive
    const values = [];
    for (let i = 0; i <= 40000; i++) {
      values.push(seed + i.toString());
    }
    toRemove = []
    for (let i = 40000; i >= 1; i--) {
      toRemove.push(seed + i.toString());
    }
    expect(removeStartingWith(values, toRemove)).toStrictEqual([seed + "0"]);
  });
});

describe('Optimised tree indexing approach', () => {
  const removeStartingWith = require('./removeStartingWithTree');
  test('Remove starting with simple', () => {
    expect(removeStartingWith(["abc"], ["ab"])).toStrictEqual([]);
  });

  test('Remove starting medium dataSet', () => {
    const values = [
      "a",
      "abc",
      "abcd",
      "abcdf",
      "bcd",
      "bdcf",
      "bdcfg"
    ];
    const toRemove = [
      "ab",
      "bdcf"
    ];
    expect(removeStartingWith(values, toRemove)).toStrictEqual(["a", "bcd"]);
  });


  test('Remove large dataset', () => {
    const seed = "asdasdasdlkpoifjdsaknfhsdlfs"; // To make the starts with operation more expensive
    const values = [];
    for (let i = 0; i <= 40000; i++) {
      values.push(seed + i.toString());
    }
    toRemove = []
    for (let i = 40000; i >= 1; i--) {
      toRemove.push(seed + i.toString());
    }
    expect(removeStartingWith(values, toRemove)).toStrictEqual([seed + "0"]);
  });
});