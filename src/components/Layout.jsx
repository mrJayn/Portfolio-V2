import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'

const Layout = ({ isHome = false, title, description, isMd, children }) => {
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <motion.main
                id="layout"
                className={`flex-col-top left-0 top-14 h-auto w-full ${
                    isHome ? 'absolute' : 'fixed bottom-0 z-40'
                }`}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={{
                    hidden: { opacity: isMd ? 1 : 0 },
                    show: { opacity: 1 },
                    exit: { opacity: 0 },
                }}
                transition={{ duration: 0.25 }}
            >
                {isHome ? (
                    children
                ) : (
                    <>
                        <a id="slugTop" />
                        <div className="z-10 h-auto w-full overflow-x-hidden overflow-y-scroll bg-background">
                            {children}
                        </div>
                    </>
                )}
            </motion.main>
        </>
    )
}

export default Layout
