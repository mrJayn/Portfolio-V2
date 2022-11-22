import { useState, useEffect } from 'react'
const useScreenOrientation = () => {
    const [orientation, setOrientation] = useState(false)

    useEffect(() => {
        if ('orientation' in screen) {
            //Supported Browsers

            window.screen.orientation.onchange = ScreenOrientation = () => {
                const newOrientation = screen.orientation.type.includes(
                    'landscape'
                )
                    ? 'landscape'
                    : 'portrait'
                setOrientation(newOrientation)
            }
        } else {
            // Safari / IOS

            const potraitMediaQuery = window.matchMedia('(orientation:potrait)')
            const updateOrientation = (mediaQuery) => {
                setOrientation(mediaQuery.matches ? `potrait` : 'landscape')
            }
            updateOrientation(potraitMediaQuery)
            potraitMediaQuery.addEventListener('change', updateOrientation)

            return () =>
                potraitMediaQuery.removeEventListener(
                    'change',
                    updateOrientation
                )
        }
    }, [])
    return orientation
}
export default useScreenOrientation
