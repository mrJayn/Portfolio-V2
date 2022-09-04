import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import { Section, Tabs, Tabs_List, Projects_Sm, Projects_Md } from '@components'
import { Variants } from '@config'

const Projects = ({ projects }) => {
    const [[currentTab, _], setTab] = useState([0, 0])
    const [height, setHeight] = useState(0)
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

    useEffect(() => {
        const getHeight = () => {
            if (window.innerWidth < 768) return
            if (window.innerWidth >= 1024) {
                // cols 4
                setHeight((projects.length / 3) * 400)
            } else {
                setHeight((projects.length / 2) * 400)
            }
        }
        getHeight()
        window.addEventListener('resize', getHeight)
        return () => window.removeEventListener('resize', getHeight)
    }, [height, projects])

    return (
        <Section id="projects" fullScreen={false}>
            {/** Title **/}
            <div>
                <h2 className="styled-heading text-black">my projects</h2>
            </div>

            {/** SM - FLEX **/}
            <div id="projects-sm" className="w-full md:hidden">
                <Projects_Sm projects={projects} />
            </div>

            {/** Md - TABS **/}
            <div
                className="relative hidden overflow-hidden bg-transparent md:block"
                style={{ height: height }}
            >
                <div
                    id="projects-md"
                    className="full absolute top-0 left-0 overflow-hidden rounded-md p-2"
                >
                    <div className="absolute top-0 left-0 w-full">
                        <Tabs_List {...tabProps} />
                    </div>
                    <div className="full absolute top-16 left-0 bottom-0">
                        <AnimatePresence mode="wait">
                            <Tabs
                                key={currentTab}
                                variants={Variants.project_items}
                            >
                                <Projects_Md {...tabProps} />
                            </Tabs>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Projects
