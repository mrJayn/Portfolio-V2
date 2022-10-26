import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Section, Project_Card, Tabs } from '@components'
import { projectVariants } from '@motion'

const All_Projects = ({ projects, isMd, pRM }) => {
    const [[currentTab, _], setTab] = useState([0, 0])
    const [activeProject, setActiveProject] = useState(-1)

    const tabNames = [
        'all',
        ...new Set(projects.map(({ data: { category } }) => category)),
    ]

    const projectsByCat = projects.map((project) => project.data.category)
    const groupedTabs = []
    for (let i = 0; i < tabNames.length; i++) {
        let group = []
        if (i == 0) {
            group = projects
        } else {
            for (let j = 0; j < projectsByCat.length; j++) {
                if (tabNames[i] == projectsByCat[j]) group.push(projects[j])
            }
        }
        groupedTabs.push(group)
    }
    const DisplayCards = groupedTabs[currentTab]
    const Blanks = projects.length - DisplayCards.length

    const tabListProps = {
        currentTab: currentTab,
        setTab: setTab,
        tabNames: [
            'all',
            ...new Set(projects.map(({ data: { category } }) => category)),
        ],
        altStyle: 'rounded-xl',
    }

    return (
        <Section id="projects">
            {/** Title **/}
            <div className="w-full text-center">
                <motion.h3
                    initial={{ opacity: 0, y: '100%' }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.75,
                            delay: 0.25,
                            type: 'spring',
                        },
                    }}
                    viewport={{ once: true }}
                >
                    my projects
                </motion.h3>
            </div>

            <div className="h-auto w-full">
                <Tabs.List {...tabListProps} />
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
                            variants={projectVariants.Wrap}
                            custom={pRM}
                        >
                            {DisplayCards.map((project, i) => (
                                <motion.div
                                    key={`grouped-projects-${i}`}
                                    className="relative h-[150px] overflow-hidden rounded-xl sm:h-[225px] sm:shadow-xs md:h-[300px] md:cursor-default lg:h-full"
                                    variants={projectVariants.Card}
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
        </Section>
    )
}

export default All_Projects
