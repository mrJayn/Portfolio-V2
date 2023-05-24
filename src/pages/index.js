import { useRef } from 'react'
import { motion, eas } from 'framer-motion'
import { getHomeProps } from 'src/lib/markdown'
import { sections } from '@config'
import { useShouldAnimate, useSmoothScroll } from '@hooks'
import {
    Layout,
    Intro,
    About,
    Experience,
    Projects,
    Contact,
    Footer,
} from '@components'

const AnimatedScrollContainer = ({ shouldAnimate, children }) => {
    const scrollRef = useRef(null)
    const y = useSmoothScroll(scrollRef, shouldAnimate)

    return (
        <motion.div
            className={`flex-col-center w-full lg:motion-safe:fixed lg:motion-safe:top-0 lg:motion-safe:left-0 lg:motion-safe:will-change-transform`}
            style={{ y: shouldAnimate ? y : 0 }}
            ref={scrollRef}
        >
            {children}
        </motion.div>
    )
}

export default function Home({ data }) {
    const { about, experience, featured } = data
    const shouldAnimate = useShouldAnimate()

    return (
        <Layout
            isHome
            title="Portfolio"
            description="Hello, I'm Michael👋 - I'm an ChemEng graduate and a recent self-taught developer, aiming to break into tech ASAP!"
        >
            <AnimatedScrollContainer shouldAnimate={shouldAnimate}>
                {sections.map(({ id, title }) => {
                    return (
                        <motion.section
                            key={`${id}-section`}
                            id={id}
                            className="relative z-0 mb-20 w-full max-w-[1920px] py-16 first-of-type:py-0 last-of-type:mb-0"
                        >
                            {title && <h2>{title}</h2>}

                            {
                                {
                                    intro: (
                                        <Intro shouldAnimate={shouldAnimate} />
                                    ),
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
