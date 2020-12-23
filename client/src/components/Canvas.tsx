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
  const contextRef = useRef<CanvasRenderingContext2D>(null);
  //const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined)

  const [columns, setColumns] = useState<number>();
  const [twitterMessages, setTwitterMessages] = useState([
    "The quick brown fox jumps over the lazy dog.",
    "Look out! There are llamas!",
    "No, really, don't get up.",
    "Howdy Ho Neightborino",
    "Every day - if walking through the shops count as working out."
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

    contextRef.current = ctx;
    setColumns(window.innerWidth / FONT_SIZE)
  }, [])

  useInterval(() => {
    //console.log('tick');
  }, 1000)

  return <canvas ref={canvasRef} height={height} width={width} />
}

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight
}

export default Canvas