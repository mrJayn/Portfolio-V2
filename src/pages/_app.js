import { useRef } from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { ToastContainer } from 'react-toastify'

import { Navbar, Background } from '@components'

import '../styles/global.css'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const url = `https://mikejayne.com/Portfolio${router.asPath}`
    const isHome = router.pathname === '/'

    const activeSection = useRef(0)
    const isFirstLoad = useRef(true)

    const setSection = (i) => (activeSection.current = i)

    pageProps = {
        isHome: isHome,
        isFirstLoad: isFirstLoad,
        activeSection: activeSection.current,
        setSection: setSection,
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
            <MotionConfig reducedMotion="user">
                <Navbar
                    isHome={isHome}
                    activeSection={activeSection}
                    setSection={setSection}
                />

                <AnimatePresence
                    mode="wait"
                    onExitComplete={() => {
                        document.body.style.overflowY = isHome
                            ? 'auto'
                            : 'hidden'
                    }}
                >
                    <Component key={url} {...pageProps} />
                </AnimatePresence>
                <div
                    id="scroll-holder"
                    className="pointer-events-none absolute top-0 left-0 h-[500vh] w-full"
                />
                <Background />
            </MotionConfig>
            <ToastContainer />
        </>
    )
}

export default MyApp
