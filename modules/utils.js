export default function Utils() {}

// create an Empty array, to use as an iterator
Utils.itr = (n) => {
  return [...Array(n)]
}
//  (min, max) => Float
Utils.getRandomFloat = (min, max) => {
  return Math.random() * (max - min) + min
}

//  (min, max) => Int
Utils.getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//  label => value => log(label: value )
Utils.trace = (label) => (value) => {
  console.log(`${label}: ${value}`)
  return value
}

//  Pipe function
Utils.pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x)
//Usage= => const h = pipe(g, trace('after g'), f, trace('after f'))
