import Image from 'next/image'
import { motion } from 'framer-motion'
import { skillsVariants as variants } from '@motion'
import { useState } from 'react'

const ToolTip = ({ label }) => (
    <span
        className=" absolute left-1/2 -bottom-9 z-10 -translate-x-1/2 whitespace-nowrap rounded-[1rem/2rem] border-[1px] border-grey/40 bg-background px-3 py-[2px] text-base text-grey-10 opacity-0 shadow-xs group-hover:translate-y-1 group-hover:opacity-100 group-active:translate-y-1 group-active:opacity-100 dark:text-grey-90"
        style={{
            transition: 'opacity 0.4s ease-in, transform 0.3s 0.1s ease-out',
        }}
    >
        {label}
    </span>
)

// - li::after - CSS - styling in './styles/components.js'
const Skills = ({ skills, isMd }) => (
    <div id="about-skills" className="flex-col-top h-auto w-full text-center">
        <h6>Tech I&apos;ve worked with recently</h6>
        <ul className="relative mt-3 grid h-auto w-full grid-cols-2 gap-[12px_4px] sm:grid-cols-3 sm:rounded-4xl md:grid-cols-[repeat(auto-fit,_96px)] md:gap-[48px_16px] md:overflow-hidden md:py-12 md:px-8 md:shadow-inset">
            {isMd ? (
                <span className="absoluteFull -z-10 bg-gradient opacity-25 brightness-100 saturate-150" />
            ) : null}
            {skills.map(([title, src], i) => {
                return (
                    <motion.li
                        key={`about-skills-${i}`}
                        className="skill-item flex-center group relative mx-auto flex h-12 w-full translate-y-0 cursor-pointer overflow-hidden rounded-lg border-[1px] border-grey/40 bg-background/75 px-3 py-2 shadow-xs duration-350 ease-in-out  hover:translate-y-[-2.5px] active:translate-y-[-2.5px] sm:h-14 sm:w-auto sm:justify-center md:cursor-default md:overflow-visible md:p-2"
                    >
                        {isMd ? <ToolTip label={title} /> : null}
                        <p className="whitespace-nowrap text-sm italic tracking-tighter text-grey-40 dark:text-teal-10  sm:text-base sm:tracking-tight md:hidden">
                            {title}
                        </p>
                        {/***/}
                        <div className="relative h-full min-w-[48px]">
                            <div className="full relative z-0">
                                <Image
                                    key={`${title}-img`}
                                    src={src}
                                    alt={`about-skills-${title}-image`}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        {/***/}
                    </motion.li>
                )
            })}
        </ul>
    </div>
)

export default Skills
