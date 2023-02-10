import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { ToastContainer } from 'react-toastify'

import { Navbar, Loader } from '@components'
import { useMediaQuery } from '@hooks'

import '../styles/global.css'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const isHome = router.pathname === '/'
    const url = `https://mikejayne.com/Portfolio${router.pathname}`

    const [isLoading, setIsLoading] = useState(isHome)
    const [activeSection, setSection] = useState(0)
    const isLg = useMediaQuery(1024)
    const [screenHeight, setScreenHeight] = useState(null)
    const [isRouting, setIsRouting] = useState(false)

    useEffect(() => {
        router.events.on('routeChangeStart', () => setIsRouting(true))
        router.events.on('routeChangeError', () => setIsRouting(true))
        return () => {
            router.events.off('routeChangeStart', () => setIsRouting(true))
            router.events.off('routeChangeError', () => setIsRouting(true))
        }
    }, [router.events])

    pageProps = {
        isHome: isHome,
        isFirstLoad: useRef(true),
        activeSection: activeSection,
        setSection: (index) => {
            if (!isRouting) setSection(index)
        },
        ...(!isHome && { isLg: isLg }),
        ...pageProps,
    }

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
                <Loader loaderComplete={() => setIsLoading(false)} />
            ) : (
                <>
                    <MotionConfig reducedMotion="user">
                        <Navbar isHome={isHome} activeSection={activeSection} />
                        <>
                            <AnimatePresence
                                mode="wait"
                                onExitComplete={() => setIsRouting(false)}
                            >
                                <Component key={url} {...pageProps} />
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
