import { useEffect, useState } from 'react'

export default function useViewport() {
    const [viewport, setViewport] = useState({ height: 0, width: 0 })

    useEffect(() => {
        const updateViewport = () =>
            setViewport({
                height: screen.height,
                width: screen.width,
            })
        updateViewport()
        window.addEventListener('resize', updateViewport)
        return () => window.removeEventListener('resize', updateViewport)
    }, [])

    return viewport
}
