// function concat takes 2 arrays(array1, array2) and returns a single array
// with all the elements in the 2 given arrays

// arrayOf(num) arrayOf(num) -> arrayOf(num)
const concat = (array1, array2) => {
  let ansarray = array1
  for (let i = 0; i < array2.length; i++){
    ansarray.push(array2[i])
  }
  return ansarray 
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);