import { useEffect, useState } from 'react'
import useMediaQuery from './useMediaQuery'
import { useReducedMotion } from 'framer-motion'

export default function useShouldAnimate() {
    const [shouldAnimate, setShouldAnimate] = useState(true)
    const isLg = useMediaQuery(1024)
    const shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        setShouldAnimate(!shouldReduceMotion && isLg)
    }, [isLg, shouldReduceMotion])

    return shouldAnimate
}
