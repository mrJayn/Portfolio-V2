import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'

const Layout = ({ title, description, isHome = false, variants, children }) => {
    // const variants = layoutVariants[variantId == null ? title : variantId]

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <motion.main
                key={title}
                className={`flex-col-top top-0 left-0 w-full ${
                    isHome
                        ? 'absolute h-auto bg-background-gradient'
                        : 'fixed bottom-0'
                }`}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ duration: 0.75 }}
                variants={variants}
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
