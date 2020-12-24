import React, { useRef, useState, useEffect } from 'react'
import { MAX_MESSAGES, FONT_SIZE, SPEED } from './constants/Constants'

import { useInterval } from './hooks/useInterval'

interface CanvasProps {
  width: number;
  height: number;
}
/*
type Coordinate = {
  x: number;
  y: number;
}
*/
const Canvas = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D>(null);
  //const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined)

  const [columns, setColumns] = useState<number[]>();
  const [twitterMessages, setTwitterMessages] = useState([
    "The quick brown fox jumps over the lazy dog.",
    "Look out! There are llamas!",
    "No, really, don't get up.",
    "Howdy Ho Neightborino",
    "Every day - if walking through the shops count as working out.",
    "It is a fair, even-handed, noble adjustment of things, that while there is infection in disease and sorrow, there is nothing in the world so irresistibly contagious as laughter and good humour.",
    "No space of regret can make amends for one lifes opportunity misused",
    "You may be an undigested bit of beef, a blot of mustard, a crumb of cheese, a fragment of underdone potato. There's more of gravy than of grave about you, whatever you are!"
  ]);


  useEffect(() => {
    if (!canvasRef.current) {
      return
    }

    const canvas = canvasRef.current;
    const w = canvas.width = document.body.offsetWidth;
    const h = canvas.height = document.body.offsetHeight;

    canvas.width = w * 2;
    canvas.height = h * 2;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(2, 2);
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, w, h);
    ctxRef.current = ctx;

    setColumns(Array(Math.floor(w / FONT_SIZE) + 1).fill(0));
  }, [])

  const rain = () => {
    const w = document.body.offsetWidth;
    const h = document.body.offsetHeight;

    //ctxRef.current.fillStyle = '#0001';
    //ctxRef.current.fillRect(0, 0, w, h);

    ctxRef.current.fillStyle = '#53db5e';
    ctxRef.current.font = `bold ${FONT_SIZE}pt monospace`;
    ctxRef.current.shadowBlur = 8;
    ctxRef.current.shadowColor = "green";

    columns.forEach((y, ind) => {
      const text = String.fromCharCode(Math.random() * 128);
      const x = (ind * FONT_SIZE);
      ctxRef.current.fillText(text, x, y);
      if (y > 100 + Math.random() * 10000) columns[ind] = 0;
      else columns[ind] = y + FONT_SIZE;
    });
  }

  const Column = () => {
    //update()
    //draw()
  }

  useInterval(() => {
    rain()
  }, SPEED)

  return <canvas ref={canvasRef} height={height} width={width} />
}

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight
}

export default Canvas