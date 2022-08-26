import { useEffect, useRef, useState } from 'react'
import {
    motion,
    LayoutGroup,
    useScroll,
    motionValue,
    useTransform,
} from 'framer-motion'
import { NextSeo } from 'next-seo'
import { Footer } from '@components'

const Layout = ({ children, title, description }) => {
    const [layoutHeight, setLayoutHeight] = useState(0)
    const mainRef = useRef(null)
    const { scrollYProgress } = useScroll({ container: mainRef })
    const transform = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -layoutHeight * 0.5]
    )

    // Layout always loads to START
    useEffect(() => {
        mainRef.current.scrollTo(0, 0)
    }, [])

    // Set Background Parallax Container to same size as Layout
    useEffect(() => {
        const getLayoutHeight = () => {
            setLayoutHeight(mainRef.current.scrollHeight)
        }
        getLayoutHeight()
        window.addEventListener('resize', getLayoutHeight)
        return () => window.removeEventListener('resize', getLayoutHeight)
    }, [layoutHeight])

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <LayoutGroup>
                <motion.main
                    id="layout"
                    className="relative h-screen w-screen scroll-pt-16 overflow-x-hidden overflow-y-scroll scroll-smooth md:scroll-pt-20"
                    ref={mainRef}
                >
                    {children}
                    <Footer />
                </motion.main>
            </LayoutGroup>
            <div className="fixed top-0 left-0 bottom-0 right-0 -z-50 overflow-hidden">
                <motion.div
                    id="layout-bg"
                    className="absolute top-0 left-0 w-full origin-top opacity-100"
                    style={{ height: layoutHeight, y: transform }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 0.5,
                        transition: { duration: 3.5, ease: 'easeOut' },
                    }}
                />
            </div>
        </>
    )
}

export default Layout
