'use strict';

// Первый вариант
const multipleOfNumbers = (num) =>
  num
    .toString()
    .split('')
    .reduce((res, item) => item * res, 1);
console.log(multipleOfNumbers(266219));
console.log(multipleOfNumbers(266219) ** 3);

// Второй вариант
let num1 = [2, 6, 6, 2, 1, 9];
let result = num1.reduce(function (multiply, item, index, array) {
  return multiply * item;
}, 1);

console.log(result);
console.log(result ** 3);
console.log(String(result).slice(0, 2));

let result1 = result ** 3;
console.log(String(result1).slice(0, 2));
