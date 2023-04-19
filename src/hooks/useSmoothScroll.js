import { useLayoutEffect, useState } from 'react'
import { useScroll, useSpring, useTransform } from 'framer-motion'

const springConfig = {
    type: 'spring',
    stiffness: 400,
    damping: 90,
    mass: 0.25,
    restDelta: 0.001,
}

function useSmoothScroll(scrollRef) {
    const [pageHeight, setPageHeight] = useState(0)
    const { scrollYProgress } = useScroll({
        offset: ['0 0', '1 0'],
    })
    const ySpring = useSpring(scrollYProgress, springConfig)

    // observe when browser is resizing
    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) =>
            entries.forEach((entry) => {
                setPageHeight(entry.contentRect.height)
            })
        )
        scrollRef && resizeObserver.observe(scrollRef.current)
        return () => resizeObserver.disconnect()
    }, [scrollRef])

    const y = useTransform(ySpring, [0, 1], [0, -pageHeight])

    return { y: y, pageHeight: pageHeight }
}

export default useSmoothScroll
