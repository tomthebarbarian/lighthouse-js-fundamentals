// Desc: carsPassing adds the time a speed that a car passes into an array

// carsPassing takes an array of objects(cars) and a number(speed) and adds an
// object with properties time and speed the cars array

// arrayOf obj num -> arrayOf obj
const carPassing = function (cars, speed) {
  // Your code in here ...
  cars.push({
    time:Date.now(),
    speed: speed
  })
  return cars
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

console.log(carPassing(cars, speed))

/*[{
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  },
  {
    time: 1568431216417,
    speed: 38
  }
]*/
