"use strict";

function function_one() {
  let ar_1 = [
    Symbol.for(1),
    Symbol.for(2),
    Symbol.for(3),
    Symbol.for(4),
    Symbol.for(5),
  ];
  let first_element = ar_1.shift();
  return function_two(first_element, ...ar_1);
}

function function_two(first__ele, ...ar__1) {
  let ar_2 = [
    Symbol.for(6),
    Symbol.for(7),
    Symbol.for(8),
    Symbol.for(9),
    Symbol.for(10),
  ];
  ar_2.unshift(first__ele);
  ar_2.push(...ar__1);
  return ar_2.reduce((total, currentIndex) => total + Number(Symbol.keyFor(currentIndex)), 0);
}

new Promise((resolve, reject) => {
  const sum = Symbol.for(function_one());
  console.log(Symbol.keyFor(sum));
  Symbol.keyFor(sum) >= 35
    ? resolve("Sum is greater than 35")
    : reject("Sum is lesser than 35");
})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
