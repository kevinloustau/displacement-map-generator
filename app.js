import { createColorsArray, getRandomColor } from './modules/colors.js'
import { draw } from './modules/draw.js'

let canvas = document.querySelector('canvas')
let cx = canvas.getContext('2d')
draw(cx)

let img = canvas.toDataURL('image/png')

const generateMap = () => console.log('generate')
const exportMap = (img) => {
  document.write(`<img src=${img}/>`)
}

let btnGenerate = document.getElementById('btn-generate')
btnGenerate.addEventListener('click', generateMap)

let btnExport = document.getElementById('btn-export')
btnExport.addEventListener('click', (img) => {
  exportMap(img)
  console.log('exported')
})
