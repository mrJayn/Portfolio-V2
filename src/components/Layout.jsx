import { useEffect, useState } from 'react'
import {
    motion,
    LayoutGroup,
    useViewportScroll,
    useSpring,
    motionValue,
} from 'framer-motion'
import { NextSeo } from 'next-seo'
import { fadeIn } from '@variants'

const Layout = ({ children, title, description }) => {
    const { scrollY } = useViewportScroll()
    const offset = motionValue(0)
    useEffect(() => {
        return scrollY.onChange((scrollY) => {
            offset.set(scrollY * 0.75)
        })
    }, [])
    const y = useSpring(offset, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
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
                    variants={fadeIn}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="relative w-screen overflow-hidden"
                >
                    {children}
                    <motion.div
                        id="layout-bg"
                        className="absolute top-0 left-0 right-0 -z-50 h-[150%] opacity-50"
                        style={{ y }}
                    />
                </motion.main>
            </LayoutGroup>
        </>
    )
}

export default Layout
