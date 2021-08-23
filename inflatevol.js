// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // Code here! 
  return (4 / 3) * (radius ** 3) * PI
}


console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  return (height / 3) * (radius ** 2) * PI
}


console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  return height * width * depth
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!
  let total = 0
  for (let elem of solids){
    console.log(elem.type)
    switch (elem.type){
    case 'sphere':
      total += sphereVolume(elem.radius);
      continue;
    case 'cone':
      console.log('incone')
      total += coneVolume(elem.radius, elem.height);
      continue;
    case 'prism':
      total += prismVolume(elem.height, elem.width, elem.depth);
      
    }
  }
  return total
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]


console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);