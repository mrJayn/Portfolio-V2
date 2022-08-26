import { useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Section, Cards, Tabs, Exp_Items } from '@components'

const Experience = ({ ...data }) => {
    const experience = data.text.filter((obj) => obj.id == 'experience')[0]

    const [readMore, setReadMore] = useState(false)
    const [[currentTab, direction], setTab] = useState([0, 0])
    const scrollRef = useRef()

    const cardProps = {
        toggleCard: () => setReadMore(true),
        infoLoc: 'right',
        ...experience,
    }
    const expCardProps = {
        title: experience.data.title,
        subtitle: experience.data.subtitle,
        state: readMore,
        toggleCard: () => setReadMore(false),
    }
    const indicatorProps = {
        tabNames: ['Summary', 'Jobs', 'Certifications'],
        currentTab: currentTab,
        setTab: setTab,
        scrollRef: scrollRef,
    }
    const tabProps = {
        key: currentTab,
        custom: direction,
    }

    const tabs = {
        0: <Exp_Items.Summary {...experience} />,
        1: <Exp_Items.Jobs {...experience.data} />,
        2: <Exp_Items.Certifications {...experience.data} />,
    }

    return (
        <Section id="experience" fullScreen={false}>
            <div className="full grid-cols-2 md:grid">
                <Cards.Img {...cardProps} />
                <Cards.Info {...cardProps} />
            </div>

            <Cards.Expanded {...expCardProps}>
                <div className="full relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-12 w-full">
                        <Tabs.Indicators {...indicatorProps} />
                    </div>
                    <div
                        className="absolute top-16 left-0 right-0 bottom-0 overflow-y-scroll"
                        ref={scrollRef}
                    >
                        <div className="mb-10 mt-5">
                            <AnimatePresence exitBeforeEnter custom={direction}>
                                <Tabs.Wrap {...tabProps}>
                                    {tabs[currentTab]}
                                </Tabs.Wrap>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </Cards.Expanded>
        </Section>
    )
}
export default Experience
