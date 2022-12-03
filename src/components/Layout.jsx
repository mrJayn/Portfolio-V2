import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { layoutVariants } from '@motion'

const Layout = ({ title, description, isHome = false, children, ...props }) => {
    const pageName =
        title == 'Contact' ? 'ContactPage' : isHome ? 'HomePage' : 'SectionPage'
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
                        ? 'absolute top-14 z-0 bg-background-gradient'
                        : 'fixed top-0 bottom-0 z-20'
                }`}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={variants}
                custom={props.isMd}
            >
                {isHome ? (
                    children
                ) : (
                    <>
                        <a id="slugTop" />
                        <div className="z-20 h-auto w-full overflow-x-hidden overflow-y-scroll bg-white/90">
                            {children}
                        </div>
                    </>
                )}
            </motion.main>
        </>
    )
}

export default Layout
