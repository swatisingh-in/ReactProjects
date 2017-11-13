// We can not give a name to arrow functions.

// const square = function (x) {
//   return x * x;
// }

function square(x) {
  return x * x;
}

console.log(square(10));

const squareArrow = (x) => {
  return x * x;
}

console.log(squareArrow(11));

//If we have single statement in the function call we can use arrow function expressions

const addition = (x) => x + x;

console.log(addition(10));

//Challenge

const getFirstname = name => name.split(' ')[0];

console.log(getFirstname("Mike Smith"));
