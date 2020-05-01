import Utils from './modules/utils.js'
import Colors from './modules/colors.js'
import { draw } from './modules/draw.js'

let cv = document.querySelector('canvas')
let ctx = cv.getContext('2d')

draw(cv, ctx)

let img = cv.toDataURL('image/png')

const exportMap = (img) => {
  document.write(`<img src=${img}/>`)
}

let btnGenerate = document.getElementById('btn-generate')
btnGenerate.addEventListener('click', () => draw(cv, ctx))

let btnExport = document.getElementById('btn-export')
btnExport.addEventListener('click', (img) => {
  exportMap(img)
  console.log('exported')
})

console.log(Colors.test())
