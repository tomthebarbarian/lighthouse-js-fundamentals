// function checkair takes in an array of strings(samples) and a number (threshold)
// and returns 'Clean' if the percentage of strings in the array is above
// threshold and 'Polluted' otherwise

const checkAir = function (samples, threshold) {
  // Code here!
  let dirtycount = 0;
  for (let elem of samples){
    if (elem === 'dirty'){
      dirtycount++
    }
  }
  const dirtperc = dirtycount/samples.length
  if  (dirtperc < threshold){
    return 'Clean'
  } else {
    return 'Polluted'
  }
};


// Test Cases.
/*
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
*/