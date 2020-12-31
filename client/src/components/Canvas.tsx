import React, { useRef, useState, useEffect } from 'react'
import { FONT_SIZE, SPEED } from './constants/Constants'

import Rain from './Rain'

import { useInterval } from './hooks/useInterval'

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D>(null);
  //const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined)

  const [columns, setColumns] = useState<number[]>();
  const [twitterMessages, setTwitterMessages] = useState([
    "The quick brown fox jumps over the lazy dog.",
    "Look out! There are llamas!",
    "No, really, don't get up.",
    "Howdy Ho Neighborino",
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
    const w = canvas.width = window.innerWidth;
    const h = canvas.height = window.innerHeight;

    canvas.width = w * 2;
    canvas.height = h * 2;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(2, 2);
    ctx.fillStyle = '#0001'
    ctx.fillRect(0, 0, w, h);
    ctxRef.current = ctx;

    setColumns(Array(Math.floor(w / FONT_SIZE) + 1).fill(0));
  }, [])


  useInterval(() => {
    Rain(ctxRef.current, columns)
  }, SPEED)

  return <canvas ref={canvasRef} />
}

export default Canvas