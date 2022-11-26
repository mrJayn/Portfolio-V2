import { useState } from 'react'
import { motion } from 'framer-motion'

import { Tabs } from '@components'
import Skills from './Skills'

const About = ({ isMd, ...data }) => {
    const [[currentTab, direction], setTab] = useState([0, 0])

    const Components = [
        <div
            key={0}
            className="content-innerHTML w-full"
            dangerouslySetInnerHTML={{ __html: data.content }}
        />,

        <Skills key={1} skills={data.data.skills} isMd={data.isMd} />,
    ]

    return isMd ? (
        <>
            {Components.map((component, i) => (
                <motion.div
                    key={`about-item-${i}`}
                    className="subsection full"
                    initial={{ opacity: 0, y: 50 }}
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
