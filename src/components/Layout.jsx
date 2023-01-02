import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { layoutVariants } from '@motion'

const Layout = ({ title, description, isHome = false, children, isLg }) => {
    const pageName = title == 'Contact' ? 'ContactPage' : 'DefaultLayout'
    const variants = layoutVariants[pageName]

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <motion.main
                key={title}
                className={`flex-col-top left-0 h-auto w-full ${
                    isHome
                        ? 'absolute top-0 z-0 bg-background-gradient pt-14'
                        : 'fixed top-0 bottom-0 z-20'
                }`}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={variants}
                custom={isLg}
            >
                {isHome ? (
                    children
                ) : (
                    <>
                        <a id="slugTop" />
                        <div
                            id="page-scroll-container"
                            className="z-20 h-auto w-full overflow-x-hidden overflow-y-scroll bg-black"
                        >
                            {children}
                        </div>
                    </>
                )}
            </motion.main>
        </>
    )
}

export default Layout
