import React, { useRef, useEffect } from 'react'
import displayPlanet from '../helpers/displayPlanet'

const Canvas = props => {
  
  const { planet, width, ...rest } = props
  console.log(planet, width)
  const canvasRef = useRef(null)
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    displayPlanet(planet, context)
  }, [])
  
  return <canvas id={planet} ref={canvasRef} {...rest} width={width} height={width} />
}

export default Canvas