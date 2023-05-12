import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'

import { archiveVariants } from '@motion'
import { Styled } from '@components'

const Indicators = ({ isActive, handleClick, children }) => (
    <li
        className={`flex-center relative mt-auto flex w-full cursor-pointer select-none rounded-t-xl font-semibold capitalize duration-250 ease-tween md:text-[1.125em] ${
            isActive
                ? 'z-0 h-full bg-slate-40 text-white'
                : '-z-10 h-[85%] bg-white/0 text-slate-60 shadow-[inset_0_0_5px]'
        }`}
        onClick={handleClick}
    >
        {children}
        <span
            className={`tab-decoration pointer-events-none absolute inset-y-0 -z-10 duration-250 ease-tween ${
                isActive
                    ? 'inset-x-0 before:text-slate-40 after:text-slate-40'
                    : 'inset-x-1/4 before:text-white/0 after:text-white/0'
            }`}
        />
    </li>
)

const Archive_Project = ({ i, data, content }) => {
    const { href, src, alt } = data

    return (
        <>
            <motion.div
                layout
                className="flex-col-center group relative mx-auto cursor-default overflow-hidden rounded-lg bg-slate-neon/10 md:w-1/2"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={archiveVariants.Project}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                style={{ filter: `hue-rotate(${i * 45}deg)` }}
            >
                <div
                    // Image
                    className="z-0 h-[240px] w-screen max-w-full opacity-75 transition-all duration-500 ease-tween group-hover:opacity-25 md:h-[300px] lg:h-[350px] lg:group-hover:scale-90"
                    style={{
                        filter: `hue-rotate(${i * -45}deg)`,
                        background: `url(${src}) center center/cover`,
                    }}
                />

                <div
                    // Content
                    className="flex-col-center eas absolute inset-1.5 z-10 select-none rounded bg-white px-2.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                    <div
                        data-project-content
                        className="flex-col-center full"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                    <Styled.Button
                        style={{ scale: 0.75 }}
                        /*
                        onClick={() =>
                            window.open(href, '_blank', 'noopener noreferrer')
                        }
                        */
                    >
                        View Project
                    </Styled.Button>
                </div>
            </motion.div>
        </>
    )
}

const Archive = ({ projectsData }) => {
    const [curr, setCurr] = useState(0)
    const projects = Object.values(projectsData)
    const tabs = ['all', ...new Set(projects.map(({ data }) => data.category))]

    return (
        <>
            <h3 className="text-center">Projects</h3>
            <ul className="flex-evenly relative z-10 mx-auto h-14 w-full max-w-4xl overflow-hidden rounded-lg">
                {tabs.map((tabName, i) => (
                    <Indicators
                        key={tabName}
                        isActive={i == curr}
                        handleClick={() => setCurr(i)}
                    >
                        {tabName}
                    </Indicators>
                ))}
            </ul>
            {/***/}
            <div className="relative mt-1 flex min-h-[100vmax] w-full flex-wrap items-center gap-y-1">
                <LayoutGroup>
                    <AnimatePresence>
                        {projects.map((project, i) => {
                            return curr === 0 ||
                                tabs[curr] === project.data.category ? (
                                <Archive_Project
                                    key={`project-${i}`}
                                    i={i}
                                    {...project}
                                />
                            ) : null
                        })}
                    </AnimatePresence>
                </LayoutGroup>
            </div>
        </>
    )
}

export default Archive_Project
