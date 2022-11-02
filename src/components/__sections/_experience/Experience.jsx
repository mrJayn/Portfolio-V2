import { Section, Jobs, Certifications, Card, Section_Hero } from '@components'
import { useState } from 'react'
import Card_Expanded from 'src/components/items/Card_Expanded'
const Experience = ({ ...data }) => {
    const globalControls = data.globalControls
    const [[currentTab, direction], setTab] = useState([0, 0])

    const components = [
        <Section_Hero
            key="experience-hero"
            idx={data.activeSection}
            isMd={data.isMd}
            {...data.data}
        />,
        <div
            key="experience-content"
            id="experience-innerHTML"
            className="px-2 md:p-10 md:pt-5"
            dangerouslySetInnerHTML={{
                __html: data.content,
            }}
        />,
        <Jobs key="experience-jobs" {...data.data} />,
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
    return data.isMd ? (
        components.map((component) => component)
    ) : (
        <Card_Expanded {...tabsLayoutProps} />
    )
}
export default Experience
