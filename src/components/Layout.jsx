import { useRef } from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'

const Layout = ({ isHome = false, title, description, children }) => (
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

export default Layout
