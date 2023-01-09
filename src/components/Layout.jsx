import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { themeConfig } from 'twTheme'
import { LayoutVariants } from '@motion'

const Layout = ({
    title,
    description,
    isHome = false,
    useTransition = false,
    activeSection,
    children,
}) => {
    const baseColor = !isHome && themeConfig.getSectionColor(activeSection)
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
                        ? 'bg-background-gradient absolute h-auto max-lg:z-0'
                        : 'h-auto w-full overflow-x-hidden overflow-y-scroll max-lg:z-20'
                }`}
                style={{ background: !isHome && baseColor }}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={useTransition && LayoutVariants}
            >
                {!isHome && <a id="slugTop" />}
                {children}
            </motion.main>
        </>
    )
}
export default Layout
