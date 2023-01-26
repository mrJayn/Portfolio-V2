import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { themeConfig } from 'twTheme'

const Layout = ({
    title,
    description,
    isHome = false,
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
                className={`flex-col-top top-0 left-0 w-full min-w-[320px] ${
                    isHome
                        ? 'absolute h-auto bg-background-gradient max-lg:z-0'
                        : 'h-auto overflow-hidden bg-white-dark max-lg:z-20'
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
