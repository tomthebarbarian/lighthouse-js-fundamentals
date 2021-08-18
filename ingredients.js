const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let iter = 0;

while (iter < ingredients.length){
  console.log(ingredients[iter])
  iter++
}

for (i = 0; i< ingredients.length; i++){
  console.log(ingredients[i])
}

for (elem = ingredients.length-1; elem >= 0; elem--){
  console.log(ingredients[elem])
}