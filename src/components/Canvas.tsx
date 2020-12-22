import React, { useRef, useState, useEffect } from 'react'

interface CanvasProps {
  width: number;
  height: number;
}

type Coordinate = {
  x: number;
  y: number;
}

const Canvas = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [digits, setDigits] = useState([])
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined)

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }
  })

  return <canvas ref={canvasRef} height={height} width={width} />
}

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight
}

export default Canvas