import { useLayoutEffect, useRef, useState } from 'react'

export function useDimensions() {
    const ref = useRef()
    const [dimensions, setDimensions] = useState({})

    useLayoutEffect(() => {
        setDimensions(ref.current.getBoundingClientRect().toJSON())
    }, [ref.current])

    return [ref, dimensions]
}
