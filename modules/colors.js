// (a,c,b,d...) => [colors]
export const createColorsArray = (...colors) => {
  return [...color]
}

// [colors] => color
export const getRandomColor = (colors) => {
  return colors[Math.random(0, colors.length)]
}
