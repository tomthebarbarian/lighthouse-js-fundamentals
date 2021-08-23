// The function chooseRecipe, returns the names of recipes that 
// include 1 ingredient from bakeryA and 1 ingredient from bakeryB
//

// arrayOf str arrayOf str arrayOf recipie -> str

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  for (let elem of recipes){
    const ingredient1 = elem.ingredients[0]
    const ingredient2 = elem.ingredients[1]

    if (bakeryA.includes(ingredient1)){
      if (bakeryB.includes(ingredient2)){
        return elem.name
      }
    } else if (bakeryB.includes(ingredient1)){
      if (bakeryA.includes(ingredient2)){
        return elem.name
      }
    } else {
      continue;
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
