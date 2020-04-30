// (a,b,c...) => [a,b,c...]
const createColorsArray = (...colors) => {
  return [...colors]
}

// [colors] => color
const getRandomColor = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)]
}

export { createColorsArray, getRandomColor }
