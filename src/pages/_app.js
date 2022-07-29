import '../styles/global.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { Footer, Navbar, Loader, Progress } from '@components'
import { myVariants } from '@utils'
function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const [path, isMain] = [router.pathname, router.pathname === '/']
    const [loader, setLoader] = useState(isMain)
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

    console.log('isRouting:', isRouting)
    console.log('isAnim:', isAnimating)

    return (
        <>
            {loader && isMain ? (
                <Loader finishLoading={() => setLoader(false)} />
            ) : (
                <>
                    <Progress
                        isRouting={isRouting}
                        isAnimating={isAnimating}
                        setIsAnimating={setIsAnimating}
                    />
                    <>
                        <Navbar isLoading={loader} isMain={isMain} />
                        <>
                            <AnimatePresence exitBeforeEnter>
                                {!isRouting && !isAnimating && (
                                    <motion.main
                                        variants={myVariants.entry}
                                        initial={false}
                                        animate="enter"
                                        exit="exit"
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Component {...pageProps} />
                                    </motion.main>
                                )}
                            </AnimatePresence>
                        </>
                        <Footer />
                    </>
                </>
            )}
        </>
    )
}

export default MyApp
