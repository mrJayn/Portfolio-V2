import { useState } from 'react'
import { motion } from 'framer-motion'

import { Tabs } from '@components'
import Skills from './Skills'

const About = ({ isSm, ...props }) => {
    const [[currentTab, direction], setTab] = useState([0, 0])

    const Components = [
        <motion.div
            key={0}
            className="content-innerHTML about w-full"
            dangerouslySetInnerHTML={{ __html: props.content }}
        />,

        <Skills key={1} skills={props.data.skills} />,
    ]

    return isSm ? (
        <>
            {Components.map((component, i) => (
                <motion.div
                    key={`about-item-${i}`}
                    className="subsection full z-10"
                    initial={{ opacity: 1, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: 'circOut' }}
                    viewport={{ once: true }}
                >
                    {component}
                </motion.div>
            ))}
        </>
    ) : (
        <Tabs
            tabNames={['About Me', 'Skills']}
            tabs={Components}
            currentTab={currentTab}
            direction={direction}
            setTab={setTab}
        />
    )
}
export default About
