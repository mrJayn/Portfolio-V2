import { useEffect, useState } from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { ToastContainer } from 'react-toastify'

import { useMediaQuery } from '@hooks'
import { Navbar, Loader } from '@components'

import '../styles/global.css'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const isHome = router.pathname === '/'
    const [isLoading, setIsLoading] = useState(isHome)
    const [isFirst, setIsFirst] = useState(true)
    // page key
    const url = `https://mikejayne.com${router.pathname}`

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
        darkMode: darkMode,
        isMd: useMediaQuery(),
        useFirst: [isFirst, setIsFirst],
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
                </>
            )}
        </>
    )
}

export default MyApp
