// function whereCanIPark takes an array of arrays of strings(spots) and a
// string(vehicle) and returns the coordinats of an open parking spot.

// arrayOf arrayOf char str -> array of num or bool
const whereCanIPark = function (spots, vehicle) {
  // Code here!
  //upper means avail, lower means unavail.
  let coords = []
  let avail = []

  //determine elegible spots
  switch (vehicle){
  case 'regular':
    avail = ['R'];
    break;
  case 'small':
    avail = ['R','S'];
    break;
  case 'motorcycle':
    avail = ['R','S','M']
    break;
  }

  //Find open spots
  for (let y = 0; y < spots.length; y++){
    let currrow = spots[y]
    for (let x = 0; x < currrow.length; x++){
      if (avail.includes(currrow[x])){
        coords[0] = x;
        break;
      }
    }
    if (coords[0]) {
      coords[1] = y;
      break;
    }
  }
  //Check if there's coords
  if (!coords[0] && coords[0] !== 0){
    return false;
  } else {
    return coords;
  }
};

//TestCases
/*
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
*/