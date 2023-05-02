import { useEffect, useRef, useState } from 'react'
import { NextSeo } from 'next-seo'
import { motion, useMotionValueEvent, useReducedMotion } from 'framer-motion'
import { useMediaQuery, useSmoothScroll } from '@hooks'

const Layout = ({ title, description, children }) => {
    const prefersReducedMotion = useReducedMotion()
    const scrollRef = useRef(null)
    const isLg = useMediaQuery(1024)
    const y = useSmoothScroll(scrollRef)

    const shouldScrollSmooth = !prefersReducedMotion && isLg

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <motion.main
                id={`${title}-Layout`}
                className="flex-col-top top-0 left-0 w-full overflow-hidden border-b-2 will-change-transform lg:fixed"
                style={{ y: shouldScrollSmooth ? y : 0 }}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: { duration: 0.5, when: 'beforeChildren' },
                    },
                    exit: {
                        opacity: 0,
                        transition: { duration: 0.5, when: 'afterChildren' },
                    },
                }}
                ref={scrollRef}
            >
                {children}
            </motion.main>
            {/** BG - 
            <div className="absolute inset-0 h-full">
                <div
                    id="bg-decor-1"
                    className="inset-decoration absolute left-[90%] top-[14%] -z-10 hidden aspect-[1/1.5] w-[150px] md:w-[300px] lg:w-[400px]"
                />
            </div>
        
             */}
        </>
    )
}

export default Layout
