import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Styled } from '@components'

const Education = ({ university, degree, dates }) => (
    <div className="relative w-full max-lg:text-center">
        <h3>Education</h3>
        <div className="subsection mx-auto max-w-[900px]">
            <h4>{university}</h4>
            <h5>{degree}</h5>
            <span className="text-min italic text-grey">{dates}</span>
        </div>
    </div>
)

const Jobs = ({ jobs }) => {
    const [active, setActive] = useState(-1)

    return (
        <div className="relative w-full max-lg:text-center">
            <h3>Work Experience</h3>
            <div className="mx-auto flex h-[525px] w-full max-w-[900px] flex-col gap-y-4 overflow-hidden">
                {jobs.map(({ title, position, description, dates }, i) => {
                    const isActive = active === i
                    return (
                        <motion.div
                            key={`${title}-${i}`}
                            layout
                            className={`subsection relative w-full cursor-pointer overflow-hidden rounded-lg text-center duration-150 ease-tween ${
                                isActive ? 'bg-slate-10' : ' hover:bg-slate-5'
                            }`}
                            onClick={() => setActive(isActive ? -1 : i)}
                        >
                            <h4>{title}</h4>
                            <h5>{position}</h5>
                            <span className="text-min italic text-grey">
                                {dates}
                            </span>
                            <motion.ul
                                className="mx-auto max-w-[800px] overflow-hidden bg-white"
                                initial={false}
                                animate={
                                    isActive
                                        ? { opacity: 1, height: 'auto' }
                                        : { opacity: 0, height: 0 }
                                }
                                transition={{
                                    duration: 0.25,
                                    ease: 'easeIn',
                                }}
                            >
                                {description.map((line, k) => (
                                    <li
                                        key={`jobDesc${k}`}
                                        className="py-2 px-4 text-start text-min leading-1.25 before:mr-1 before:text-[1.125em] before:leading-0.5 before:content-['»']"
                                    >
                                        {line}
                                    </li>
                                ))}
                            </motion.ul>

                            <div className=" absolute inset-2 -z-10 bg-white" />
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

const Certs = ({ certifications }) => {
    const [active, setActive] = useState(0)
    const { title, description, src, href } = certifications[active]
    const formatTitle = (str) =>
        str.replace(/&/i, '\n&').replace(/w\//i, '\nw/')

    return (
        <div className="relative w-full max-lg:text-center">
            <h3>Certifications</h3>
            <div className="relative flex w-full max-lg:flex-col lg:h-[575px] lg:overflow-hidden lg:rounded-l-xl lg:shadow-[-8px_0_#a3b3d0]">
                <ul className="max-lg:use-scrollbar z-10 flex h-24 gap-y-1.5 overflow-x-scroll max-lg:pt-2 lg:h-auto lg:min-w-[225px] lg:flex-col lg:overflow-visible">
                    {certifications.map((data, i) => (
                        <Styled.Indicators
                            key={data.title}
                            isActive={i === active}
                            handleClick={() => setActive(i)}
                        >
                            {formatTitle(data.title)}
                        </Styled.Indicators>
                    ))}
                </ul>
                <div className="subsection relative z-0 h-[550px] w-full overflow-hidden p-2 py-6 lg:my-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={title}
                            className="flex-col-center mx-auto max-w-[512px] text-center lg:h-full lg:justify-between"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <h4>{formatTitle(title)}</h4>
                            <p className="mt-2 w-[44ch] max-w-full text-min leading-1.25">
                                {description}
                            </p>
                            <div
                                className="relative my-4 aspect-[4/3] select-none overflow-hidden shadow-md shadow-black max-lg:w-[275px] md:w-[350px] lg:min-h-[300px] lg:w-[400px]"
                                style={{
                                    background: `center / cover no-repeat url(${src})`,
                                }}
                            />
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer select-none whitespace-nowrap text-root font-medium text-slate underline underline-offset-[3px] lg:hover:text-slate-neon"
                            >
                                More Information
                            </a>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

const Experience = ({ data }) => (
    <>
        <h2>Experience</h2>
        <Education {...data.education} />
        <Jobs {...data} />
        <Certs {...data} />
    </>
)

export default Experience
