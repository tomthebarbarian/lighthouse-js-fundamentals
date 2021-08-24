// function makeCase takes an input string (input) and a casestyle or an 
// array thereof and returns the input string modified to fulfill the 
// specificiations of the casestyle(s)

// str str/arrayOf str -> str
const makeCase = function(input, casetype) {
  // Put your solution here
  
  let postwhite = false
  let vowels = ['a','e','i','o','u']
  if (typeof casetype === 'string'){
    //make single strs a len 1 array.
    casetype = [casetype]
  }
  let prio1 = [camel, pascal, snake, kebab, title]
  let prio2 = [vowel, consonant]
  let prio3 = [upper, lower]
  let ordofop = {
    stage1:[],
    stage2:[],
    stage3:[]
  }
  // Determine ordofop
  if (casetype.length> 1){  
    for (let elem of casetype){
      if (prio1.includes(elem)){
        ordofop.stage1 = ordofop.stage1.concat(elem)
      } else if (prio2.includes(elem)){
        ordofop.stage2 = ordofop.stage2.concat(elem)
      } else if  (prio3.includes(elem)){
        ordofop.stage3 = ordofop.stage3.concat(elem)
      }
    }
  } 
  // make into ordered array
  const ordercase = ordofop.stage1(ordofop.stage2.concat(ordofop.stage3))

  // Actually doing
  let firststage = ''
  //Prio 1
  for (let elem of ordofop.stage1){
    switch(elem){
    case 'camel':
      for (let chars of input){
        if (postwhite && chars !== ' '){
          firststage += chars.toUpperCase()
          postwhite = false
        } else if ( chars === ' '){
          postwhite = true
        } else {
          firststage += chars
        }
      }
    case 'pascal':
      for (let chars of input){
        if (firststage === ''){
          firststage += chars.toUpperCase()
        } else if (postwhite && chars !== ' '){
          firststage += chars.toUpperCase()
          postwhite = false
        } else if ( chars === ' '){
          postwhite = true
        } else {
          firststage += chars
        }
      }
    case 'snake':
      for (let chars of input){
        if ( chars === ' '){
          firststage += '_'
        } else {
          firststage += chars
        }
      }
    case 'kebab':
      for (let chars of input){
        if ( chars === ' '){
          firststage += '-'
        } else {
          firststage += chars
        }
      }
    case 'title':
      for (let chars of input){
        if (firststage === ''){
          firststage += chars.toUpperCase()
        } else if (postwhite && chars !== ' '){
          ansstr += chars.toUpperCase()
          postwhite = false
        } else if ( chars === ' '){
          firststage += chars
          postwhite = true
        } else {
          firststage += chars
        }
      }
    }
  } 

    //prio 2
    for (let elem of ordofop.stage2){
      switch(elem){
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
      }
    }
    //prio3
    for (let elem of ordofop.stage2){
      switch(elem){
      case 'upper':
        ansstr = ansstr.toUpperCase()
      case 'lower':
        ansstr = ansstr.toLowerCase()
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
