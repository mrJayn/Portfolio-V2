import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const useIsRouting = (disableStateAfter = false) => {
    const router = useRouter()
    const [isRouting, setIsRouting] = useState(false)

    useEffect(() => {
        const enableRouting = () => setIsRouting(true)

        const disableRouting = () => {
            if (!disableStateAfter) return
            let timeout = setTimeout(() => setIsRouting(false), 1500)
            return () => clearTimeout(timeout)
        }

        router.events.on('routeChangeStart', enableRouting)
        router.events.on('routeChangeError', enableRouting)
        router.events.on('routeChangeComplete', disableRouting)

        return () => {
            router.events.off('routeChangeStart', enableRouting)
            router.events.off('routeChangeError', enableRouting)
            router.events.off('routeChangeComplete', disableRouting)
        }
    }, [router.events, disableStateAfter])
    return isRouting
}

export default useIsRouting
