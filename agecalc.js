const ageCalculator = (name, yearOfBirth, currentYear) => {
  const age = currentYear - yearOfBirth
  let ansstr = `${name} is ${age} years old.`
  return ansstr
}

console.log(ageCalculator('Suzie', 1983,2015))