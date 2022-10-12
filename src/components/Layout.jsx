import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const PageGradient = () => (
    <svg className="pointer-events-none invisible absolute -z-50 select-none">
        <linearGradient id="svgDefsGradient" x1="0%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#8360c3" />
            <stop offset="100%" stopColor="#45A29E" />
        </linearGradient>
    </svg>
)

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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'circIn' }}
                custom={isHome}
            >
                {children}
                <PageGradient />
            </motion.main>
        </>
    )
}

export default Layout
