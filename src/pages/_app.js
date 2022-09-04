import { useEffect, useState } from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'

import Navbar from '../components/nav/Navbar'
import Loader from '../components/Loader'

import '../styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import { AnimatePresence } from 'framer-motion'
import { Background } from '@components'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const isHome = router.pathname === '/'
    const [isLoading, setIsLoading] = useState(isHome)

    // page key
    const url = `https://mikejayne.com${router.pathname}`

    // Prevent Replays
    const [isFirst, setIsFirst] = useState(true)

    // DarkMode
    const [darkMode, setDarkMode] = useState('')
    useEffect(() => {
        const theme = window.matchMedia('(prefers-color-scheme: dark)')
        setDarkMode(theme.matches)
        theme.addEventListener('change', (e) => setDarkMode(e.matches))
        return () =>
            theme.removeEventListener('change', (e) => setDarkMode(e.matches))
    }, [darkMode])

    // created states + pageData
    pageProps = {
        isHome: isHome,
        isLoading: isLoading,
        isFirst: isFirst,
        setIsFirst: setIsFirst,
        darkMode: darkMode,
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
                <div className="full relative">
                    <Navbar {...pageProps} />
                    <AnimatePresence mode="wait">
                        <Component {...pageProps} key={url} />
                    </AnimatePresence>
                    <div className="absolute top-0 left-0 right-0 -z-50 h-full bg-pattern bg-repeat opacity-10" />
                    <ToastContainer />
                </div>
            )}
        </>
    )
}

export default MyApp
