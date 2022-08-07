import { useState, useEffect } from 'react'
const useMediaQuery = () => {
    const [isMd, setIsMd] = useState(true)
    useEffect(() => {
        const checkWidth = () => {
            setIsMd(window.innerWidth > 767)
        }
        checkWidth()
        window.addEventListener('resize', checkWidth)
        return () => window.removeEventListener('resize', checkWidth)
    }, [isMd])
    return isMd
}

export default useMediaQuery
