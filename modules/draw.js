import Utils from './utils.js'

const randomPos = (width, height) => {
  const x = Utils.getRandomInt(0, width)
  const y = Utils.getRandomInt(0, height)
  return { x, y }
}

const drawRandomRect = (cv, ctx) => {
  ctx.fillStyle = 'grey'
  const rPos = randomPos(cv.width, cv.height)
  ctx.fillRect(rPos.x, rPos.y, 50, 50)
  console.log(`rect at : ${rPos.x}, ${rPos.y}`)
}

//cv: canvas,  cx: context
const draw = (cv, ctx) => {
  //Fill background:
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, cv.width, cv.height)

  drawRandomRect(cv, ctx)
  drawRandomRect(cv, ctx)
  drawRandomRect(cv, ctx)
  drawRandomRect(cv, ctx)
  drawRandomRect(cv, ctx)

  //const nbrOfRect = Utils.itr(50)
  //nbrOfRect.map(drawRandomRect(cv, ctx))
}

/* diplacement map: gray level color:
hsl(hue, saturation, lightness)
hsl(0,0,100)
*/

export { draw }
