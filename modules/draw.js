const draw = (cx) => {
  cx.fillStyle = 'grey'
  cx.fillRect(10, 10, 100, 50)

  cx.beginPath()
  for (let y = 10; y < 100; y += 10) {
    cx.moveTo(10, y)
    cx.lineTo(90, y)
  }
  cx.stroke()
}

/* diplacement map: gray level color:
hsl(hue, saturation, lightness)
hsl(0,0,100)
*/

export { draw }
