import { useState } from 'react'
import { motion } from 'framer-motion'

import { Tabs } from '@components'
import Jobs from './Jobs'
import Certifications from './Certifications'

const Experience = ({ isMd, ...data }) => {
    const [[currentTab, direction], setTab] = useState([0, 0])

    const Components = [
        {
            title: 'Proffesional Summary',
            component: (
                <>
                    {isMd ? null : (
                        <h4 className="my-4 font-semibold">
                            My Journey Thus Far
                        </h4>
                    )}
                    <div
                        className="content-innerHTML w-full"
                        dangerouslySetInnerHTML={{ __html: data.content }}
                    />
                </>
            ),
        },
        {
            title: 'Work Experience',
            component: <Jobs key={1} isMd={isMd} {...data.data} />,
        },
        {
            title: 'Education',
            component: isMd ? (
                <div key="experience-edu">Graduated from UMASS</div>
            ) : null,
        },
        {
            title: 'Certificates',
            component: (
                <>
                    {isMd ? null : <div>Graduated from UMASS</div>}
                    <Certifications {...data.data} />
                </>
            ),
        },
    ]

    const ComponentArr = []
    Object.values(Components).forEach((obj) => {
        ComponentArr.push(obj.component)
    })

    return isMd ? (
        <>
            {Components.map(({ title, component }, i) => (
                <motion.div
                    key={`exp-item-${title}`}
                    className="subsection full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: 'circOut' }}
                    viewport={{ once: true }}
                >
                    {title == '' ? null : <h4>{title}</h4>}
                    {component}
                </motion.div>
            ))}
        </>
    ) : (
        <Tabs
            tabNames={['Summary', 'Jobs', 'Education', 'Certificates']}
            tabs={ComponentArr}
            currentTab={currentTab}
            direction={direction}
            setTab={setTab}
        />
    )
}
export default Experience
