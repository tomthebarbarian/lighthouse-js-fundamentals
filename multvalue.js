// function multiplicationTable() takes a number(maxvalue) and returns a multiplication
// table with all the multipliers up to that number 
// 

const multiplicationTable = function(maxValue) {
  // Your code here
  for (let col = 1; col <= maxValue; col++){
  let output = ''
    for (let row = 1; row <= maxValue; row++){
      if (row === maxValue){
        output += row * col;
      } else {
      output += row*col;
      output += ' '
    }

    }
    console.log(output)
  } 
};

// Test Case:

//console.log(multiplicationTable(1));
//console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
