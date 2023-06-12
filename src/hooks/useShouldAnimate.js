import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function useShouldAnimate() {
    const [shouldAnimate, setShouldAnimate] = useState(true)
    const prefersReducedMotion = useReducedMotion()
    const trackPadLock = useRef([])

    useEffect(() => {
        if (prefersReducedMotion) {
            setShouldAnimate(false)
            return
        }

        const wheel = (e) => {
            var isTouchPad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0
            if (isTouchPad) {
                trackPadLock.current = Array(3)
            } else if (trackPadLock.current.length > 0) {
                trackPadLock.current.pop()
            }
            setShouldAnimate(!isTouchPad && trackPadLock.current.length === 0)
        }

        window.addEventListener('touchstart', () => setShouldAnimate(false))
        window.addEventListener('wheel', wheel)

        return () => {
            window.removeEventListener('touchstart', () => setShouldAnimate(false))
            window.removeEventListener('wheel', wheel)
        }
    }, [prefersReducedMotion])

    return shouldAnimate
}
