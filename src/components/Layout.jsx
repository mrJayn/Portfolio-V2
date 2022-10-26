import { useEffect } from 'react'

import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'

const PageGradient = () => (
    <svg className="pointer-events-none invisible absolute -z-50 select-none">
        <linearGradient id="svgDefsGradient" x1="0%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#8360c3" />
            <stop offset="100%" stopColor="#45A29E" />
        </linearGradient>
    </svg>
)

const Layout = ({ title, description, isHome, isMd, children }) => {
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
    // Odd or Even Card Styling
    useEffect(() => {}, [isMd])
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <motion.main
                id="layout"
                className="flex-col-top full absolute left-0 top-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'circIn' }}
                custom={isHome}
            >
                {children}
            </motion.main>
            <PageGradient />
        </>
    )
}

export default Layout
/**
flex-col-top absolute top-12 left-0 right-0 bottom-0 snap-y snap-mandatory snap-always overflow-x-hidden overflow-y-scroll
 */
