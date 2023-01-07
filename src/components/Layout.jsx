import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@hooks'

const Layout = ({ title, description, isHome = false, children }) => {
    const isLg = useMediaQuery(1024)
    const layoutVariants = {
        hidden: { opacity: isHome || isLg ? 1 : 0 },
        show: { opacity: 1 },
        exit: { opacity: isHome || isLg ? 1 : 0 },
    }
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <motion.main
                key={`${title}-Layout`}
                id={`${title}-Layout`}
                className={`flex-col-top top-0 left-0 w-full ${
                    isHome
                        ? 'absolute h-auto bg-background-gradient max-lg:z-0'
                        : 'h-auto w-full overflow-x-hidden overflow-y-scroll max-lg:z-10'
                }`}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                {!isHome && <a id="slugTop" />}
                {children}
            </motion.main>
        </>
    )
}

export default Layout
