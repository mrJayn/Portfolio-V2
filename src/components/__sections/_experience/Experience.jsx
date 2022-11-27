import { useState } from 'react'
import { motion } from 'framer-motion'

import { Tabs } from '@components'
import Jobs from './Jobs'
import Certifications from './Certifications'

const Education = ({ ...props }) => (
    <div key="experience-edu" className="flex-center min-h-[50%] w-full">
        <div className="flex-col-left mx-2 h-auto w-full border-l-2 border-l-white px-2 xs:mx-4 xs:px-4">
            <h5>{props.university}</h5>
            <p>{props.degree}</p>
            <p>{props.dates}</p>
        </div>
    </div>
)

const Experience = ({ isMd, ...props }) => {
    const [[currentTab, direction], setTab] = useState([0, 0])

    const Components = [
        {
            title: 'Proffesional Summary',
            component: (
                <>
                    <div
                        className="content-innerHTML experience"
                        dangerouslySetInnerHTML={{ __html: props.content }}
                    />
                </>
            ),
        },
        {
            title: 'Work Experience',
            component: <Jobs isMd={isMd} {...props.data} />,
        },
        {
            title: 'Education',
            component: isMd ? <Education {...props.data.education} /> : null,
        },
        {
            title: 'Certificates',
            component: (
                <div className="flex-col-top full relative">
                    {isMd ? null : <Education {...props.data.education} />}
                    <Certifications {...props.data} />
                </div>
            ),
        },
    ]

    const ComponentArr = []
    Object.values(Components).forEach((obj) => {
        if (obj.title == 'Education') return
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
            tabNames={['Summary', 'Jobs', 'Certificates']}
            tabs={ComponentArr}
            currentTab={currentTab}
            direction={direction}
            setTab={setTab}
        />
    )
}
export default Experience
