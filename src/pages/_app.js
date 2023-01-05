import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { ToastContainer } from 'react-toastify'

import { Navbar, Loader } from '@components'
import { useIsRouting, useMediaQuery, useScreenOrientation } from '@hooks'

import '../styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import { index2id } from '@utils'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const isHome = router.pathname === '/'
    const url = `https://mikejayne.com/Portfolio${router.pathname}`

    const [isLoading, setIsLoading] = useState(isHome)
    const [activeSection, setSection] = useState(0)
    const [isSm, isMd, isLg] = useMediaQuery(414, 768, 1024)
    // const isRouting = useIsRouting(true)
    const [isRouting, setIsRouting] = useState(false)
    useEffect(() => {
        router.events.on('routeChangeStart', () => setIsRouting(true))
        router.events.on('routeChangeError', () => setIsRouting(true))
        return () => {
            router.events.off('routeChangeStart', () => setIsRouting(true))
            router.events.off('routeChangeError', () => setIsRouting(true))
        }
    }, [router.events])

    // Page Properties
    pageProps = {
        isHome: isHome,
        isFirstLoad: useRef(true),
        isRouting: isRouting,
        setIsRouting: setIsRouting,
        isSm: isSm,
        isMd: isMd,
        isLg: isLg,
        screenOrientation: useScreenOrientation(),
        activeSection: activeSection,
        setSection: setSection,
        ...pageProps,
    }
    useEffect(() => {
        if (!isRouting) return () => clearTimeout(tiemout)
        const tiemout = setTimeout(() => {
            if (isRouting) setIsRouting(false)
        }, 5000)
    }, [isRouting])
    return (
        <>
            <Head>
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="./assets/favicon.ico"
                />
            </Head>
            <DefaultSeo
                titleTemplate="Mike Jayne | %s"
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url,
                    description:
                        'The personal portfolio for Michael Jayne, data analyst | software developer.',
                    site_name: 'Mike Jayne | mikejayne.com',
                    images: [],
                }}
                canonical={url}
            />
            <h1>Mike Jayne</h1>
            {isLoading && isHome ? (
                <Loader
                    setIsLoading={setIsLoading}
                    screenFill={isMd ? 50 : isSm ? 75 : 100}
                />
            ) : (
                <>
                    <MotionConfig reducedMotion="user">
                        <Navbar
                            activeSection={activeSection}
                            isHome={isHome}
                            isMd={isMd}
                            isRouting={isRouting}
                        />
                        <>
                            <AnimatePresence
                                mode="sync"
                                initial={false}
                                onExitComplete={() => setIsRouting(false)}
                            >
                                <Component {...pageProps} key={url} />
                            </AnimatePresence>
                        </>
                        <ToastContainer />
                    </MotionConfig>
                </>
            )}
        </>
    )
}

export default MyApp
