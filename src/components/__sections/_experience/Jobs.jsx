import { useOnClickOutside } from '@hooks'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { experienceMotion } from '@motion'
import { Styled_Icon } from '@components'

const Jobs = ({ isMd, ...data }) => {
    // JOBS
    /** [ title, position, date, desc, _null  ] **/
    /** [   0,        1,          2,      3         4    ] **/
    // CERTS
    /** [ title, desc, website, href, src ] **/
    /** [   0       1          2         3      4   ] **/

    const pRM = useReducedMotion()
    const [activeItem, setActiveItem] = useState(0)
    const variants = experienceMotion.Jobs

    const Description = ({ idx }) =>
        data.job_data[idx][3].map((paragraph, i) => (
            <motion.p
                key={`job-text-${i}`}
                className="mb-2 indent-8"
                variants={isMd && variants.Items}
                custom={pRM}
            >
                {paragraph}
            </motion.p>
        ))

    return (
        <div className="flex-center relative w-full rounded-3xl p-2 md:min-h-[650px] md:justify-start md:bg-grey-10 lg:min-h-[500px] md:landscape:min-h-[500px]">
            {isMd ? (
                <h4 className="absolute -top-14 left-1/2 translate-x-[-50%]">
                    Work Experience
                </h4>
            ) : null}
            <div className="full flex-col-center md:w-[35%]">
                {data.job_data.map(([title, jobPosition, dates, _], i) => {
                    return (
                        <div
                            key={`job-${i}`}
                            className={`flex-col-center w-full space-y-2 rounded-3xl p-2 duration-250 ease-in first-of-type:mb-4 md:my-4 md:p-0.5 ${
                                isMd
                                    ? activeItem == i
                                        ? 'bg-teal/30'
                                        : 'bg-transparent'
                                    : 'bg-grey/25'
                            }`}
                        >
                            <div
                                className="flex-col-center w-full cursor-pointer space-y-2 rounded-3xl bg-grey-10 p-2 md:min-h-[150px] md:bg-grey-20/25"
                                style={{ gridArea: '1 / 1 / 1 / 1' }}
                                onClick={() => {
                                    if (isMd & (activeItem !== i))
                                        setActiveItem(i)
                                }}
                            >
                                <p className="whitespace-nowrap font-bold underline underline-offset-8">
                                    {title}
                                </p>
                                <p className="px-2 text-center text-sm">
                                    {jobPosition}
                                </p>
                                {isMd ? (
                                    <p className="mb-2 text-xs italic">
                                        {dates}
                                    </p>
                                ) : null}
                            </div>
                            {isMd ? null : <Description idx={i} />}
                        </div>
                    )
                })}
            </div>

            {isMd ? (
                <div className="absolute left-[37.5%] right-4 top-4 bottom-4 rounded-4xl rounded-tl-none rounded-br-none bg-background">
                    <AnimatePresence>
                        <motion.div
                            key={`job-content-${data.job_data[activeItem][0]}`}
                            className="absoluteFull flex-col-center px-8"
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            variants={variants.Container}
                        >
                            <Description idx={activeItem} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            ) : null}
        </div>
    )
}
export default Jobs
