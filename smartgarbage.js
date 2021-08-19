//smart garbage function, changes value in bins depending on trash string.
// smartGarbage take a string(trash) and an object(bins) and increaments the
// property of bins by 1 if trash === a bin property

// str binsobj -> binsobj
const smartGarbage = function (trash, bins) {
  // Your code in here ...
  switch (trash) {
  case 'recycling':
    bins.recycling++;
    break;
  case 'waste':
    bins.waste++;
    break;
  case 'compost':
    bins.compost++;
    break;
  }
  return bins
}