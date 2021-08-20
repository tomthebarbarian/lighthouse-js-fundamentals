//sumLargestNumbers takes an array of 2 or numbers(data) and sums the largest
// 2 numbers, returning the result

// arrayOf num ->

const sumLargestNumbers = function(data) {
  // Put your solution here
  let max = data[0];
  let sndlarge = data[1];
  for (let i = 2; i < data.length; i++){
    if (data[i] > max) {
      sndlarge = max
      max = data[i]
       
    } else if (data[i] > sndlarge){
      sndlarge = data[i]
    }
  }
  //console.log('' + max + ' ' +sndlarge)
  return max + sndlarge
};

//console.log(sumLargestNumbers([1, 10]));
//console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));