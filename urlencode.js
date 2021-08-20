// function urlEncode takes a string (text) and returns a string
// where all ' ' characters are replaced with %20. 
// ignore leading and tailing whitespace.

// str -> str
const urlEncode = function(text) {
  // Put your solution here
  let ans = ''
  let keeplet = 0
  for (let i = 0; i < text.length; i++){
    //ignore leading whitespace
    if (text[i] === ' ' && ans === ''){
      continue
    //track the last char to keep
    } else if (text[i] === ' '){
        ans = ans + '%20'
    } else {
      ans = ans + text[i]
      keeplet = ans.length
    }
  }
  return ans.substring(0, keeplet)
};


//Test cases
/*
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
*/