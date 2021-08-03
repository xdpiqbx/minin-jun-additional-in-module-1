const unique = (arr) => {
  return [...new Set(arr)];
};

console.log(
  unique([1, 1, 2, 2, 4, 2, 3, 7, 3]) // => [1, 2, 4, 3, 7]
);
