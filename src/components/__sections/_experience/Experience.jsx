import { useState } from 'react'
import { motion } from 'framer-motion'

import Jobs from './Jobs'
import Certifications from './Certifications'
import Tabs from './Tabs'
import { Section_Hero } from '@components'
import { inViewFadeIn } from '@motion'

const Experience = ({ isMd, ...data }) => {
    const [[currentTab, direction], setTab] = useState([0, 0])

    const ExperienceContent = () => (
        <div
            id="experience-innerHTML"
            className="w-full"
            dangerouslySetInnerHTML={{
                __html: data.content,
            }}
        />
    )

    const componentNames = [
        'Proffesional Summary',
        'Work Experience',
        'Education',
        'My Certificates',
    ]

    const components = [
        <>
            {isMd ? null : (
                <Section_Hero
                    idx={data.activeSection}
                    isMd={data.isMd}
                    {...data.data}
                />
            )}
            <ExperienceContent />
        </>,
        <>
            <Jobs isMd={isMd} {...data.data} />
        </>,
        <>
            {isMd ? <div key="experience-edu">Graduated from UMASS</div> : null}
        </>,
        <>
            {isMd ? null : <div>Graduated from UMASS</div>}
            <Certifications {...data.data} />
        </>,
    ]

    return isMd ? (
        <div className="flex-col-center mx-auto h-auto w-full max-w-[1440px] space-y-8 py-8 md:space-y-16 md:py-16">
            {components.map((component, i) => {
                const title = componentNames[i]
                return (
                    <motion.div
                        key={`exp-item-${title}`}
                        className="subsection full"
                        {...inViewFadeIn}
                    >
                        <h4>{title}</h4>
                        {component}
                    </motion.div>
                )
            })}
        </div>
    ) : (
        <Tabs
            tabNames={['Summary', 'Jobs', 'Education']}
            tabs={components}
            currentTab={currentTab}
            direction={direction}
            setTab={setTab}
        />
    )
}
export default Experience
