// function blocksAway takes an array of str and num (directions)
// and returns an object with east and north properties.

// arrayOf str/num -> obj

const blocksAway = function(directions) {
  // Put your solution here
  let curloc = {east: 0, north: 0}
      // which value to change
      let value = ''
      // direction of change
      let dir = 1
  for (let elem of directions){
    // if elem is left or right
    if (typeof elem === 'string'){
      if (value === '') {
        if (elem === 'left'){
          value = 'north'
        } else {
          value = 'east'
        }
      } else if (value === 'north'){
        value = 'east'
        if (elem === 'left'){
          dir *= -1
        }
      } else if (value === 'east'){
        value = 'north'
        if (elem === 'right'){
          dir *= -1
        }
      }
    //if elem is num
    } else {
        curloc[value]  += elem * dir
    }
  }
  return curloc
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

