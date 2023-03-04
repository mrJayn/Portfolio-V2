import { useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { motion, useIsPresent, usePresence } from 'framer-motion'

const variants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            delay: 0,
            duration: 0,
            when: 'beforeChildren',
            delayChildren: 0,
        },
    },
    exit: {
        opacity: 1,
        transition: {
            duration: 0,
            delay: 0,
        },
    },
}

const Layout = ({ title, description, isHome = false, children }) => {
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <motion.div
                id={`${title}-Layout`}
                className={`flex-col-top top-0 left-0 w-full min-w-[320px] ${
                    isHome ? 'absolute z-10' : 'z-20 overflow-hidden'
                }`}
                initial={isHome ? 'exit' : 'hidden'}
                animate={'show'}
                exit="exit"
                variants={variants}
            >
                {!isHome && <a id="slugTop" />}
                {children}
            </motion.div>
        </>
    )
}
export default Layout
