"use strict";

function function_one() {
  let ar_1 = [1, 2, 3, 4, 5];
  let first_element = ar_1.shift();
  return function_two(first_element, ...ar_1);
}

function function_two(first__ele, ...ar__1) {
  let ar_2 = [6, 7, 8, 9, 10];
  ar_2.unshift(first__ele);
  ar_2.push(...ar__1);
  return ar_2.reduce((total, currentIndex) => total + currentIndex, 0);
}

new Promise((resolve, reject) => {
  const sum = function_one();
  console.log(sum);
  sum >= 35
    ? resolve("Sum is greater than 35")
    : reject("Sum is lesser than 35");
})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
