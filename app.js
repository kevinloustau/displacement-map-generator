import { createColorsArray, getRandomColor } from './modules/colors.js'

let canvas = document.querySelector('canvas')
let context = canvas.getContext('2d')

context.fillStyle = 'grey'
context.fillRect(10, 10, 100, 50)
