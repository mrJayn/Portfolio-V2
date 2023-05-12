import { useEffect, useState } from 'react'
import { useScroll, useSpring, useTransform } from 'framer-motion'

const springConfig = {
    stiffness: 500,
    damping: 90,
    mass: 0.5,
}

function useSmoothScroll(scrollRef) {
    const [pageHeight, setPageHeight] = useState(0)

    // observe when browser is resizing
    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                const { height } = entry.contentRect
                if (height === 0) return

                document.body.style.height = height + 'px'
                setPageHeight(height)
            })
        })

        scrollRef && resizeObserver.observe(scrollRef.current)
        return () => resizeObserver.disconnect()
    }, [scrollRef, setPageHeight])

    const { scrollY } = useScroll()
    const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])

    return useSpring(transform, springConfig)
}

export default useSmoothScroll
