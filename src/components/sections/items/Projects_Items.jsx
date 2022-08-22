import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

import { config } from '@config'
import { FaGithub, FaLink } from 'react-icons/fa'
import Link from 'next/link'

const Show___Btn = ({ expanded, setExpanded }) => {
    return (
        <motion.div
            layout
            whileTap={{ scale: 0.95 }}
            onClick={() => setExpanded(!expanded)}
            className="styled-button relative mx-auto text-xl font-medium"
        >
            <>Show {expanded ? 'less' : 'more'}</>
            <motion.span
                className="absolute bottom-0 top-0 ml-2 text-5xl"
                initial={false}
                animate={{
                    rotate: expanded ? 270 : 90,
                    transition: { duration: 0.5, delay: expanded ? 0 : 0.5 },
                }}
            >
                &raquo;
            </motion.span>
        </motion.div>
    )
}

const Project_Card = ({ project, hide = false }) => {
    return (
        <motion.div
            layout
            key={project.id}
            className="relative my-2 w-full overflow-hidden px-5"
            initial={{ opacity: hide ? 0 : 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="flex-col-left relative cursor-default rounded-md bg-teal/10 p-3 font-medium md:p-5 ">
                <Image
                    src={project.data.src}
                    alt={`${project.data.title} Project Image`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    className="-z-10 opacity-25"
                />
                <h5 className="w-full pt-2 text-center font-semibold leading-5 tracking-tighter text-black md:pt-6 md:text-left">
                    {project.data.title}
                </h5>
                {/**TECH */}
                <div className="flex-center mb-1 w-full py-2 md:justify-start">
                    {project.data.tech.map((item, i) => {
                        return (
                            <p
                                className="border-l-[1px] border-teal px-[15px] text-sm last-of-type:border-r-[1px] md:mt-2 md:mb-4 md:text-base"
                                key={`${project.id}-tech-${i}`}
                            >
                                {item}
                            </p>
                        )
                    })}
                </div>
                {/**DESCRIPTION */}
                <div className="w-full rounded-md bg-white/75 p-2">
                    <p className="min-h-[50px] text-left text-sm md:min-h-[100px] md:text-base">
                        {project.data.brief}
                    </p>
                </div>
                <div className="flex-btw mt-2 h-[50px] w-full">
                    {project.data.github !== '' && (
                        <a
                            href={project.data.github}
                            target="_blank"
                            rel="noreferrer"
                            title={project.data.github}
                            className="styled-github p-3"
                        >
                            <FaGithub size={20} />
                        </a>
                    )}
                    <a
                        href={project.data.external}
                        target="_blank"
                        rel="noreferrer"
                        title={project.data.external}
                        className="styled-github bg-teal/50 p-3"
                    >
                        <FaLink size={20} />
                    </a>
                    <Link href={`/${project.id}`}>
                        <span
                            className="styled-button font-medium"
                            style={{ width: '150px' }}
                        >
                            Read More &raquo;
                        </span>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

const Projects_Sm = ({ projects }) => {
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

    // shown = projects.slice(0, 5)
    const hidden = projects.slice(3, projects.length)

    return (
        <motion.div
            layout
            className="flex-col-top"
            ref={ref}
            initial={false}
            animate={expanded ? 'enter' : 'exit'}
            variants={config.variants.stagger}
        >
            <>
                {projects.slice(0, 3).map((project, i) => {
                    return <Project_Card key={i} project={project} />
                })}
                <AnimatePresence>
                    {expanded &&
                        hidden.map((project, i) => (
                            <Project_Card
                                key={i}
                                project={project}
                                hide={true}
                            />
                        ))}
                </AnimatePresence>
            </>
            {hidden.length > 0 && (
                <Show___Btn expanded={expanded} setExpanded={setExpanded} />
            )}
        </motion.div>
    )
}

const Projects_Md = ({ projects, currentTab, tabNames }) => {
    const projectsByCat = projects.map((project) => project.data.category)

    const groupedTabs = []
    for (let i = 0; i < tabNames.length; i++) {
        let group = []
        for (let j = 0; j < projectsByCat.length; j++) {
            if (tabNames[i] == 'all') group.push(projects[i])
            if (tabNames[i] == projectsByCat[j]) group.push(projects[j])
        }
        groupedTabs.push(group)
    }

    return (
        <div className="mt-5 grid h-auto w-full grid-cols-2 gap-2 bg-transparent py-2 px-1">
            {groupedTabs[currentTab].map((project, i) => {
                return <Project_Card key={i} project={project} />
            })}
        </div>
    )
}

const Project_Items = {
    Sm: Projects_Sm,
    Md: Projects_Md,
}
export default Project_Items
