import { useEffect, useState } from 'react'
import { useScroll, useSpring, useTransform } from 'framer-motion'

const springConfig = {
    stiffness: 700,
    damping: 90,
    mass: 1,
}

function useSmoothScroll(scrollRef) {
    const [[pageHeight, scrollHeight], setPageHeight] = useState([0, 0])

    // observe when browser is resizing
    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                const { height } = entry.contentRect
                if (height === 0) return

                let pageH = height * (screen.width < 1024 ? 1 : 1)
                let scrollH = height

                document.body.style.height = pageH + 'px'
                setPageHeight([pageH, scrollH])
            })
        })

        scrollRef && resizeObserver.observe(scrollRef.current)
        return () => resizeObserver.disconnect()
    }, [scrollRef, setPageHeight])

    const { scrollY } = useScroll()
    const transform = useTransform(scrollY, [0, pageHeight], [0, -scrollHeight])

    return useSpring(transform, springConfig)
}

export default useSmoothScroll
