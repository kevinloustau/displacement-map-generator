import Utils from './modules/utils.js'
import Draw from './modules/draw.js'

let cv = document.querySelector('canvas')
let ctx = cv.getContext('2d')

const settings = {
  iterations: 100,
  size: 10,
  shapes: {
    square: true,
    oval: false,
  },
}

//Slider - Size
let sliderSize = document.getElementById('slider-size')
sliderSize.value = settings.size
sliderSize.addEventListener('mouseup', (v) => {
  settings.size = parseInt(v.target.value)
  update()
})

//Slider - Iterations
let sliderIterations = document.getElementById('slider-iterations')
sliderIterations.value = settings.iterations
sliderIterations.addEventListener('mouseup', (v) => {
  settings.iterations = parseInt(v.target.value)
  update()
})

let btnGenerate = document.getElementById('btn-generate')
btnGenerate.addEventListener('click', () => update())

let btnExport = document.getElementById('btn-export')
btnExport.addEventListener('click', () => {
  const dataURL = cv.toDataURL('image/jpeg', 1.0)
  downloadImage(dataURL, 'displacementMap.jpg')
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
