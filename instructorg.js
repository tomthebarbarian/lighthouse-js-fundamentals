// organizeInstructors takes an array of instructor objects and returns
// an object with instructor names grouped by their course property

// arrayOf obj -> arrayOf obj

const organizeInstructors = function(instructors) {
  // Put your solution here
  let ansarray = {}
  for (let elem of instructors){
    let taughtcourse = elem['course']
    let instrname = elem['name']
    if (ansarray[taughtcourse] !== undefined){
      ansarray[taughtcourse] = ansarray[taughtcourse].concat([instrname])
    } else {
      ansarray[taughtcourse] = [instrname]
    }
  }
  return ansarray
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
