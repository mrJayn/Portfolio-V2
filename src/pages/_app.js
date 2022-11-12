import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import {
    AnimatePresence,
    MotionConfig,
    useReducedMotion,
    useScroll,
} from 'framer-motion'
import { ToastContainer } from 'react-toastify'

import { Navbar, Loader } from '@components'
import { useIsRouting, useMediaQuery } from '@hooks'

import '../styles/global.css'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const isHome = router.pathname === '/'
    const url = `https://mikejayne.com${router.pathname}`

    const isMd = useMediaQuery(768)

    const [isLoading, setIsLoading] = useState(isHome)

    const [globOpen, setGlobOpen] = useState(null)

    const [activeSection, setSection] = useState(0)

    const scrollRef = useRef(null)

    // Page Properties
    pageProps = {
        isHome: isHome,
        isRouting: useIsRouting(true),
        isFirstLoad: useRef(true),
        activeSection: activeSection,
        setSection: setSection,
        scrollRef: scrollRef,
        isMd: isMd,
        pRM: useReducedMotion(),
        globalControls: [globOpen, setGlobOpen],
        ...pageProps,
    }

    const navProps = {
        isHome: isHome,
        isMd: isMd,
        scrollRef: scrollRef,
        globalControls: [globOpen, setGlobOpen],
    }

    return (
        <>
            <Head>
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="/assets/favicon.ico"
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
            {isLoading && isHome ? (
                <Loader setIsLoading={setIsLoading} />
            ) : (
                <>
                    <MotionConfig reducedMotion="user">
                        <Navbar {...navProps} />
                        <>
                            <AnimatePresence mode="wait">
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
