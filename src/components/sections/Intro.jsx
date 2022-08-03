import { useEffect, useState } from 'react'
import Link from 'next/link'

import { motion, AnimatePresence, useAnimation, useCycle } from 'framer-motion'

import { Section, Title } from '@components'
import { fadeIn, staggerChildren, slideShow } from '@variants'

const slides = [
    { text: 'Engineer', color: '#c33' },
    { text: 'Data Analyst', color: '#3b3' },
    { text: 'Developer', color: '#ca0' },
    { text: 'Dork', color: '#33c' },
]

const Intro = () => {
    const controls = useAnimation()
    const [titleVis, setTitleVis] = useState(false)

    useEffect(() => {
        controls.set('hidden')
        setTimeout(() => {
            controls.start('enter')
        }, 100)
    }, [controls])
    useEffect(() => {}, [titleVis])
    // lg = 768px
    return (
        <Section id="intro">
            <motion.div className="intro-content" animate={controls}>
                <motion.p variants={fadeIn}>Hello, my name is</motion.p>
                <motion.div
                    variants={fadeIn}
                    custom={1}
                    className="flex-center relative h-20 overflow-hidden  rounded md:h-24 lg:h-32"
                >
                    <Title setTitleVis={setTitleVis} />
                </motion.div>

                <motion.div
                    variants={fadeIn}
                    custom={2}
                    className="flex-center w-full pb-2"
                >
                    <h2>Data Analyst</h2>
                </motion.div>

                <motion.p variants={fadeIn} custom={3}>
                    I&apos;m a recent graduate with an exceptional ability to
                    learn new skills, and capitalize on what I&apos;ve learned
                    almost instantaneously.
                </motion.p>
                <motion.div variants={fadeIn} custom={4}>
                    <Link href="#featured">Check out my projects</Link>
                </motion.div>
            </motion.div>
        </Section>
    )
}

export default Intro
