import React, { useRef, useEffect, useState } from 'react'

const Canvas = props => {

    const canvasRef = useRef(null)
    const [x, setX] = useState()
    const [y, setY] = useState()

    const draw = (ctx, frameCount) => {
        ctx.fillStyle = '#a0a6a0'
        ctx.beginPath()
        ctx.arc(x, y, 20, 0, 2 * Math.PI)
        ctx.fill()
    }

    useEffect(() => {
        const update = (e) => {
            setX(e.x)
            setY(e.y)
        }
        window.addEventListener('mousemove', update)
        window.addEventListener('touchmove', update)
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        let frameCount = 0
        let animationFrameId

        //Our draw came here
        const render = () => {
            frameCount++
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
            window.removeEventListener('mousemove', update)
            window.removeEventListener('touchmove', update)
        }
    }, [draw, setX, setY])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas;