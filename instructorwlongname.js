// instructorWithLongestName takes an array of objects(instructor) and returns the 
// the object with the longest name property

// arrayOf obj -> obj

const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let ans = {name: ''}
  for (let elem of instructors){
    if (elem.name.length > ans.name.length){
      ans = elem
    }
  }
  return ans
};

//Test cases
/*console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));*/
