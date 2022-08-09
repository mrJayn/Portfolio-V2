import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Section, Title } from '@components'
import { config } from '@config'
const fade = config.variants.fade

const SectionLink = () => (
    <motion.div
        className="styled-element p-3"
        whileTap={{ scale: 0.95 }}
        variants={fade}
        transition={{ delay: 0.5 }}
    >
        <Link href="#featured">Check out my projects</Link>
    </motion.div>
)

const Intro = () => {
    const [titleVis, setTitleVis] = useState(false)
    return (
        <Section id="intro">
            <motion.div
                className="flex-col-center full px-4 pt-24 md:px-0"
                initial="hidden"
                animate={titleVis && 'enter'}
            >
                <motion.p>Hello, my name is</motion.p>
                <motion.div className="flex-center relative h-20 overflow-hidden rounded md:h-24 lg:h-32">
                    <Title setTitleVis={setTitleVis} />
                </motion.div>

                <motion.div className="flex-center w-full pb-2" variants={fade}>
                    <h2>Data Analyst</h2>
                </motion.div>
                <SectionLink />
            </motion.div>
        </Section>
    )
}

export default Intro
