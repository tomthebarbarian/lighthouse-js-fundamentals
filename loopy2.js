// function loopyLighthouse takes an array of 2 numbers(range), another 
// array of 2 numbers (multiples) and an array of 2 strings(words)
// and console.logs strings depending on the multiples of the numbers generated
// by range

// arrayOf num arrayOf num arrayOf str -> none


const loopyLighthouse = (range, multiples, words)  => {
  for (let i = range[0]; i <= range[1]; i++){
    if (i % multiples[0] === 0 && i % multiples[1] === 0){
      console.log(words[0]+ words[1])
    } else if (i % multiples[0] === 0 ){
      console.log(words[0])
    } else if (i % multiples[1] === 0 ){
      console.log(words[1])
    } else {
      console.log(i)
    }
  }

}


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
