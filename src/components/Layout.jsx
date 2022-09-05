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
            </motion.main>
        </div>
    )
}

export default Layout
