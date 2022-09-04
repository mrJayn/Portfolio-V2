import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

import { FaGithub, FaLink } from 'react-icons/fa'
import { HiChevronDoubleDown } from 'react-icons/hi'

import { Variants } from '@config'
import { styledBtn } from '@utils'

const Project_Card = ({ obj, hide = false, delay = 0 }) => {
    return (
        <motion.div
            layout
            key={obj.title}
            className="relative w-full overflow-hidden rounded-lg px-5 md:h-[300px] md:px-0 md:shadow-lg"
            initial={{ opacity: hide ? 0 : 1 }}
            animate={{ opacity: 1, transition: { delay: 0.25 + delay * 0.1 } }}
            exit={{ opacity: 0 }}
        >
            <div className="flex-col-btw md:full relative my-2 cursor-default rounded-lg bg-black/25 px-2 py-6 font-medium md:my-0 md:bg-eee/50 ">
                <Image
                    src={obj.data.src}
                    alt={`${obj.data.title} Project Image`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    className="-z-10 rounded-lg opacity-30"
                />
                {/**HEADING */}
                <div className="flex-col-center w-full">
                    <h5 className="font-bold leading-5 tracking-tight text-black md:text-left">
                        {obj.data.title}
                    </h5>
                    <div className="flex-center my-2 w-full rounded-md bg-eee/50 py-1 md:mb-0 md:mt-4 md:justify-start md:py-0">
                        {obj.data.tech.map((item, i) => {
                            return (
                                <p
                                    className="full border-r-[2px] border-teal text-center text-sm capitalize last-of-type:border-r-0 md:text-base"
                                    key={`${obj.id}-tech-${i}`}
                                >
                                    {item}
                                </p>
                            )
                        })}
                    </div>
                </div>
                {/**DESCRIPTION */}
                <div className="w-full rounded-md bg-white p-2">
                    <p className="min-h-[50px] text-left text-sm md:min-h-0 md:text-base">
                        {obj.data.brief}
                    </p>
                </div>
                <div className="flex-evenly mt-3 w-full">
                    {[
                        [obj.data.github, FaGithub],
                        [obj.data.external, FaLink],
                    ].map((item, i) => {
                        const Icon = item[1]
                        return (
                            item[0] !== '' && (
                                <motion.a
                                    key={i}
                                    href={item[0]}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={item[0]}
                                    style={{
                                        width: 'auto',
                                        padding: '12px',
                                    }}
                                    {...styledBtn}
                                >
                                    <Icon size={24} />
                                </motion.a>
                            )
                        )
                    })}
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

    const split = 4

    // shown = projects.slice(0, 5)
    const hidden = projects.slice(split, projects.length)

    return (
        <motion.div
            layout
            className="flex-col-top grid-cols-2 sm:grid"
            ref={ref}
            initial={false}
            animate={expanded ? 'enter' : 'exit'}
            variants={Variants.stagger}
        >
            <>
                {projects.slice(0, split).map((obj, i) => {
                    return <Project_Card key={i} obj={obj} />
                })}
                <AnimatePresence mode="popLayout">
                    {expanded &&
                        hidden.map((obj, i) => (
                            <Project_Card key={i} obj={obj} hide={true} />
                        ))}
                </AnimatePresence>
            </>
            {hidden.length > 0 && (
                <motion.button
                    layout
                    className="styled-button flex-center col-span-2 mx-auto"
                    style={{ width: '150px' }}
                    onClick={() => setExpanded(!expanded)}
                    whileTap={{ scale: 0.95 }}
                >
                    <HiChevronDoubleDown
                        className={`duration-250 ${
                            expanded ? 'rotate-180' : 'rotate-0 delay-500'
                        }`}
                        size={30}
                    />
                </motion.button>
            )}
        </motion.div>
    )
}

const Projects_Md = ({ projects, currentTab, tabNames }) => {
    const projectsByCat = projects.map((project) => project.data.category)

    const groupedTabs = []
    for (let i = 0; i < tabNames.length; i++) {
        let group = []
        if (i == 0) {
            group = projects
        } else {
            for (let j = 0; j < projectsByCat.length; j++) {
                if (tabNames[i] == projectsByCat[j]) group.push(projects[j])
            }
        }
        groupedTabs.push(group)
    }
    return (
        <div className="mt-5 grid h-auto w-full grid-cols-2 gap-x-6 gap-y-8 rounded-lg bg-transparent py-2 px-1 lg:grid-cols-3">
            {groupedTabs[currentTab].map((obj, i) => {
                return <Project_Card key={i} obj={obj} delay={i} hide={true} />
            })}
        </div>
    )
}

export { Projects_Sm, Projects_Md }
