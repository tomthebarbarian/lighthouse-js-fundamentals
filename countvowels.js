// numberOfVowels takes a string(data) and returns the number of vowels in that string

const numberOfVowels = function(data) {
  // Put your solution here
  let ans = 0
  for (let i = 0; i < data.length; i++){
    if (['a','e','i','o','u'].includes(data[i])){
      ans++;
    }
  }
  return ans
};


//Test Cases
//console.log(numberOfVowels("orange"));
// console.log(numberOfVowels("lighthouse labs"));
//console.log(numberOfVowels("aeiou"));