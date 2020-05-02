import Utils from './utils.js'
import Colors from './colors.js'

const randomPos = (width, height) => {
  const x = Utils.getRandomInt(0, width)
  const y = Utils.getRandomInt(0, height)
  return { x, y }
}

const drawRandomRect = (cv, ctx, size, colors) => {
  ctx.save()
  const rPos = randomPos(cv.width, cv.height)
  Colors.createLinearGradient(ctx, rPos.x + Utils.getRandomInt(-size, size), rPos.y + Utils.getRandomInt(-size, size), rPos.x + Utils.getRandomInt(-size, size), rPos.y + Utils.getRandomInt(-size, size), colors)
  //ctx.fillStyle = Colors.getRandomGreyscaleColor()
  ctx.rotate((Utils.getRandomInt(0, 360) * Math.PI) / 180)
  ctx.fillRect(rPos.x, rPos.y, size, size)
  ctx.restore()
}

//const drawRandomArc = (cv, ctx, size, colors) => {}

//cv: canvas,  cx: context, itr: iterations
export default function Draw(cv, ctx, settings) {
  //Background:
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, cv.width, cv.height)

  //Generate rects
  const itrMappable = Utils.itr(settings.iterations)
  itrMappable.map(() => drawRandomRect(cv, ctx, settings.size, ['#FFFFFF', '#000000']))
}
