import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Section, Projects_Items, Tabs } from '@components'
import { useMediaQuery } from '@hooks'
import { config } from '@config'

const itemVariants = config.variants.featured_items

const Projects = ({ projects }) => {
    const [[currentTab, _], setTab] = useState([0, 0])
    const isMd = useMediaQuery()

    const tabNames = [
        'all',
        ...new Set(projects.map(({ data: { category } }) => category)),
    ]

    const tabProps = {
        tabNames: tabNames,
        currentTab: currentTab,
        setTab: setTab,
        projects: projects,
    }

    return (
        <Section id="projects">
            <div>
                <h2 className="styled-heading text-black">my projects</h2>
            </div>
            {/** Sm **/}
            <div id="projects-sm" className="w-full md:hidden">
                <Projects_Items.Sm projects={projects} />
            </div>
            {/** Md **/}
            <div
                id="projects-md"
                className="full hidden overflow-hidden rounded-md p-2 md:mb-[25vh] md:block md:h-auto"
            >
                <Tabs.List {...tabProps} />
                <AnimatePresence>
                    <Tabs.Item key={currentTab} variants={itemVariants}>
                        <Projects_Items.Md {...tabProps} />
                    </Tabs.Item>
                </AnimatePresence>
            </div>
        </Section>
    )
}

export default Projects
