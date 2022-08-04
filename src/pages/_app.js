import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar, Footer, Loader, Progress } from '@components'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const isMain = router.pathname === '/'
    const [isLoading, setIsLoading] = useState(isMain)
    const [isRouting, setIsRouting] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        const changing = () => {
            setIsRouting(true)
            setIsAnimating(true)
        }
        const done = () => {
            setTimeout(() => {
                setIsRouting(false)
            }, 1000)
        }
        router.events.on('routeChangeStart', changing)
        router.events.on('routeChangeComplete', done)
        router.events.on('routeChangeError', done)
        return () => {
            router.events.off('routeChangeStart', changing)
            router.events.off('routeChangeComplete', done)
            router.events.off('routeChangeError', done)
        }
    }, [router])

    const url = `https://mikejayne.com${router.pathname}`

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
                titleTemplate="Michael Jayne"
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url,
                    description:
                        'The personal portfolio for Michael Jayne, developer.',
                    site_name: 'Mike Jayne | mikejayne.com',
                    images: [],
                }}
                canonical={url}
            />
            {isLoading && isMain ? (
                <Loader finishLoading={() => setIsLoading(false)} />
            ) : (
                <>
                    <Progress
                        isRouting={isRouting}
                        isAnimating={isAnimating}
                        setIsAnimating={setIsAnimating}
                    />
                    <Navbar isLoading={isLoading} isMain={isMain} />
                    <AnimatePresence exitBeforeEnter>
                        {!isRouting && !isAnimating && (
                            <Component {...pageProps} isLoading={isLoading} />
                        )}
                    </AnimatePresence>
                    <Footer />
                </>
            )}
        </>
    )
}

export default MyApp
