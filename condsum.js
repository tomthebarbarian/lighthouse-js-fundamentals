// conditionalSum takes in an array of values (values) and a string  
// condition (condition) either even or odd, and returns the sum of all numbers
// that meet the condition
// 
// arrayOf num str -> num

const conditionalSum = function(values, condition) {
  // Your code here
  let anssum = 0;
  for (let elem of values){
    if (condition === 'even'){
      if (elem % 2 === 0){
        anssum += elem
      }
    } else if (condition === 'odd'){
      if (elem % 2 === 1){
        anssum += elem
      }
  }
  }
  return anssum
};

//// Test Cases
//console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
//console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
//console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
//console.log(conditionalSum([], "odd"));