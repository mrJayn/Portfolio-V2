import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Archive_Project from './Archive_Project'
import { Tabs_List } from '@components'
import { archiveVariants as variants } from '@motion'

const Archive = ({ projectsData }) => {
    const [[currentTab, _], setTab] = useState([0, 0])

    const projects = Object.values(projectsData)
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
    const ActiveProjects = groupedTabs[currentTab]

    //const [projectCardHeight, gridCols] = ismd ? [50, 2] : [40, 1]
    // const usedSpace =Math.round(ActiveProjects.length / gridCols) * projectCardHeight
    // over 2 because grid is using two columns

    return (
        <section className="flex-col-center gap-y-4 w-full">
            <motion.h3
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={variants.Headline}
            >
                Archive
            </motion.h3>
            <div className="h-14 relative z-10 w-full">
                <div className="inset-y-0 -inset-x-3 absolute">
                    <Tabs_List
                        currentTab={currentTab}
                        tabNames={tabNames}
                        handleSelect={(clickedTab) => {
                            if (clickedTab == currentTab) return
                            let newDirection = clickedTab - currentTab
                            setTab([clickedTab, newDirection])
                        }}
                    />
                </div>
            </div>
            <div className="full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentTab}
                        className="gap-1 grid grid-cols-1 md:grid-cols-2"
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        {ActiveProjects.map((projectData, index) => (
                            <Archive_Project
                                key={`${tabNames[currentTab]}-group-project-${index}`}
                                data={projectData.data}
                                style={{
                                    filter: `hue-rotate(${index * 30}deg)`,
                                }}
                                variants={variants.Project.Wrap}
                            />
                        ))}
                        {/**
                         * <div
                            className="full pointer-events-none relative border-2 md:col-span-2"
                            style={{
                                height: ismd
                                    ? `calc(${75 - usedSpace}vh - 56px)`
                                    : `calc(75vh - ${usedSpace}px)`,
                            }}
                        />
                         */}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Archive
