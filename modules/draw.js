import Utils from './utils.js'
import Colors from './colors.js'

const randomPos = (width, height) => {
  const x = Utils.getRandomInt(0, width)
  const y = Utils.getRandomInt(0, height)
  return { x, y }
}

const drawRandomRect = (cv, ctx) => {
  const rPos1 = randomPos(cv.width, cv.height)
  const rPos2 = randomPos(cv.width, cv.height)

  const colors = ['#FFFFFF', '#000000']
  Colors.createLinearGradient(ctx, rPos1.x, rPos1.y, rPos2.x, rPos2.y, colors)
  //ctx.fillStyle = Colors.getRandomGreyscaleColor()

  const rPos = randomPos(cv.width, cv.height)
  ctx.fillRect(rPos.x, rPos.y, 50, 50)
}

//cv: canvas,  cx: context
const draw = (cv, ctx) => {
  //Background:
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, cv.width, cv.height)

  //Generate rects
  const itr = Utils.itr(90)
  itr.map(() => drawRandomRect(cv, ctx))
}

export { draw }
