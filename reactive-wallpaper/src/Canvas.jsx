import React, { useRef, useEffect, useState } from 'react'

const Canvas = props => {

    const canvasRef = useRef(null)
    const [x, setX] = useState()
    const [y, setY] = useState()
    const [dir, setDir] = useState(false) // false is left true is right'
    let img = new Image();
    img.src = 'sprite-greenS-blueP-rightF.png';

    const draw = (ctx, frameCount) => {
        //ctx.fillStyle = '#a0a6a0'
        //ctx.beginPath()
        //ctx.arc(x, y, 20, 0, 2 * Math.PI)
        //ctx.fill()
            ctx.drawImage(img, 20, 20);
    }
    

    useEffect(() => {
        const update = (e) => {
            if (e.x < x) {
                setDir(false);
            } else if (e.x > x) {
                setDir(true);
            }
            setX(e.x)
            setY(e.y)
            console.log(dir);
        }
        window.addEventListener('mousemove', update)
        window.addEventListener('touchmove', update)
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        let frameCount = 0
        let animationFrameId
        const render = () => {
            frameCount++
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        setInterval(render(), 1);

        return () => {
            window.cancelAnimationFrame(animationFrameId)
            window.removeEventListener('mousemove', update)
            window.removeEventListener('touchmove', update)
        }
    }, [draw, setX, setY])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas;