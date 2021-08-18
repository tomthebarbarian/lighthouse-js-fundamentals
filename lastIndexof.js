// lastIndexof takes an array(narray) and a number(num) and returns the index of the last
// occurance of num or -1 if num is not in narray

// arrayof[num] num -> num
// output: a number
const lastIndexOf = (narray,num) => {
  let lastindex = -1;
  for (let i = 0; i < narray.length; i++){
    if (narray[i] === num) {
      lastindex = i
    }
  }
  return lastindex

}

console.log(lastIndexOf([], 3));