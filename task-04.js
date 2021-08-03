console.log(isEqualSymbols("адрес", "среда")); // true
console.log(isEqualSymbols("ноутбук", "программист")); // false

function isEqualSymbols(str1, str2) {
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  return str1 === str2 ? true : false;
}
