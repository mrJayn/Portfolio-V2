import { useState, useEffect } from 'react'
/**
 * React Hook
 * @param {number} mediaWidth
 * @returns {boolean} Boolean value or if screen matches provided media query.
 */
const useMediaQuery = (mediaWidth) => {
    const [matches, setMatches] = useState(true)
    useEffect(() => {
        const checkWidth = () => {
            setMatches(window.innerWidth >= mediaWidth)
        }
        checkWidth()
        window.addEventListener('resize', checkWidth)
        return () => window.removeEventListener('resize', checkWidth)
    }, [matches, mediaWidth])
    return matches
}

export default useMediaQuery
