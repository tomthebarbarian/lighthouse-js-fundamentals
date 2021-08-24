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
  let prio1 = ['camel', 'pascal', 'snake', 'kebab', 'title']
  let prio2 = ['vowel', 'consonant']
  let prio3 = ['upper', 'lower']
  let ordofop = {
    stage1:[],
    stage2:[],
    stage3:[]
  }
  // Determine ordofop
  for (let elem of casetype){
    console.log(elem)
    if (prio1.includes(elem)){
      ordofop.stage1 = ordofop.stage1.concat(elem)
    } else if (prio2.includes(elem)){
      ordofop.stage2 = ordofop.stage2.concat(elem)
    } else if  (prio3.includes(elem)){
      ordofop.stage3 = ordofop.stage3.concat(elem)
    }
  }
  

  // Actually doing
  let firststage = ''
  //Prio 1
  console.log(ordofop.stage1)
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
      break;
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
      break;
    case 'kebab':
      for (let chars of input){
        if ( chars === ' '){
          firststage += '-'
        } else {
          firststage += chars
        }
      }
      break;
    case 'title':
      for (let chars of input){
        if (firststage === ''){
          firststage += chars.toUpperCase()
        } else if (postwhite && chars !== ' '){
          firststage += chars.toUpperCase()
          postwhite = false
        } else if ( chars === ' '){
          firststage += chars
          postwhite = true
        } else {
          firststage += chars
        }
      }
      break;
    }
  } 

    //prio 2
    let secondstage = ''
    if (firststage === '') {
      firststage = input
    }
    for (let elem of ordofop.stage2){
      switch(elem){
      case 'vowel':
        for (let chars of firststage){
          if (vowels.includes(chars)){
            secondstage += chars.toUpperCase()
          } else {
            secondstage += chars
          }
        }
        break;
      case 'consonant':
        for (let chars of firststage){
          if (!vowels.includes(chars)){
            secondstage += chars.toUpperCase()
          } else {
            secondstage += chars
          }
        }
      }
      break;
    }
    //prio3 stage 3
    if (secondstage === '') {
      thirdstage = firststage || input
    }
    for (let elem of ordofop.stage3){
      switch(elem){
      case 'upper':
        thirdstage = thirdstage.toUpperCase()
        break;
      case 'lower':
        thirdstage = thirdstage.toLowerCase()
        break;
      }
    }
    return thirdstage
}

console.log(makeCase("this is a string", "camel"));
//console.log(makeCase("this is a string", "pascal"));
//console.log(makeCase("this is a string", "snake"));
//console.log(makeCase("this is a string", "kebab"));
//console.log(makeCase("this is a string", "title"));
//console.log(makeCase("this is a string", "vowel"));
//console.log(makeCase("this is a string", "consonant"));
//console.log(makeCase("this is a string", ["upper", "snake"]));
