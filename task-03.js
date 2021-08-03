function groupBy(arr, fn) {
  const result = {};
  arr.forEach((element) => {
    result[fn(element)] = [];
  });
  for (let item in result) {
    arr.forEach((element) => {
      if (parseInt(item) === fn(element)) {
        result[item].push(element);
      }
    });
  }
  return result;
}

const result = groupBy([2.3, 2.2, 3.4], Math.floor);
console.log(result);
// result
// {
//  2: [2.3, 2.2],
//  3: [3.4]
// }
