export default function Column(ctx, data) {
  let data = new Columns()
  data.draw(ctx)
}

class Columns {
  constructor(x, y) {
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.fillStyle = 'red'
  }
}
