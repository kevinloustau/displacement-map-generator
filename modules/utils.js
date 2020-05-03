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

Utils.randomPos = (width, height) => {
  const x = Utils.getRandomInt(0, width)
  const y = Utils.getRandomInt(0, height)
  return { x, y }
}
