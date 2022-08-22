import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Section, Tabs, Cards, Skills } from '@components'

const About = ({ ...data }) => {
    const about = data.text.filter((obj) => obj.id == 'about')[0]

    const [readMore, setReadMore] = useState(false)
    const [[currentTab, direction], setTab] = useState([0, 0])
    const cardProps = {
        toggleCard: () => setReadMore(true),
        infoLoc: 'left',
        ...about,
    }
    const expandedProps = {
        title: about.data.title,
        subtitle: about.data.subtitle,
        state: readMore,
        toggleCard: () => setReadMore(false),
    }
    const tabProps = {
        tabNames: ['About Me', 'My Skills'],
        currentTab: currentTab,
        setTab: setTab,
    }

    return (
        <Section id="about" fullScreen={false}>
            <div className="full grid-cols-2 md:grid">
                <Cards.Info {...cardProps} />
                <Cards.Img {...cardProps} />
            </div>

            <Cards.Expanded {...expandedProps}>
                {/** SM- Tabs **/}
                <div className="full relative overflow-hidden md:hidden">
                    {/** TAB LIST */}
                    <div className="absolute top-0 left-0 h-12 w-full">
                        <Tabs.List {...tabProps} />
                    </div>
                    {/** TABS */}
                    <div className="absolute top-14 left-0 right-0 bottom-0 overflow-y-scroll">
                        <div className="mb-10 mt-5">
                            <AnimatePresence exitBeforeEnter custom={direction}>
                                <Tabs.Item key={currentTab} custom={direction}>
                                    {currentTab == 0 ? (
                                        <div
                                            id="about-innerHTML"
                                            className="text-white md:w-[70%] md:pr-5"
                                            dangerouslySetInnerHTML={{
                                                __html: about.content,
                                            }}
                                        />
                                    ) : (
                                        <Skills
                                            readMore={readMore}
                                            {...about}
                                        />
                                    )}
                                </Tabs.Item>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/** Md - Flex **/}
                <div className="md:flex-top hidden h-full overflow-y-scroll p-5">
                    <div
                        id="about-innerHTML"
                        className="text-white md:w-[70%] md:pr-5"
                        dangerouslySetInnerHTML={{
                            __html: about.content,
                        }}
                    />
                    <Skills readMore={readMore} {...about} />
                </div>
            </Cards.Expanded>
        </Section>
    )
}

export default About
