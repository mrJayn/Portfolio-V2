/** https://usehooks.com/useOnClickOutside/ **/

import { useEffect } from 'react'

export default function useOnClickOutside(ref, action, mediaMdOnly = false) {
    useEffect(() => {
        if (mediaMdOnly & (window.innerWidth <= 768)) return
        const listener = (e) => {
            if (!ref.current || ref.current.contains(e.target)) return

            action()
            document.querySelector('body').style.overflow = 'auto'
        }

        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)
        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [ref, action, mediaMdOnly])
}