import Color from './modules/colors'

let canvas = document.querySelector('canvas')
let context = canvas.getContext('2d')

context.fillStyle = 'grey'
context.fillRect(10, 10, 100, 50)

console.log(Color.createColorsArray(1, 2, 3, 4, 5))
