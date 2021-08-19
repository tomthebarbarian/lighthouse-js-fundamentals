// judgeVegetable return the owner of the best vegetable by metric
// judgeVegetable takes in an array of objects(vegetables) and a string(metric)
// and returns the sumitter property of the object with the higest property of metric

// arrayOf obj str -> str
const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let best = vegetables[0]
  for(const elem of vegetables) {
    if (elem[metric] > best[metric]){
      best = elem;
    }
  }
  return best.submitter
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))

//Old Man Franklin