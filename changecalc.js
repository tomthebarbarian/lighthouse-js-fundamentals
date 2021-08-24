// function calculateChange takes 2 numbers (total, cash) and returns the 
// remainder of cash / total as an object with the composite 
// monetary denominations and quantity thereof.

// num num -> obj

const calculateChange = function(total, cash) {
  // Your code here
  //Works because it's an ordered object
  const denominations = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny:1
  }
  let remainchange = cash-total;
  let ansobj = {}
  for (let elem of Object.keys(denominations)){
    let numdiv = Math.floor(remainchange/denominations[elem])
    if (numdiv > 0){
      ansobj[elem] = numdiv
      remainchange = remainchange % denominations[elem] 
    }
  }
  return ansobj
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));