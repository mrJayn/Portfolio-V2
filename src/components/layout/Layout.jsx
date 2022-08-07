import { LayoutGroup, motion } from 'framer-motion'
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
            <LayoutGroup>
                <motion.main
                    id="layout"
                    variants={fadeIn}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="relative w-screen md:px-3"
                >
                    {children}
                </motion.main>
            </LayoutGroup>
        </>
    )
}

export default Layout
