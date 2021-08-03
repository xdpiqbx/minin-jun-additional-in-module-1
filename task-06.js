const oddSort = (arr) => {
  // odd не чётный
  // even чётный

  const arrObjwithIndexes = arr.map((item, index) => ({
    item,
    index,
  })); // запоминаю кто на каком месте стоит

  const oddArr = arrObjwithIndexes.filter(({ item }) => item % 2 !== 0); // массив чётных
  const evenArr = arrObjwithIndexes.filter(({ item }) => item % 2 === 0); // массив НЕ чётных

  // в массиве НЕ чётных сортирую и возвращаю значения
  const sortedOdds = [...oddArr].map(({ item }) => item).sort((a, b) => a - b);
  // в массиве НЕ чётных сортирую и возвращаю индексы
  const sortedIndexesOdd = [...oddArr]
    .map(({ index }) => index)
    .sort((a, b) => a - b);

  const newOddObjectsArr = [];

  for (let i = 0; i < oddArr.length; i += 1) {
    // формирую новый массив нечётных объектов в котором значения и индексы отсортированы по возрастанию
    newOddObjectsArr.push({ item: sortedOdds[i], index: sortedIndexesOdd[i] });
  }

  // разворачиваю новый массив нечётных объектов и массив чётных объектов в один массив
  // сортирую по индексам
  // и возвращаю массив значений
  return [...newOddObjectsArr, ...evenArr]
    .sort((a, b) => a.index - b.index)
    .map(({ item }) => item);
};

console.log(
  oddSort([7, 3, 4, 9, 5, 2, 17]) // => [3, 5, 4, 7, 9, 2, 17]
);
