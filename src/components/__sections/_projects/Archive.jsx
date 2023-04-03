import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { archiveVariants as variants } from '@motion'
import { Styled } from '@components'

const Indicators = ({ current, tabNames, setCurrent }) => (
    <ul className="flex-evenly relative z-10 h-14 w-full max-w-3xl overflow-hidden rounded-md">
        {tabNames.map((tabName, i) => (
            <motion.li
                key={`tab-li-${i}`}
                className={`full flex-center relative flex cursor-pointer  select-none rounded-t-md p-0.5 font-semibold capitalize -tracking-lg ${
                    i == current
                        ? 'z-0 bg-grey-40 text-black duration-350 ease-tween md:tracking-normal'
                        : '-z-10 bg-grey-30 duration-350 ease-tween'
                }`}
                onClick={() => {
                    if (i == current) return
                    setCurrent(i)
                }}
            >
                {tabName}
                <span
                    className={`archiveIndicator-decoration pointer-events-none absolute inset-y-0 -z-10 duration-350 ease-tween ${
                        i == current
                            ? ' inset-x-0 before:text-grey-40 after:text-grey-40'
                            : 'inset-x-1/2 before:text-grey-30 after:text-grey-30'
                    }`}
                />
            </motion.li>
        ))}
    </ul>
)

const Archive_Project = ({ project, ...props }) => (
    <motion.a
        href={project.github ? project.github : project.external}
        target="_blank"
        rel="noopenner noreferrer"
        className="flex-col-top full z-10 cursor-pointer overflow-hidden rounded-md bg-slate-20/50 p-4 transition-[background-color] duration-150 ease-tween hover:bg-slate-20/75"
        variants={variants.Project}
        {...props}
    >
        <h5 className="relative z-10 w-full border-y-2 border-slate-40 bg-white-dark/50 py-1 text-center text-slate-60">
            {project.title}
        </h5>
        <div className="flex-evenly w-full">
            <Styled.Tech
                techs={project.tech}
                className="relative w-full whitespace-nowrap px-2 text-center italic -tracking-md text-slate-60 even:border-x-2 even:border-x-slate-40"
            />
        </div>

        <p className="my-4 w-full overflow-hidden text-center font-medium dark:text-white">
            {project.brief}
        </p>
    </motion.a>
)

const Archive = ({ projectsData }) => {
    const [current, setCurrent] = useState(0)
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

    return (
        <section className="flex-col-center w-full gap-y-4">
            <motion.h3
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={variants.Headline}
            >
                Archive
            </motion.h3>

            <Indicators
                current={current}
                tabNames={tabNames}
                setCurrent={setCurrent}
            />

            <div className=" full relative min-h-screen">
                <AnimatePresence>
                    <motion.div
                        key={current}
                        className="absolute grid grid-cols-1 gap-1 md:grid-cols-2 xl:grid-cols-3"
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        variants={variants.ProjectWrap}
                    >
                        {groupedTabs[current].map((projectData, i) => (
                            <Archive_Project
                                key={`${tabNames[current]}-group-project-${i}`}
                                project={projectData.data}
                                style={{
                                    filter: `hue-rotate(${
                                        (i + current) * 45
                                    }deg)`,
                                }}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Archive
