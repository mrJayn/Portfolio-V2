import '../styles/global.css'
import { Footer, Navbar, Loader, Progress } from '@components'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useProgressBar from 'src/hooks/useProgressBar'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const basePath = router.pathname === '/'
    const [loader, setLoader] = useState(basePath)

    const progressBar = useProgressBar((state) => state.isAnimating)
    const setProgressBar = useProgressBar((state) => state.setIsAnimating)

    useEffect(() => {
        const pbStart = () => {
            setProgressBar(true)
        }
        const pbEnd = () => {
            setProgressBar(false)
        }
        router.events.on('routeChangeStart', pbStart)
        router.events.on('routeChangeComplete', pbEnd)
        router.events.on('routeChangeError', pbEnd)

        return () => {
            router.events.off('routeChangeStart', pbStart)
            router.events.off('routeChangeComplete', pbEnd)
            router.events.off('routeChangeError', pbEnd)
        }
    }, [router, setProgressBar])

    return (
        <>
            {loader && basePath ? (
                <Loader finishLoading={() => setLoader(false)} />
            ) : (
                <>
                    <Progress isAnimating={progressBar} />
                    <>
                        <Navbar isLoading={loader} basePath={basePath} />
                        <Component {...pageProps} />;
                        <Footer />
                    </>
                </>
            )}
        </>
    )
}

export default MyApp
