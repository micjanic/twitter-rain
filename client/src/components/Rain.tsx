import { FONT_SIZE } from './constants/Constants'

export default function Rain(ctx: CanvasRenderingContext2D, columns: number[]) {
  const w = document.body.offsetWidth;
  const h = document.body.offsetHeight;

  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#53db5e';
  ctx.font = `bold ${FONT_SIZE}pt monospace`;

  columns.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);

    const x = (ind * FONT_SIZE);

    ctx.fillText(text, x, y);

    if (y > 100 + Math.random() * 60000) columns[ind] = 0;
    else columns[ind] = y + FONT_SIZE;
  });
}