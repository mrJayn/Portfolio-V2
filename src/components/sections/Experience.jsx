import { useState } from 'react'
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion'

import { Section, Items } from '@components'
import { config } from '@config'

const experienceTabs = ['Summary', 'Jobs', 'Certifications']

const TabList = ({ currentTab, handleTab }) => {
    return (
        <LayoutGroup>
            <div className="flex-evenly w-full">
                {[0, 1, 2].map((tabNum) => (
                    <motion.div
                        key={tabNum}
                        className="flex-center relative mb-1 h-12 w-full cursor-pointer whitespace-nowrap rounded-md p-2 text-center md:mx-5"
                        onClick={() => handleTab(tabNum)}
                        whileHover={{
                            backgroundColor: '#eeeeee25',
                        }}
                        transition={{ duration: 0.1 }}
                    >
                        <span className="capitalize text-white">
                            {experienceTabs[tabNum]}
                        </span>
                        {tabNum === currentTab ? (
                            <motion.div
                                className="absolute bottom-2 top-2 left-2 right-2 -z-10 rounded-md bg-neon/50 opacity-100"
                                layoutId="underline"
                            />
                        ) : null}
                    </motion.div>
                ))}
            </div>
        </LayoutGroup>
    )
}

const Experience = ({ ...data }) => {
    const experience = data.text.filter((obj) => obj.id == 'experience')[0]
    const [readMore, setReadMore] = useState(false)
    const [[currentTab, direction], setTab] = useState([0, 0])

    function handleTab(selectedTab) {
        let newDirection = selectedTab - currentTab
        setTab([selectedTab, newDirection])
    }

    const cardProps = {
        toggleCard: () => setReadMore(true),
        ...experience,
    }
    const expandedProps = {
        title: experience.data.title,
        subtitle: experience.data.subtitle,
        state: readMore,
        toggleCard: () => setReadMore(false),
    }
    const tabProps = {
        key: currentTab,
        custom: direction,
        variants: config.variants.slideshow,
        initial: 'enter',
        animate: 'display',
        exit: 'exit',
    }
    return (
        <Section id="experience" fullScreen={false}>
            <div className="experience-cards">
                <Items.ImgCard {...cardProps} />
                <Items.InfoCard {...cardProps} />
            </div>
            <Items.ExpandedCard {...expandedProps}>
                <div className="overflow-hidden">
                    <TabList currentTab={currentTab} handleTab={handleTab} />
                    <AnimatePresence exitBeforeEnter custom={direction}>
                        {currentTab == 0 && (
                            <motion.div
                                className="md:flex-top w-full p-5 md:p-10 "
                                {...tabProps}
                            >
                                <div
                                    id="about-innerHTML"
                                    className="text-white md:w-full md:pr-10 "
                                    dangerouslySetInnerHTML={{
                                        __html: experience.content,
                                    }}
                                />
                            </motion.div>
                        )}
                        {currentTab == 1 && (
                            <motion.div
                                className="md:flex-top w-full p-5 md:p-10 "
                                {...tabProps}
                            >
                                <ul className="w-full text-white">
                                    {experience.data.jobs.map((job, i) => (
                                        <li key={`job-${i}`}>{job}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                        {currentTab == 2 && (
                            <motion.div
                                className="md:flex-top w-full p-5 md:p-10 "
                                {...tabProps}
                            >
                                <ul className="w-full text-white">
                                    {experience.data.certs.map((cert, i) => (
                                        <li key={`job-${i}`}>{cert}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Items.ExpandedCard>
        </Section>
    )
}
export default Experience
