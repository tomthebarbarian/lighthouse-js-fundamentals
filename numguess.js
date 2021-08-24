let prompt = require("prompt-sync")();

// code below (replace this example)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const randomnum = getRandomInt(100)
let runninglist = []
let answer = -50
do {
   answer = prompt("Guess a number from 0-100: ");
   answer = parseInt(answer,10)
  if (typeof answer === 'number'){
    if (runninglist.includes(answer)){
      console.log('Already Guessed!')
    } else {
      if (answer > randomnum){
        console.log("Too High!");
      } else if (answer < randomnum){
        console.log("Too Low!");
      }
      runninglist.push(answer)
    }
  } else {
    console.log("Not a number! Try again!");
  }
} while (answer !== randomnum)

console.log(`You got it! You took ${runninglist.length} attempts!`)
