import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { DefGradient } from '@components'
import { useEffect } from 'react'
import { layoutVariants } from '@motion'

const Layout = ({ title, description, isHome, children }) => {
    const handleExternalLinks = () => {
        const allLinks = Array.from(document.querySelectorAll('a'))
        if (allLinks.length > 0) {
            allLinks.forEach((link) => {
                if (link.host !== window.location.host) {
                    link.setAttribute('rel', 'noopener noreferrer')
                    link.setAttribute('target', '_blank')
                }
            })
        }
    }

    useEffect(() => {
        handleExternalLinks()
    })

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <motion.main
                id="layout"
                className="flex-col-top absolute top-0 left-0 right-0 overflow-hidden"
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={layoutVariants}
                custom={isHome}
            >
                {children}
                <DefGradient />
            </motion.main>
        </>
    )
}

export default Layout
