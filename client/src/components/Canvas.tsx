import React, { useRef, useEffect } from 'react'

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
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contextRef = useRef<CanvasRenderingContext2D>(null)
  //const [digits, setDigits] = useState([])
  //const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined)

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.fillStyle = "#FF0000";
    context.fillRect(20, 20, 150, 100);
    contextRef.current = context;

  })

  return <canvas ref={canvasRef} height={height} width={width} />
}

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight
}

export default Canvas