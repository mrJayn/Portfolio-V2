import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'

const Layout = ({ title, description, isHome = false, children }) => {
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <motion.main
                id={`${title}-Layout`}
                className={`flex-col-top top-0 left-0 w-full min-w-[320px] ${
                    isHome
                        ? 'absolute z-10'
                        : 'fixed z-50 h-screen overflow-y-scroll scroll-smooth'
                }`}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                {children}
            </motion.main>
        </>
    )
}
export default Layout
