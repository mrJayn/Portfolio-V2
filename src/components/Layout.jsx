import { useRef } from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'

export default function Layout({ title, description, children }) {
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <motion.main
                id={`${title}-Layout`}
                className="flex w-screen flex-col items-center overflow-hidden"
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
                        opacity: 1,
                        transition: { duration: 0, when: 'afterChildren' },
                    },
                }}
            >
                {children}
            </motion.main>
        </>
    )
}
