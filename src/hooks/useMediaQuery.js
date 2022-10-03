import { useState, useEffect } from 'react'
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
