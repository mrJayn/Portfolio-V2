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

const Layout = ({ title, description, isHome, children, scrollRef = null }) => {
    const variants = {
        hidden: { opacity: 1 },
        show: { opacity: 1, transition: { duration: 1 } },
        exit: { opacity: 1, transition: { duration: 0.5 } },
    }
    // Handle External Links
    useEffect(() => {
        const allLinks = Array.from(document.querySelectorAll('a'))
        if (allLinks.length > 0) {
            allLinks.forEach((link) => {
                if (link.host !== window.location.host) {
                    link.setAttribute('rel', 'noopener noreferrer')
                    link.setAttribute('target', '_blank')
                }
            })
        }
    }, [isHome])

    // !isHome ScrollRef Props
    const scrollRefProps = isHome
        ? null
        : {
              ref: scrollRef,
          }
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <motion.main
                id="layout"
                className="flex-col-top overscroll-y-scroll left-0 top-12 w-full"
                style={{
                    position: isHome ? 'absolute' : 'fixed',
                    bottom: !isHome && 0,
                }}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={variants}
            >
                {isHome ? (
                    children
                ) : (
                    <div
                        className="z-10 h-auto w-full overflow-x-hidden overflow-y-scroll bg-background"
                        ref={scrollRef}
                    >
                        {children}
                    </div>
                )}
            </motion.main>
            <PageGradient />
        </>
    )
}

export default Layout
/**
flex-col-top absolute top-12 left-0 right-0 bottom-0 snap-y snap-mandatory snap-always overflow-x-hidden overflow-y-scroll
 */
