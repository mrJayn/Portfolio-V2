import { useOnClickOutside } from '@hooks'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useRef, useState } from 'react'
import { experienceMotion } from '@motion'

const Jobs = ({ ...exp_data }) => {
    /** [ title, position, date, description ] **/
    /** [   0,        1,          2,          3           ] **/
    const pRM = useReducedMotion()
    const [active, setActive] = useState(-1)
    const variants = experienceMotion.Jobs
    const motionProps = {
        initial: 'hidden',
        animate: 'show',
        exit: 'exit',
        custom: pRM,
    }
    return (
        <ul className="w-full px-2 sm:px-4">
            {exp_data.job_data.map(([title, role, dates, info], i) => {
                const ACTIVE = active === i
                return (
                    <motion.li
                        layout
                        key={`job-${i}`}
                        className={`my-8 flex h-auto w-full flex-col items-start justify-center ${
                            ACTIVE &&
                            ' items-start justify-start duration-150 hover:brightness-95'
                        }`}
                        {...motionProps}
                    >
                        <motion.div
                            className="flex-col-center mb-4 h-min cursor-pointer space-y-4 rounded-md bg-grey-90 py-2 text-center dark:bg-grey-10 sm:py-4 md:py-6 md:px-4 md:text-start"
                            style={{ gridArea: '1 / 1 / 1 / 1' }}
                            onClick={() => setActive(active !== i ? i : -1)}
                            initial={false}
                            animate={ACTIVE ? 'opened' : 'closed'}
                            variants={variants.Card}
                        >
                            <div className="mr-auto h-full w-[48vw]">
                                <h5>{title}</h5>
                                <span className="my-2 hidden h-1 w-full rounded-full bg-gradient md:block" />
                                <p>{role}</p>
                                <p className="text-sm italic">{dates}</p>
                            </div>
                        </motion.div>

                        <AnimatePresence mode="wait">
                            {ACTIVE ? (
                                <motion.div
                                    key={`job-content-${i}`}
                                    variants={variants.active}
                                    {...motionProps}
                                >
                                    {info.map((paragraph, i) => (
                                        <motion.p
                                            layout
                                            key={`job-text-${i}`}
                                            className="mx-auto mb-2 h-full rounded-md indent-2  first-of-type:h-auto first-of-type:indent-4 md:mb-0 lg:p-2"
                                            style={{
                                                gridArea: `${i + 1} / ${
                                                    i == 0 ? 2 : 1
                                                } / ${i + 1} / -1`,
                                            }}
                                            variants={variants.activeItems}
                                        >
                                            {paragraph}
                                        </motion.p>
                                    ))}
                                </motion.div>
                            ) : null}
                        </AnimatePresence>
                    </motion.li>
                )
            })}
        </ul>
    )
}
export default Jobs

/**
                    <div className="flex-col-top full px-2 py-4 md:ml-2">
                        {info.map((paragraph, i) => (
                            <p key={`job-text-${i}`} className="pb-4 indent-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
 */
