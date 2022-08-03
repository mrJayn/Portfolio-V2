import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { fadeIn } from '@variants'

const Layout = ({ children, title, description }) => {
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <motion.main
                id="layout"
                variants={fadeIn}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="relative w-screen"
            >
                {children}
            </motion.main>
        </>
    )
}

export default Layout
