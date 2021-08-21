// function repeatNumbers takes an array of arrays of nums(data) and for each 
// array in data, logs the pos 0 number to console pos 1 times.

// arrayOf arrayOf num -> str
const repeatNumbers = function(data) {
  // Put your solution here
  let outputstr = '';
  for (let iter = 0; iter < data.length; iter++){
    let elem = data[iter];
    for (let i = 0; i < elem[1]; i++){
      outputstr = outputstr+elem[0]
    }
    if (iter === data.length-1){
      return outputstr
    } else {
      outputstr = outputstr+', '
    }
  }
};

//Test
/*
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
*/