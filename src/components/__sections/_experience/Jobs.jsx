import { useState } from 'react'
import { motion } from 'framer-motion'

import { experienceMotion as variants } from '@motion'
import { Accordion } from '@components'

const Content = ({ Job }) => (
    <ul className="full p-4">
        <motion.li
            className="flex-col-top mb-1 border-b-[1px]"
            variants={variants.Content}
        >
            <h6 className="min-h-[2em] text-center font-semibold tracking-md text-black">
                {Job.position}
            </h6>
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
        <div className="flex-col-center relative w-full">
            <h3 className="z-10">Work Experience</h3>
            <div className="flex-col-center z-10 w-full overflow-hidden p-2">
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
            <div className="absolute -inset-3 -bottom-6 rounded-3xl rounded-tl-none rounded-br-none bg-slate-90" />
        </div>
    )
}
export default Jobs
