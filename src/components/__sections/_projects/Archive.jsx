import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Project_Card from './Project_Cards'
import { Tabs_List } from '@components'
import { archiveVariants as variants } from '@motion'

const Header = () => {
    const vars = variants.Header
    return (
        <motion.div
            className="flex-col-center my-6 w-full text-center lg:my-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={vars.container}
        >
            <motion.h3 className="relative" variants={vars.items}>
                Projects Archive
            </motion.h3>
            <motion.h4 className="text-black" variants={vars.items}>
                Other noteworthy creations of mine
            </motion.h4>
        </motion.div>
    )
}

const Archive = ({ isSm, isMd, isLg, ...sectionData }) => {
    const [[currentTab, _], setTab] = useState([0, 0])

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

    function handleSelect(clickedTab) {
        document
            .getElementById('archive-top')
            .scrollIntoView({ behavior: 'smooth' })

        if (clickedTab == currentTab) return
        let newDirection = clickedTab - currentTab
        setTab([clickedTab, newDirection])
    }

    const ActiveProjects = groupedTabs[currentTab]

    const [projectCardHeight, gridCols] = isMd ? [50, 2] : [40, 1]

    const usedSpace =
        Math.round(ActiveProjects.length / gridCols) * projectCardHeight
    // over 2 because grid is using two columns

    const ProjectsTabWrap = () => (
        <>
            {ActiveProjects.map((projectData, i) => (
                <motion.div
                    key={`grouped-projects-${i}`}
                    className="relative h-[40vh] overflow-hidden transition-[filter] duration-250 ease-tween hover:brightness-110 md:h-[50vh]"
                    variants={variants.ProjectCard}
                >
                    <Project_Card data={projectData.data} i={i} isMd={isMd} />
                </motion.div>
            ))}
            <div
                className="full pointer-events-none relative border-2 md:col-span-2"
                style={{
                    height: isMd
                        ? `calc(${75 - usedSpace}vh - 56px)`
                        : `calc(75vh - ${usedSpace}px)`,
                }}
            />
        </>
    )

    return (
        <div className="flex-col-center mt-12 w-full">
            <a id="archive-top" className="scroll-mt-14" />

            {isLg ? <Header /> : <h3>Archive</h3>}

            <div className="relative w-full md:mt-12">
                <div className="sticky inset-x-0 top-14 z-10 h-14 pb-2 lg:absolute lg:top-0">
                    <Tabs_List
                        currentTab={currentTab}
                        tabNames={tabNames}
                        handleSelect={handleSelect}
                    />
                </div>
                <div className="full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTab}
                            className="grid grid-cols-1 md:grid-cols-2 md:gap-0"
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            variants={variants.Wrap}
                        >
                            <ProjectsTabWrap />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Archive
