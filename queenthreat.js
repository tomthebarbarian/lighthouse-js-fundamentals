

// function generateBoard takes in 2 arraysOf nums(whiteQueen, blackQueen) 
// with length 2 and returns an arrayOf arraysOf num representing a chessboard

// arrayOf num arrayOf num -> arrayOf arraysOf num
const generateBoard = (whiteQueen,blackQueen) => {
  let ansboard = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]
  ansboard[whiteQueen[0]][whiteQueen[1]] = 1
  ansboard[blackQueen[0]][blackQueen[1]] = 1
  return ansboard
}


// function queenThreat takes an arrayOf arraysOf num(generated board) representing
// the position of 2 queens and returns a boolean indicating if 2 queen pieces
// threaten each other. 
const queenThreat = (generatedBoard) =>{
  let queen1 = []
  let queen2 = []
  for (let elem = 0; elem < generatedBoard.length; elem++){
    let currow = generatedBoard[elem]
    for (let space = 0; space < currow.length; space++){
      //console.log(currow[space])
      if (currow[space] === 1){
        if (queen1.length > 1){
          queen2 = [elem, space]
          break
        } else {
          queen1 = [elem, space]
          continue
        }
      }
    }
    if (queen2.length > 1){
      break
    }
  }
  console.log(queen1)
  console.log(queen2)
  if (queen1[0] === queen2[0] || queen1[1] === queen2[1]){
    return true
  } else if ((queen1[0] - queen2[0]) **2 === (queen1[1] - queen2[1])**2){
    return true
  } else {
    return false
  }

}

let whiteQueen = [0, 4];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
//console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
