import Utils from './utils.js'

export default function Colors() {}

// Convertion functions:
Colors.RGBToHex = (r, g, b) => {
  r = r.toString(16)
  g = g.toString(16)
  b = b.toString(16)
  if (r.length == 1) r = '0' + r
  if (g.length == 1) g = '0' + g
  if (b.length == 1) b = '0' + b
  return '#' + r + g + b
}

Colors.RGBAToHex = (r, g, b, a) => {
  r = r.toString(16)
  g = g.toString(16)
  b = b.toString(16)
  a = Math.round(a * 255).toString(16)
  if (r.length == 1) r = '0' + r
  if (g.length == 1) g = '0' + g
  if (b.length == 1) b = '0' + b
  if (a.length == 1) a = '0' + a
  return '#' + r + g + b + a
}

Colors.RGBToHSL = (r, g, b) => {
  r /= 255
  g /= 255
  b /= 255

  let cmin = Math.min(r, g, b)
  let cmax = Math.max(r, g, b)
  let delta = cmax - cmin
  let h = 0
  let s = 0
  let l = 0

  if (delta == 0) h = 0
  else if (cmax == r) h = ((g - b) / delta) % 6
  else if (cmax == g) h = (b - r) / delta + 2
  else h = (r - g) / delta + 4

  h = Math.round(h * 60)

  if (h < 0) h += 360
  l = (cmax + cmin) / 2
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  s = +(s * 100).toFixed(1)
  l = +(l * 100).toFixed(1)

  return 'hsl(' + h + ',' + s + '%,' + l + '%)'
}

Colors.HSLToRGB = (h, s, l) => {
  s /= 100
  l /= 100
  let c = (1 - Math.abs(2 * l - 1)) * s
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  let m = l - c / 2
  let r = 0
  let g = 0
  let b = 0

  if (0 <= h && h < 60) {
    r = c
    g = x
    b = 0
  } else if (60 <= h && h < 120) {
    r = x
    g = c
    b = 0
  } else if (120 <= h && h < 180) {
    r = 0
    g = c
    b = x
  } else if (180 <= h && h < 240) {
    r = 0
    g = x
    b = c
  } else if (240 <= h && h < 300) {
    r = x
    g = 0
    b = c
  } else if (300 <= h && h < 360) {
    r = c
    g = 0
    b = x
  }

  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)

  return 'rgb(' + r + ',' + g + ',' + b + ')'
}

// (a,b,c...) => [a,b,c...]
Colors.createColorsArray = (...colors) => {
  return [...colors]
}

// [colors] => color
Colors.getRandomColorIn = (colors) => {
  return colors[Utils.getRandomInt(0, colors.length)]
}

Colors.getRandomGreyscaleColor = () => {
  return Colors.HSLToRGB(0, 0, Utils.getRandomInt(0, 100))
}

Colors.createLinearGradient = (ctx, x0, y0, x1, y1, colors, isStroke) => {
  let gradiant = ctx.createLinearGradient(x0, y0, x1, y1)
  colors.map((color, index) => {
    gradiant.addColorStop(index, color)
  })
  isStroke ? (ctx.strokeStyle = gradiant) : (ctx.fillStyle = gradiant)
}

// TODO
Colors.createRadialGradient = () => {}
