import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Project_Card from './Project_Cards'
import Tabs_List from 'src/components/items/Tabs_List'
import { projectsVariants as variants } from '@motion'

const Header = () => (
    <motion.div
        className="flex-col-center my-6 gap-y-2 overflow-hidden text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={variants.title.container}
    >
        <motion.h6 className="relative" variants={variants.title.items}>
            <motion.span
                className="styled-underline -hue-rotate-60"
                variants={variants.title.decoration}
            />
            Projects Archive
        </motion.h6>
        <motion.p variants={variants.title.items}>
            Other noteworthy creations of mine
        </motion.p>
    </motion.div>
)

const Archive = ({ isMd, pRM, ...sectionData }) => {
    const [[currentTab, dir], setTab] = useState([0, 0])
    const [activeProject, setActiveProject] = useState(-1)

    const projects = Object.values(sectionData)
    const projectCategories = projects.map((project) => project.data.category)
    const tabNames = ['all', ...new Set(projectCategories)]

    const groupedTabs = []
    for (let i = 0; i < tabNames.length; i++) {
        let group = []
        if (i == 0) {
            group = projects
        } else {
            for (let j = 0; j < projectCategories.length; j++) {
                if (tabNames[i] == projectCategories[j]) group.push(projects[j])
            }
        }
        groupedTabs.push(group)
    }

    const DisplayCards = groupedTabs[currentTab]
    const Blanks = projects.length - DisplayCards.length

    const tabListProps = {
        currentTab: currentTab,
        setTab: setTab,
        tabNames: tabNames,
        altStyle: 'rounded-xl',
    }

    return (
        <div className="full" id="all-projects">
            {/** Title **/}
            <Header />

            <div className="h-auto w-full">
                <Tabs_List
                    currentTab={currentTab}
                    setTab={setTab}
                    tabNames={tabNames}
                    bgStyle="rounded-xl bg-slate"
                />
                <div className="full">
                    <AnimatePresence
                        mode="wait"
                        onExitComplete={() => setActiveProject(-1)}
                    >
                        <motion.div
                            key={currentTab}
                            className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-3"
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            variants={variants.Wrap}
                            custom={pRM}
                        >
                            {DisplayCards.map((project, i) => (
                                <motion.div
                                    key={`grouped-projects-${i}`}
                                    className="relative h-[150px] overflow-hidden rounded-xl sm:h-[225px] sm:shadow-xs md:h-[300px] md:cursor-default lg:h-full"
                                    variants={variants.Card}
                                >
                                    <Project_Card
                                        project={project}
                                        i={i}
                                        activeProject={activeProject}
                                        setActiveProject={setActiveProject}
                                        isMd={isMd}
                                    />
                                </motion.div>
                            ))}
                            {[...Array(Blanks).keys()].map((i) => (
                                <div
                                    key={`blankCard-${i}`}
                                    className="pointer-events-none relative h-[225px] md:h-[300px]"
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Archive
