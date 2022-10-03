import { useEffect, useState } from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { AnimatePresence, MotionConfig, useReducedMotion } from 'framer-motion'
import { ToastContainer } from 'react-toastify'

import { Navbar, Loader } from '@components'
import { useMediaQuery } from '@hooks'

import '../styles/global.css'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const isHome = router.pathname === '/'
    const url = `https://mikejayne.com${router.pathname}`
    const [[isLoading, isFirst], setIsLoading] = useState([isHome, true])
    const [globOpen, setGlobOpen] = useState(null)

    // Page Properties
    pageProps = {
        isHome: isHome,
        firstLoad: [isFirst, setIsLoading],
        globalControls: [globOpen, setGlobOpen],
        isMd: useMediaQuery(768),
        pRM: useReducedMotion(),
        ...pageProps,
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
                        <Navbar {...pageProps} />
                        <>
                            <AnimatePresence
                                onExitComplete={() => window.scrollTo(0, 0)}
                                mode="wait"
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
