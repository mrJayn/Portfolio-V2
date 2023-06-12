import { useEffect } from 'react'
import { useAnimate } from 'framer-motion'

export default function ResizeCover() {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        var resizeTimeout

        const fadeOut = () => {
            animate(
                scope.current,
                { opacity: 0, zIndex: -1 },
                {
                    opacity: { duration: 0.3, ease: 'easeIn' },
                    zIndex: { delay: 0.3, duration: 0 },
                }
            )
        }

        const enableCover = () => {
            clearTimeout(resizeTimeout)
            animate(scope.current, { opacity: 1, zIndex: 9999 }, { duration: 0 })
            resizeTimeout = setTimeout(() => fadeOut(), 400)
        }

        window.addEventListener('resize', enableCover)
        return () => window.removeEventListener('resize', enableCover)
    }, [animate, scope])

    return <div ref={scope} className="fixed left-0 top-0 -z-10 h-screen w-screen bg-black/0 opacity-0" />
}
