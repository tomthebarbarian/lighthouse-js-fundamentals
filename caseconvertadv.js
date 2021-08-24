// function makeCase takes an input string (input) and a casestyle or an 
// array thereof and returns the input string modified to fulfill the 
// specificiations of the casestyle(s)

// str str/arrayOf str -> str
const makeCase = function(input, casetype) {
  // Put your solution here
  let ansstr = ''
  let postwhite = false
  let vowels = ['a','e','i','o','u']
  if (typeof casetype === 'string'){
    switch(casetype){
      case 'camel':
      case 'pascal':
      case 'snake':
      case 'kebab':
      case 'title':
      case 'vowel':
      case 'camel':
      case 'consonant':
      case 'upper':
      case 'lower':
    }
  } else {
    for (let elem of casetype){
      switch(elem){
      case 'camel':
        for (let chars of input){
          if (postwhite && chars !== ' '){
            ansstr += chars.toUpperCase()
            postwhite = false
          } else if ( chars === ' '){
            postwhite = true
          } else {
            ansstr += chars
          }
        }
      case 'pascal':
        for (let chars of input){
          if (ansstr === ''){
            ansstr += chars.toUpperCase()
          } else if (postwhite && chars !== ' '){
            ansstr += chars.toUpperCase()
            postwhite = false
          } else if ( chars === ' '){
            postwhite = true
          } else {
            ansstr += chars
          }
        }
      case 'snake':
        for (let chars of input){
          if ( chars === ' '){
            ansstr += '_'
          } else {
            ansstr += chars
          }
        }
      case 'kebab':
        for (let chars of input){
          if ( chars === ' '){
            ansstr += '-'
          } else {
            ansstr += chars
          }
        }
      case 'title':
        for (let chars of input){
          if (ansstr === ''){
            ansstr += chars.toUpperCase()
          } else if (postwhite && chars !== ' '){
            ansstr += chars.toUpperCase()
            postwhite = false
          } else if ( chars === ' '){
            ansstr += chars
            postwhite = true
          } else {
            ansstr += chars
          }
        }
      case 'vowel':
        for (let chars of input){
          if (vowels.includes(chars)){
            ansstr += chars.toUpperCase()
          } else {
            ansstr += chars
          }
        }
      case 'consonant':
        for (let chars of input){
          if (!vowels.includes(chars)){
            ansstr += chars.toUpperCase()
          } else {
            ansstr += chars
          }
        }
      case 'upper':
        ansstr = ansstr.toUpperCase()
      case 'lower':
        ansstr = ansstr.toLowerCase()
      }
    }
  }

}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
