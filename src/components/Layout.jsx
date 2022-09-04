import { useEffect, useRef, useState } from 'react'
import { NextSeo } from 'next-seo'
import {
    motion,
    LayoutGroup,
    useScroll,
    useTransform,
    useSpring,
} from 'framer-motion'

import { layoutVariants } from '@config'
import { Background } from '@components'

const Layout = ({ title, description, isHome, darkMode, children }) => {
    const { scrollYProgress } = useScroll()
    const transform = useTransform(scrollYProgress, [0, 1], [0, -2500])
    const spring = useSpring(transform, {
        stiffness: 1000,
        damping: 250,
    })

    return (
        <div>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <motion.main
                id="layout"
                className="relative w-screen overflow-hidden"
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ duration: 0.6, ease: 'linear' }}
                variants={layoutVariants}
                custom={isHome}
            >
                {children}
                {/**<div className="fixed top-0 left-0 bottom-0 right-0 -z-50 overflow-hidden">
                    <motion.div
                        id="layout-bg"
                        className="absolute top-0 left-0 h-[135%] w-full origin-top opacity-100"
                        data-darkmode={darkMode}
                        style={{ y: spring }}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { duration: 3.5, ease: 'easeOut' },
                        }}
                    />
                </div>*/}
            </motion.main>
        </div>
    )
}

export default Layout
