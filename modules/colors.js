import Utils from './utils.js'

export default function Colors() {}

// (a,b,c...) => [a,b,c...]
Colors.createColorsArray = (...colors) => {
  return [...colors]
}

// [colors] => color
Colors.getRandomColorIn = (colors) => {
  return colors[Utils.getRandomInt(0, colors.length)]
}

Colors.test = () => {
  return 'colors!'
}
