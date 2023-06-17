import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { getHomeProps } from 'src/lib/markdown'
import { sections } from '@config'
import { useShouldAnimate, useSmoothScroll, useViewport } from '@hooks'
import { Layout, Intro, About, Experience, Projects, Contact, Footer } from '@components'

const AnimatedScrollContainer = ({ children }) => {
    const scrollRef = useRef(null)
    const shouldAnimate = useShouldAnimate()
    useSmoothScroll(scrollRef, shouldAnimate ? 0.07 : 1)
    return (
        <motion.div className="flex-col-center fixed left-0 top-0 z-10 w-screen will-change-transform" ref={scrollRef}>
            {children}
        </motion.div>
    )
}

export default function Home({ data }) {
    const { about, experience, featured } = data
    const { height } = useViewport()

    return (
        <>
            <Layout
                title="Portfolio"
                description="Hello, I'm Michael👋 - I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"
            >
                <AnimatedScrollContainer>
                    {sections.map(({ id }) => {
                        return (
                            <motion.section
                                key={id}
                                id={id}
                                className="flex-center relative z-0 w-full overflow-hidden px-4 py-24 first-of-type:py-14"
                            >
                                {
                                    {
                                        intro: <Intro />,
                                        about: <About {...about} />,
                                        experience: <Experience {...experience} />,
                                        projects: <Projects {...featured} />,
                                        contact: <Contact />,
                                    }[id]
                                }
                            </motion.section>
                        )
                    })}
                    <Footer />
                </AnimatedScrollContainer>
            </Layout>
            {/* Background Component */}
        </>
    )
}

export async function getStaticProps() {
    const data = await getHomeProps()
    return { props: { data } }
}
