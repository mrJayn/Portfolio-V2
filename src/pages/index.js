import { useRef } from 'react'
import { motion, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion'
import { getHomeProps } from 'src/lib/markdown'
import { sections } from '@config'
import { useShouldAnimate, useSmoothScroll, useViewport } from '@hooks'
import { Layout, Intro, About, Experience, Projects, Contact, Footer } from '@components'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, MeshReflectorMaterial } from '@react-three/drei'

const AnimatedScrollContainer = ({ children }) => {
    const scrollRef = useRef(null)
    const bgRef = useRef(null)

    const shouldAnimate = useShouldAnimate()
    useSmoothScroll(scrollRef, shouldAnimate ? 0.07 : 1, { ref2: bgRef, multiplier: 0.5 })
    const translateY = useMotionValue(0)
    const y2 = useTransform(translateY, (v) => v * 0.75)

    useMotionValueEvent(translateY, 'change', (last) => console.log(last))

    return (
        <>
            <motion.div
                className="flex-col-center fixed left-0 top-0 z-10 w-screen will-change-transform"
                ref={scrollRef}
                style={{ y: translateY }}
            >
                {children}
            </motion.div>
            <motion.div className="flex-col-top fixed left-0 top-0 z-0 h-screen w-screen" ref={bgRef}>
                <div
                    className="full"
                    style={{
                        background: '50% 100% url(/assets/misc/earth.jpg) no-repeat',
                        filter: 'grayscale(1)',
                        y: '50%',
                    }}
                />
            </motion.div>
        </>
    )
}

export default function Home({ data }) {
    const { about, experience, featured } = data
    const { height } = useViewport()
    return (
        <Layout
            title="Portfolio"
            description="Hello, I'm Michael👋 - I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"
        >
            <AnimatedScrollContainer>
                {sections.map(({ id, title }) => {
                    return (
                        <motion.section
                            key={id}
                            id={id}
                            className="flex-center relative z-0 w-full overflow-hidden px-4 py-24"
                            style={{ minHeight: height }}
                        >
                            {/*  {title && <h2>{title}</h2>} */}

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
    )
}

export async function getStaticProps() {
    const data = await getHomeProps()
    return { props: { data } }
}
