// function squareCode takes an input string(message) and outputs a 
// modified string that is encoded  using the square code method

// str -> 

const squareCode = function(message) {
  // Put your solution here
  let outputstr = ''

  let rmwhtspce

  rmwhtspce = message.split(' ')

  let workstr = ''

  for (let elem of rmwhtspce){
    workstr += elem
  }
  console.log(workstr)

  let rowlen = (Math.ceil(Math.sqrt(workstr.length)))
  console.log(rowlen)

  let numrows = Math.ceil(workstr.length / rowlen)
  //remainder

  // the coded jumps
  // if 3, should be (0,3,6)
  let jump = []
  for (let i = 0; i < numrows; i++){
    jump[i] = i * rowlen
  }
  //console.log(jump)
  for (let i = 0; i < rowlen; i++){
    for (let elem of jump){
      if (i+elem === workstr.length){
        return outputstr
      }
      outputstr += workstr[i+elem]
      //console.log(workstr[i+elem])
    }
    outputstr += ' '
  }
  return outputstr
};

//console.log(squareCode("chill out"));
//console.log(squareCode("feed the dog"));
//console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));


