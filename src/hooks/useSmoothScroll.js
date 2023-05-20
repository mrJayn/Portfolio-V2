import { useState, useEffect, useCallback } from 'react'
import { useScroll, useSpring, useTransform } from 'framer-motion'
import { ssOffset } from '@config'

const springConfig = {
    stiffness: 500,
    damping: 90,
    mass: 0.5,
}

function useSmoothScroll(scrollRef, shouldAnimate = true) {
    const [[scrollHeight, pageHeight], setPageHeight] = useState([0, 0])

    const handleResize = useCallback(
        (height) => {
            if (height <= 0) return
            const scrollH = height + (shouldAnimate ? ssOffset : 0)

            document.body.style.height = scrollH + 'px'
            setPageHeight([scrollH, height])
        },
        [shouldAnimate]
    )

    // observe when browser is resizing
    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => handleResize(entry.contentRect.height))
        })

        scrollRef && resizeObserver.observe(scrollRef.current)
        return () => resizeObserver.disconnect()
    }, [scrollRef, handleResize])

    // Framer-Scroll Functions
    const { scrollY } = useScroll()
    const transform = useTransform(
        scrollY,
        [ssOffset, scrollHeight],
        [0, -pageHeight]
    )

    return useSpring(transform, springConfig)
}

export default useSmoothScroll
