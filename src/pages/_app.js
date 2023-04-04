import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { AnimatePresence, MotionConfig, useScroll } from 'framer-motion'
import { ToastContainer } from 'react-toastify'

import { Navbar, Background, Loader } from '@components'

import '../styles/global.css'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const url = `https://mikejayne.com/Portfolio${router.asPath}`
    const isHome = router.pathname === '/'

    const activeSection = useRef(0)
    const [isLoading, setIsLoading] = useState(true)

    const setSection = (i) => (activeSection.current = i)

    pageProps = {
        isHome: isHome,
        activeSection: activeSection.current,
        setSection: setSection,
        ...pageProps,
    }

    useEffect(() => {
        if (isLoading && !isHome) setIsLoading(false)
    }, [])

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
                        'The personal portfolio for Michael Jayne, software engineer.',
                    site_name: 'Mike Jayne | mikejayne.com',
                    images: [],
                }}
                canonical={url}
            />
            <h1>Mike Jayne</h1>
            <MotionConfig reducedMotion="user">
                <Navbar isHome={isHome} />

                <AnimatePresence mode="wait">
                    <Component key={url} {...pageProps} />
                </AnimatePresence>

                <Background />
            </MotionConfig>

            <ToastContainer />
        </>
    )
}

export default MyApp
