import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'

import { layoutVariants } from '@config'

const Layout = ({ title, description, isHome, children }) => {
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <motion.main
                id="layout"
                className="absolute top-0 left-0 w-screen overflow-hidden"
                style={{ backgroundOpacity: 0.1 }}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ duration: 0.6, ease: 'linear' }}
                variants={layoutVariants}
                custom={isHome}
            >
                {children}
            </motion.main>
        </>
    )
}

export default Layout
