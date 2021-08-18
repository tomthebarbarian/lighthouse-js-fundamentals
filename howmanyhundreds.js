const howManyHundreds = (anum) => {
  return (anum - anum % 100) / 100
}

console.log(howManyHundreds(951613))