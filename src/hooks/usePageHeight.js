import { useState, useEffect, useLayoutEffect } from 'react'

const usePageHeight = (ref) => {
    const [pageHeight, setPageHeight] = useState(0)

    // observe when browser is resizing
    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) =>
            entries.forEach((entry) => setPageHeight(entry.contentRect.height))
        )
        ref && resizeObserver.observe(ref.current)
        return () => resizeObserver.disconnect()
    }, [ref])

    return pageHeight
}

export default usePageHeight
