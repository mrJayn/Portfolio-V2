import { useEffect, useState } from 'react'
import { motionValue, useSpring, useTransform } from 'framer-motion'

const cursorSpring = {
    type: 'spring',
    stiffness: 1000,
    damping: 90,
    mass: 0.1,
    restDelta: 0.01,
}

export default function useCursorPosition() {
    const [cursor, setCursor] = useState({ x: null, y: null })

    useEffect(() => {
        const updateXY = (e) => {
            setCursor({
                x: motionValue(e.clientX * 1),
                y: motionValue(e.clientY * 1),
            })
        }

        window.addEventListener('mousemove', updateXY)
        return () => window.removeEventListener('mousemove', updateXY)
    }, [])

    return {
        x: useSpring(cursor.x, cursorSpring),
        y: useSpring(cursor.y, cursorSpring),
    }
}
