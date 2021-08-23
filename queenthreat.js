

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

const queenThreat = (generatedBoard) =>{
  let queen1 = []
  let queen2 = []

  for (let elem = 0; elem < generatedBoard.length; elem ++){
    for (let space = 0; space < elem.length; space ++){
      if (elem[space] === 1){
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
  if (queen1[0] === queen2[0] || queen1[1] === queen2[1]){
    return true
  } else if ((queen1[0] - queen2[0]) **2 === (queen1[1] - queen2[1])**2){
    return true
  } else {
    return false
  }

}

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
