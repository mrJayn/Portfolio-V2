import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Section, Items } from '@components'
import { config } from '@config'

const experienceTabs = ['Summary', 'Jobs', 'Certifications']

const Experience = ({ ...data }) => {
    const experience = data.text.filter((obj) => obj.id == 'experience')[0]
    const [readMore, setReadMore] = useState(false)
    const [[currentTab, direction], setTab] = useState([0, 0])

    function handleTab(selectedTab) {
        let newDirection = selectedTab - currentTab
        setTab([selectedTab, newDirection])
    }

    const tabListProps = {
        tabNames: experienceTabs,
        currentTab: currentTab,
        handleTab: handleTab,
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
    const Summary = (
        <div
            id="about-innerHTML"
            className="text-white md:w-full md:pr-10 "
            dangerouslySetInnerHTML={{
                __html: experience.content,
            }}
        />
    )
    const Jobs = (
        <ul className="w-full text-white">
            {experience.data.jobs.map((job, i) => (
                <li key={`job-${i}`}>{job}</li>
            ))}
        </ul>
    )
    const Certifications = (
        <ul className="w-full text-white">
            {experience.data.certs.map((cert, i) => (
                <li key={`job-${i}`}>{cert}</li>
            ))}
        </ul>
    )
    return (
        <Section id="experience" fullScreen={false}>
            <div className="experience-cards">
                <Items.ImgCard {...cardProps} />
                <Items.InfoCard {...cardProps} />
            </div>
            <Items.ExpandedCard {...expandedProps}>
                <div className="overflow-hidden">
                    <Items.TabList {...tabListProps} />
                    <AnimatePresence exitBeforeEnter custom={direction}>
                        {currentTab == 0 && (
                            <motion.div
                                className="md:flex-top w-full p-5 md:p-10 "
                                {...tabProps}
                            >
                                {Summary}
                            </motion.div>
                        )}
                        {currentTab == 1 && (
                            <motion.div
                                className="md:flex-top w-full p-5 md:p-10 "
                                {...tabProps}
                            >
                                {Jobs}
                            </motion.div>
                        )}
                        {currentTab == 2 && (
                            <motion.div
                                className="md:flex-center w-full p-5 md:p-10 "
                                {...tabProps}
                            >
                                {Certifications}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Items.ExpandedCard>
        </Section>
    )
}
export default Experience
