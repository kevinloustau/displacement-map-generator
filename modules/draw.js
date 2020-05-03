import Utils from './utils.js'
import Colors from './colors.js'

const drawRandomRect = (cv, ctx, size, colors) => {
  ctx.save()
  const rPos = Utils.randomPos(cv.width, cv.height)
  Colors.createLinearGradient(ctx, rPos.x + Utils.getRandomInt(-size, size), rPos.y + Utils.getRandomInt(-size, size), rPos.x + Utils.getRandomInt(-size, size), rPos.y + Utils.getRandomInt(-size, size), colors, false)
  ctx.rotate((Utils.getRandomInt(0, 360) * Math.PI) / 180)
  ctx.fillRect(rPos.x, rPos.y, size, size)
  ctx.restore()
}

const drawRandomArc = (cv, ctx, size, colors) => {
  ctx.save()
  ctx.beginPath()
  const rPos = Utils.randomPos(cv.width, cv.height)
  Colors.createLinearGradient(ctx, rPos.x + Utils.getRandomInt(-size, size), rPos.y + Utils.getRandomInt(-size, size), rPos.x + Utils.getRandomInt(-size, size), rPos.y + Utils.getRandomInt(-size, size), colors, true)
  ctx.arc(rPos.x + Utils.getRandomInt(-size, size), rPos.y + Utils.getRandomInt(-size, size), size, Utils.getRandomFloat(0, 1.5) * Math.PI, Utils.getRandomFloat(0, 1.5) * Math.PI)
  ctx.lineWidth = size * 0.1
  ctx.stroke()
  ctx.restore()
}

const drawRandomLine = (cv, ctx, size, colors) => {
  ctx.save()
  const rPos = Utils.randomPos(cv.width, cv.height)
  Colors.createLinearGradient(ctx, rPos.x + Utils.getRandomInt(-size, size), rPos.y + Utils.getRandomInt(-size, size), rPos.x + Utils.getRandomInt(-size, size), rPos.y + Utils.getRandomInt(-size, size), colors, false)
  ctx.rotate((Utils.getRandomInt(0, 360) * Math.PI) / 180)
  ctx.fillRect(rPos.x, rPos.y, size, size * 0.1)
  ctx.restore()
}

const drawFunctions = {
  square: drawRandomRect,
  arc: drawRandomArc,
  line: drawRandomLine,
}

//cv: canvas,  cx: context, itr: iterations
export default function Draw(cv, ctx, settings) {
  ctx.fillStyle = 'black' //draw black background :
  ctx.fillRect(0, 0, cv.width, cv.height)

  const selectedFunc = drawFunctions[settings.shape]

  const itrMappable = Utils.itr(settings.iterations) //Generate empty array amount
  itrMappable.map(() => selectedFunc(cv, ctx, settings.size, ['#FFFFFF', '#000000']))
}
