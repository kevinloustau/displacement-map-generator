import Utils from './modules/utils.js'
import Draw from './modules/draw.js'
import State from './State.js'

let cv = document.querySelector('canvas')
let ctx = cv.getContext('2d')

let shapeSelector = document.getElementById('selector-shape')
shapeSelector.addEventListener('change', (v) => {
  State.shape = v.target.value
  update(State.state)
})

let sliderSize = document.getElementById('slider-size')
sliderSize.value = settings.size
sliderSize.addEventListener('mouseup', (v) => {
  State.size = parseInt(v.target.value)
  update(State.state)
})

let sliderIterations = document.getElementById('slider-iterations')
sliderIterations.value = settings.iterations
sliderIterations.addEventListener('mouseup', (v) => {
  State.iterations = parseInt(v.target.value)
  update(State.state)
})

let btnGenerate = document.getElementById('btn-generate')
btnGenerate.addEventListener('click', () => update())

let sizeSelector = document.getElementById('selector-size')
sizeSelector.addEventListener('change', (v) => {
  let displaceCanvas = document.getElementById('canvas-displace')
  displaceCanvas.width = parseInt(v.target.value)
  displaceCanvas.height = parseInt(v.target.value)
  console.log(displaceCanvas.height)
  update(State.state)
})

let btnExport = document.getElementById('btn-export')
btnExport.addEventListener('click', () => {
  const dataURL = cv.toDataURL('image/jpeg', 0.5)
  downloadImage(dataURL, `DISPLACE_${settings.shape}_${sizeSelector.value}.jpg`)
})

const downloadImage = (data, filename = 'texture.jpg') => {
  var a = document.createElement('a')
  a.href = data
  a.download = filename
  document.body.appendChild(a)
  a.click()
}

const update = (settings) => {
  //console.log(State.State)
  Draw(cv, ctx, settings)
}

update(State.state)
