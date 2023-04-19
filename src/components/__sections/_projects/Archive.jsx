import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'

import { archiveVariants } from '@motion'
import Image from 'next/image'

const Indicators = ({ isActive, handleClick, children }) => (
    <li
        className={`flex-center relative mt-auto flex w-full cursor-pointer select-none rounded-t-xl font-semibold capitalize duration-250 ease-tween md:text-[1.125em] ${
            isActive
                ? 'z-0 h-full bg-slate-40 text-white'
                : '-z-10 h-[85%] bg-grey-30 text-grey-60'
        }`}
        onClick={handleClick}
    >
        {children}
        <span
            className={`tab-decoration pointer-events-none absolute inset-y-0 -z-10 duration-250 ease-tween ${
                isActive
                    ? 'inset-x-0 before:text-slate-40 after:text-slate-40'
                    : 'inset-x-1/4 before:text-grey-30 after:text-grey-30'
            }`}
        />
    </li>
)

const Archive_Project = ({ i, data, content }) => {
    const { href, src, alt } = data
    const linkActive = useRef(false)
    const setLinkState = (on_off) =>
        setTimeout(() => {
            linkActive.current = on_off
        }, 500)

    const handleClick = (e) => {
        if (!linkActive.current) return
        window.open(href, '_blank', 'noopener noreferrer')
    }

    return (
        <motion.div
            layout
            className="flex-center group relative mx-auto cursor-pointer overflow-hidden rounded-lg md:w-1/2"
            style={{ filter: `hue-rotate(${i * 45}deg)` }}
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={archiveVariants.Project}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={handleClick}
            onTouchStart={() => setLinkState(true)}
            onTouchEnd={() => setLinkState(false)}
            onMouseEnter={() => setLinkState(true)}
            onMouseLeave={() => setLinkState(false)}
        >
            <div
                // Image
                className={`z-0 h-[240px] w-screen max-w-full opacity-100 transition-all duration-500 ease-tween group-hover:scale-90 group-hover:opacity-25 md:h-[300px] lg:h-[350px] ${''}`}
                style={{ background: `url(${src}) center center/cover` }}
            />
            <div
                // Content
                data-archive-card
                className={`flex-col-center absolute inset-1.5 z-10 select-none rounded bg-white px-2.5 opacity-0 group-hover:opacity-100 lg:bg-white/25 ${''}`}
                style={{ transition: 'opacity 0.5s ease-in' }}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </motion.div>
    )
}

const Archive = ({ projectsData }) => {
    const [curr, setCurr] = useState(0)
    const projects = Object.values(projectsData)
    const tabs = ['all', ...new Set(projects.map(({ data }) => data.category))]
    // prev method --> projects.filter(({ data }) => data.category === tabNames[1])

    return (
        <>
            <h4 className="text-center">Projects</h4>
            <ul className="flex-evenly relative z-10 mx-auto h-14 w-full max-w-3xl overflow-hidden rounded-lg">
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

export default Archive
