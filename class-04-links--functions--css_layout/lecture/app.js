var addition = addTwoNums(10, 20);
console.log('result of addTwoNums()', addition);

function addTwoNums(numOne, numTwo) {
  var total = numOne + numTwo;
  return total;
}

var addition = addTwoNums(10, 20);
console.log('result of addTwoNums()', addition);


var subtraction = subTwoNums(10, 20); // This will not work because the subTwoNums function is not available yet;
console.log('result of subTwoNums()', subtraction);

var subTwoNums = function(numOne, numTwo) {
  return numOne - numTwo;
};

var subtraction = subTwoNums(10, 20);
console.log('result of subTwoNums()', subtraction);
