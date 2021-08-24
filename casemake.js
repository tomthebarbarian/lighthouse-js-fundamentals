// function camelCase takes a string(input) and returns a string that 
// has input's white space stripped and is in camelCase.

// str -> str 
const camelCase = function(input) {
  // Your code here
  let toupper = false
  let ansstr = ''
  for (let elem of input){
    //console.log(elem)
    if (elem === ' '){
      toupper = true
    } else if (toupper === true) {
      if (elem !== ' '){
        ansstr += elem.toUpperCase()
        toupper = false
      }
    } else {
      ansstr += elem
    }
    
  }
  return ansstr
};

//Test Cases
/*
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
*/  