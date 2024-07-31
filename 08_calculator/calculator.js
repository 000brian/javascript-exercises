const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((accumulator, num) => (accumulator + num), 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, product) => (accumulator * product), 1)
};

const power = function(a, b) {
  let power = 1;
	for(let i = 0; i < b; i++)
  {
    power *= a;
  }
  return power;
};

const factorial = function(num) {
	let result = 1;
  for (let i = 2; i <= num; i++)
  {
    result*=i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
