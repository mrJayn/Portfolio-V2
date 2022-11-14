import { useState } from 'react'

import Jobs from './Jobs'
import Certifications from './Certifications'
import { Section_Hero, Tabs } from '@components'

const Experience = ({ isMd, ...data }) => {
    const [[currentTab, direction], setTab] = useState([0, 0])

    const Heading = ({ text }) => (
        <h4 className="styled-subsection-title">{text}</h4>
    )

    const ExperienceContent = () => (
        <div
            id="experience-innerHTML"
            className="px-2 md:p-10 md:pt-5"
            dangerouslySetInnerHTML={{
                __html: data.content,
            }}
        />
    )

    const components = [
        <ExperienceContent key="experience-content" />,
        <Jobs key="experience-jobs" isMd={isMd} {...data.data} />,
        <Certifications key="experience-certs" {...data.data} />,
    ]
    const tabs = [
        <>
            <Section_Hero
                key="experience-hero"
                idx={data.activeSection}
                isMd={data.isMd}
                {...data.data}
            />
            <ExperienceContent key="experience-content" />
        </>,
        <Jobs key="experience-jobs" {...data.data} />,
        <Certifications key="experience-certs" {...data.data} />,
    ]

    const tabProps = {
        tabNames: [
            'Summary',
            `Work${isMd ? ' Experience' : ''}`,
            'Certificates',
        ],
        tabs: tabs,
        currentTab: currentTab,
        direction: direction,
        setTab: setTab,
    }
    return isMd ? (
        <div className="flex-col-center mx-auto h-auto w-full max-w-[1440px] space-y-8 pb-8 md:space-y-16 md:pb-16">
            {components.map((component, i) => (
                <>
                    <h4 className="styled-subsection-title">
                        {tabProps.tabNames[i]}
                    </h4>
                    {component}
                </>
            ))}
        </div>
    ) : (
        <Tabs {...tabProps} />
    )
}
export default Experience
