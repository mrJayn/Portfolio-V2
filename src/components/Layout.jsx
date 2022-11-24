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
                className={`flex-col-top left-0 h-auto w-full ${
                    isHome
                        ? 'bg-background-gradient absolute top-14 z-0'
                        : 'fixed top-0 bottom-0 z-20'
                }`}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={{
                    hidden: { opacity: isMd ? 1 : 0 },
                    show: {
                        opacity: 1,
                        transition: { duration: 0.5, when: 'beforeChildren' },
                    },
                    exit: { opacity: 0, transition: { duration: 0.5 } },
                }}
            >
                {isHome ? (
                    children
                ) : (
                    <>
                        <a id="slugTop" />
                        <div className="z-20 h-auto w-full overflow-x-hidden overflow-y-scroll">
                            {children}
                        </div>
                    </>
                )}
            </motion.main>
        </>
    )
}

export default Layout
