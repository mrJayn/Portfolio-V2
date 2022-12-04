import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Project_Card from './Project_Cards'
import { Tabs_List } from '@components'
import { projectCardVariants } from '@motion'
const variants = projectCardVariants.Archive

const Header = () => {
    const vars = variants.Header
    return (
        <motion.div
            className="flex-col-center my-6 gap-y-2 overflow-hidden text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={vars.container}
        >
            <motion.h3 className="relative" variants={vars.items}>
                <motion.span
                    className="styled-underline -hue-rotate-60"
                    variants={vars.decoration}
                />
                Projects Archive
            </motion.h3>
            <motion.p variants={vars.items}>
                Other noteworthy creations of mine
            </motion.p>
        </motion.div>
    )
}

const Archive = ({ isMd, pRM, ...sectionData }) => {
    const [[currentTab, _], setTab] = useState([0, 0])
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

    function handleSelect(clickedTab) {
        if (clickedTab == currentTab) return
        let newDirection = clickedTab - currentTab
        setTab([clickedTab, newDirection])
    }

    const DisplayCards = groupedTabs[currentTab]
    const Blanks = [...Array(projects.length - DisplayCards.length).keys()]

    const ProjectsTabWrap = () => (
        <>
            {DisplayCards.map((project, i) => (
                <motion.div
                    key={`grouped-projects-${i}`}
                    className="relative h-[150px] overflow-hidden rounded-xl sm:h-[225px] sm:shadow-xs md:h-[300px] md:cursor-default lg:h-full"
                    variants={variants.ProjectCard}
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
            {Blanks.map((i) => (
                <div
                    key={`blankCard-${i}`}
                    className="pointer-events-none relative h-[225px] md:h-[300px]"
                />
            ))}
        </>
    )

    return (
        <div className="flex-col-center w-full">
            {/** Title **/}
            {isMd ? <Header /> : <h3>Archive</h3>}

            <div className="relative h-auto w-full pt-12">
                <div className="sticky top-14 left-0 z-10 h-12 w-full md:absolute md:top-0">
                    <Tabs_List
                        currentTab={currentTab}
                        tabNames={tabNames}
                        handleSelect={handleSelect}
                    />
                </div>
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
                            <ProjectsTabWrap
                                DisplayCards={DisplayCards}
                                Blanks={Blanks}
                                activeProject={activeProject}
                                setActiveProject={setActiveProject}
                                isMd={isMd}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Archive
