import { useState } from 'react'
import { motion } from 'framer-motion'

import { experienceMotion as variants } from '@motion'
import { Accordion } from '@components'

const Content = ({ Job }) => (
    <ul className="full -z-10 p-4 md:pt-20">
        <motion.li
            className="flex-col-top font-semibold tracking-wide text-black underline-offset-8 md:absolute md:top-4 md:right-4 md:left-4 md:flex-row md:justify-center md:gap-x-10 md:underline"
            variants={variants.Content}
        >
            <span className="md:w-3/4">{Job.position}</span>
            <span className="whitespace-nowrap text-[0.7em]">{Job.dates}</span>
        </motion.li>
        {Job.description.map((item, i) => (
            <motion.li
                key={`job-desc-item-${i}`}
                className="listed-item mb-3 text-start text-black"
                variants={variants.Content}
                transition={{
                    ease: [0.5, 0.5, 0.5, 1],
                }}
            >
                {item}
            </motion.li>
        ))}
    </ul>
)

const Jobs = ({ ...props }) => {
    const [active, setActive] = useState(-1)

    return (
        <div className="flex-col-center w-full md:rounded-4xl md:rounded-tl-none md:rounded-br-none md:bg-slate-90 md:p-6">
            <h3>Work Experience</h3>
            <div className="flex-col-center w-full overflow-hidden px-2 sm:px-4 lg:py-4">
                {props.jobs.map((Job, index) => {
                    const isActive = index == active
                    return (
                        <Accordion
                            key={`job-${index}`}
                            data={Job}
                            isActive={isActive}
                            onClick={() => {
                                setActive(isActive ? -1 : index)
                            }}
                        >
                            <Content Job={Job} />
                        </Accordion>
                    )
                })}
            </div>
        </div>
    )
}
export default Jobs
