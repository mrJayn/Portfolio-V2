import { useEffect } from 'react'
import { useAnimate } from 'framer-motion'

const fadeInTransition = {
    opacity: { duration: 0.3, ease: 'easeIn' },
    zIndex: { delay: 0.3, duration: 0 },
}

export default function ResizeCover() {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        var resizeTimeout

        const fadeOut = () => {
            animate(scope.current, { opacity: 0, zIndex: -1 }, fadeInTransition)
        }

        const setCover = () => {
            clearTimeout(resizeTimeout)
            animate(scope.current, { opacity: 1, zIndex: 9999 }, { duration: 0 })
            resizeTimeout = setTimeout(() => fadeOut(), 400)
        }

        const resizeObserver = new ResizeObserver(setCover)
        scope && resizeObserver.observe(scope.current)
        return () => resizeObserver.disconnect()
    }, [scope, animate])

    return (
        <div
            ref={scope}
            className="fixed left-0 top-0 -z-10 h-screen w-screen bg-black opacity-0"
            style={{ height: '100lvh', width: '100lvw' }}
        />
    )
}
