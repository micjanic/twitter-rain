export default function Column(ctx, data) {
  let column = new Column()
  column.draw(ctx)
}

class Column {
  constructor(x, y) {
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.fillStyle = 'red'
  }
}
