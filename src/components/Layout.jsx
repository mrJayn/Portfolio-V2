import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'

import { layoutVariants } from '@config'

const Layout = ({ title, description, isHome, children }) => {
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
