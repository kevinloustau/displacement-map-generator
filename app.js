import Utils from './modules/utils.js'
import { draw } from './modules/draw.js'

let cv = document.querySelector('canvas')
let ctx = cv.getContext('2d')

let img = cv.toDataURL('image/png')

const exportMap = (img) => {
  document.write(`<img src=${img}/>`)
}

let itr = 0

let sliderSize = document.getElementById('slider-size')
sliderSize.addEventListener('mouseup', (v) => console.log(v.target.value))
let sliderIterations = document.getElementById('slider-iterations')
sliderIterations.addEventListener('mouseup', (v) => {
  itr = v.target.value
  update()
})

let btnGenerate = document.getElementById('btn-generate')
btnGenerate.addEventListener('click', () => draw(cv, ctx))

let btnExport = document.getElementById('btn-export')
btnExport.addEventListener('click', (img) => {
  exportMap(img)
  console.log('exported')
})

const update = () => {
  //draw(cv, ctx, itr)
}

draw(cv, ctx)
//update()
