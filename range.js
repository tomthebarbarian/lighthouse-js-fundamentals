// function range takes in 3 arguments, start(num), end(num) and step(num)
// and returns an array of numbers from start to end incremented by step

// num num num -> array of num
// output array of num
let range = (start,end,step) => {
  let ansarr = [];
  if ((start === 0 || start) && end && step && start < end && step > 0){
    for (let iter = start; iter <= end; iter += step){
      ansarr.push(iter)
    }
    return ansarr;
  } else {
    return [];
  }
}

console.log(range(0,8,2))