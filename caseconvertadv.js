//

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
      case 'snake':
      case 'kebab':
      case 'title':
      case 'vowel':
      case 'camel':
      case 'consonant':
      case 'upper':
      case 'lower':
                  
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
