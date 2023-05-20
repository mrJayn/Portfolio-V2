import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { ToastContainer } from 'react-toastify'

import { Navbar } from '@components'
import '../styles/global.css'
import 'react-toastify/dist/ReactToastify.css'

function useDarkMode(defaultValue) {
    const isDarkOS = useMediaQuery('(prefers-color-scheme: dark)')
    const [isDarkMode, setDarkMode] = useLocalStorage(
        'usehooks-ts-dark-mode',
        defaultValue ?? isDarkOS ?? false
    )

    // Update darkMode if os prefers changes
    useEffect(() => {
        setDarkMode(isDarkOS)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDarkOS])

    return {
        isDarkMode,
        toggle: () => setDarkMode((prev) => !prev),
        enable: () => setDarkMode(true),
        disable: () => setDarkMode(false),
    }
}

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const url = `https://mikejayne.com/Portfolio${router.asPath}`
    const isHome = router.pathname === '/'

    const activeSection = useRef(0)
    const setSection = (i) => (activeSection.current = i)

    pageProps = {
        isHome: isHome,
        activeSection: activeSection.current,
        setSection: setSection,
        ...pageProps,
    }

    useEffect(() => {
        //window.scrollTo({ top: 0, behavior: 'auto' })
    }, [])

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
                />
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
            <MotionConfig reducedMotion="user">
                <>
                    <Navbar isHome={isHome} />

                    <AnimatePresence
                        mode="wait"
                        onExitComplete={() => {
                            window.scrollTo({ top: 0, behavior: 'auto' })
                        }}
                    >
                        <Component key={url} {...pageProps} />
                    </AnimatePresence>
                </>
            </MotionConfig>

            <ToastContainer />
        </>
    )
}

export default MyApp
