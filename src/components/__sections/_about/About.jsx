import { useState } from 'react'
import { motion } from 'framer-motion'

import { Tabs } from '@components'
import Skills from './Skills'

const About = ({ isMd, ...props }) => {
    const Components = [
        <div
            key={0}
            className="content-innerHTML about"
            dangerouslySetInnerHTML={{ __html: props.content }}
        />,

        <Skills key={1} isMd={isMd} {...props.data} />,
    ]

    return isMd ? (
        <div className="flex h-auto w-full">
            {Components.map((component, i) => (
                <motion.div
                    key={`about-item-${i}`}
                    className="subsection full z-10 md:w-auto"
                    initial={{ opacity: 1, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: 'circOut' }}
                    viewport={{ once: true }}
                >
                    {component}
                </motion.div>
            ))}
        </div>
    ) : (
        <Tabs tabNames={['About Me', 'Skills']} tabs={Components} />
    )
}
export default About
