import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'

import { Section, ProjectTabs } from '@components'
import { useMediaQuery } from '@hooks'
import { config } from '@config'

const variants = config.variants.slideshow

const TabList = ({ categories, tabs, currentTab, handleTab }) => {
    return (
        <LayoutGroup>
            <div className="flex-evenly w-full">
                {tabs.map((tabNum) => (
                    <motion.div
                        key={tabNum}
                        className="flex-center relative mb-1 h-12 w-full cursor-pointer whitespace-nowrap rounded-md p-2 text-center md:mx-5"
                        onClick={() => handleTab(tabNum)}
                        whileHover={{
                            backgroundColor: '#eeeeee75',
                        }}
                        transition={{ duration: 0.1 }}
                    >
                        <span className="capitalize">{categories[tabNum]}</span>
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
const Projects = ({ projects, tabProps }) => {
    const categories = [
        'all',
        ...new Set(projects.map(({ data: { category } }) => category)),
    ]
    const tabs = [...Array(categories.length).keys()]
    //============================================
    const isMd = useMediaQuery()
    const [[currentTab, direction], setTab] = useState([0, 0])
    function handleTab(selectedTab, newDirection) {
        if (!newDirection) newDirection = selectedTab - currentTab
        setTab([selectedTab, newDirection])
    }
    tabProps = {
        key: currentTab,
        custom: direction,
        variants: variants,
        initial: 'enter',
        animate: 'display',
        exit: 'exit',
        ...tabProps,
    }
    return (
        <Section id="projects" fullScreen={isMd ? false : true}>
            <div>
                <h2 className="styled-heading text-black">my projects</h2>
            </div>
            <div className="h-auto w-full overflow-hidden p-2 md:mb-[25vh] md:h-auto">
                <TabList
                    categories={categories}
                    tabs={tabs}
                    currentTab={currentTab}
                    handleTab={handleTab}
                />
                <AnimatePresence exitBeforeEnter custom={direction}>
                    <motion.div
                        className="flex h-full w-full flex-col overflow-hidden bg-eee"
                        {...tabProps}
                    >
                        <div key={currentTab} className="h-auto w-full">
                            <ProjectTabs
                                projects={projects}
                                categories={categories}
                                tab={currentTab}
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </Section>
    )
}

export default Projects
