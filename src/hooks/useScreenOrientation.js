import { useState, useEffect } from 'react'

const useScreenOrientation = () => {
    const [orientation, setOrientation] = useState()

    useEffect(() => {
        const getOrientation = () => {
            setOrientation(window.screen?.orientation?.type)
        }
        getOrientation()
        window.addEventListener('orientationchange', getOrientation)
        return () => {
            window.removeEventListener('orientationchange', getOrientation)
        }
    }, [])

    return orientation
}

export default useScreenOrientation
