import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

import { project_variants } from '@variants'
import { Items } from '@components'
import data from '@data'

const Md_Button = ({ expanded, setExpanded }) => {
    return (
        <motion.div
            layout
            whileTap={{ scale: 0.95 }}
            onClick={() => setExpanded(!expanded)}
            className="styled-element flex-center col-span-full mx-auto w-[50%] py-3 lg:col-span-2 lg:col-start-2  lg:w-full"
        >
            <span className="pr-4 text-right text-2xl">
                Show {expanded ? 'less' : 'more'}
            </span>
            <span
                className={`text-5xl leading-none ${
                    expanded ? '-rotate-90' : 'rotate-90'
                }`}
            >
                &raquo;
            </span>
        </motion.div>
    )
}
const Tech = ({ project }) => {
    return (
        <div className="flex-left py-2 text-sm">
            {project.tech.map((tech) => {
                return (
                    <p
                        className="border-l-[1px] border-r-[1px] border-dashed border-lightgrey/50 px-[15px]"
                        key={tech}
                    >
                        {tech}
                    </p>
                )
            })}
        </div>
    )
}
const Description = ({ project }) => {
    return (
        <div className="py-2 text-left indent-5 text-sm">
            <p className="h-24 tracking-normal">{project.description}</p>
        </div>
    )
}
const Project = ({ project, i = null, len = null, hide = false }) => {
    const cust = [i, len]
    return (
        <motion.div
            layout
            key={project.item}
            className="relative"
            initial={{ opacity: hide ? 0 : 1 }}
            animate="enter"
            exit="exit"
            variants={project_variants.item}
            custom={cust}
        >
            <Items.GhLink className="bottom-4 left-4 bg-eee text-charcoal" />
            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-col-left relative cursor-default rounded p-3 pt-6"
                style={{
                    background:
                        'linear-gradient( to bottom left, rgba(69, 162, 158, 0.25), rgb(31, 40, 51))',
                }}
            >
                <h4 className="border-b-2 border-lightgrey/75 pb-2 text-white">
                    {project.title}
                </h4>
                <Tech project={project} />
                <Description project={project} />
            </a>
            <Image
                src={project.src}
                alt={`${project.title} Project Image`}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                className="opacity-10"
            />
        </motion.div>
    )
}

const Project_Md = () => {
    const [gridColumnsCount, setGridColumnsCount] = useState(0)
    const [expanded, setExpanded] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const getGridColumnsCount = () => {
            setGridColumnsCount(
                window
                    .getComputedStyle(ref.current)
                    .getPropertyValue('grid-template-columns')
                    .split(' ').length
            )
        }
        getGridColumnsCount()
        window.addEventListener('resize', getGridColumnsCount)
        return () => window.removeEventListener('resize', getGridColumnsCount)
    }, [gridColumnsCount])

    const shown = data.projects.slice(0, gridColumnsCount)
    const hidden = data.projects.slice(gridColumnsCount, data.projects.length)
    const hiddenLen = hidden.length

    return (
        <motion.div
            layout
            className="projects-md "
            ref={ref}
            initial={false}
            animate={expanded ? 'enter' : 'exit'}
            variants={project_variants.stagger}
        >
            <>
                {shown.map((project, i) => {
                    return <Project key={i} project={project} />
                })}
                <AnimatePresence>
                    {expanded &&
                        hidden.map((project, i) => (
                            <Project
                                key={i}
                                project={project}
                                i={i}
                                len={hiddenLen}
                                hide={true}
                            />
                        ))}
                </AnimatePresence>
            </>
            <Md_Button expanded={expanded} setExpanded={setExpanded} />
        </motion.div>
    )
}

export default Project_Md
