import { useState } from 'react'
import Card_Expanded from 'src/components/items/Card_Expanded'
import Jobs from './Jobs'
import Certifications from './Certifications'
import { Section_Hero } from '@components'

const Experience = ({ isMd, ...data }) => {
    const globalControls = data.globalControls
    const [[currentTab, direction], setTab] = useState([0, 0])

    const components = [
        <div
            key="experience-content"
            id="experience-innerHTML"
            className="px-2 md:p-10 md:pt-5"
            dangerouslySetInnerHTML={{
                __html: data.content,
            }}
        />,
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
            <div
                key="experience-content"
                id="experience-innerHTML"
                className="px-2 md:p-10 md:pt-5"
                dangerouslySetInnerHTML={{
                    __html: data.content,
                }}
            />
        </>,
        <Jobs key="experience-jobs" {...data.data} />,
        <Certifications key="experience-certs" {...data.data} />,
    ]

    const tabsLayoutProps = {
        cardData: data.data,
        tabs: tabs,
        currentTab: currentTab,
        direction: direction,
        setTab: setTab,
        isMd: data.isMd,
    }
    return isMd ? (
        <div className="flex-col-center h-auto w-full space-y-8 md:space-y-16">
            {components.map((component, i) => component)}
        </div>
    ) : (
        <Card_Expanded {...tabsLayoutProps} />
    )
}
export default Experience
