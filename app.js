import Utils from './modules/utils.js'
import Draw from './modules/draw.js'

let cv = document.querySelector('canvas')
let ctx = cv.getContext('2d')

let settings = {
  iterations: 100,
  size: 10,
  shape: 'square',
}

let shapeSelector = document.getElementById('selector-shape')
shapeSelector.addEventListener('change', (v) => {
  settings = { ...settings, shape: v.target.value }
  update()
})

let sliderSize = document.getElementById('slider-size')
sliderSize.value = settings.size
sliderSize.addEventListener('mouseup', (v) => {
  settings = { ...settings, size: parseInt(v.target.value) }
  update()
})

let sliderIterations = document.getElementById('slider-iterations')
sliderIterations.value = settings.iterations
sliderIterations.addEventListener('mouseup', (v) => {
  settings = { ...settings, iterations: parseInt(v.target.value) }
  update()
})

let btnGenerate = document.getElementById('btn-generate')
btnGenerate.addEventListener('click', () => update())

let sizeSelector = document.getElementById('selector-size')
sizeSelector.addEventListener('change', (v) => {
  let displaceCanvas = document.getElementById('canvas-displace')
  displaceCanvas.width = parseInt(v.target.value)
  displaceCanvas.height = parseInt(v.target.value)
  console.log(displaceCanvas.height)
  update()
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

const update = () => {
  Draw(cv, ctx, settings)
  //console.log(settings)
}

update()
