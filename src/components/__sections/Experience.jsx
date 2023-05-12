import { createRef, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Styled, SubSection } from '@components'
import { experienceMotion } from '@motion'
const { JobWrap, JobItem, CertContent } = experienceMotion

const JobLabel = ({ active, setActive, i, title, position, dates }) => (
    <div
        className={`duration-250 ease-tween flex-col-left relative w-full cursor-pointer select-none rounded p-4 ${
            active === i
                ? 'bg-slate-20'
                : 'bg-grey-5 lg:hover:bg-slate-10 lg:hover:text-slate-neon'
        }`}
        onClick={() => setActive(active === i ? -1 : i)}
    >
        <h4>{title}</h4>
        <h5>{position}</h5>
        <span className="text-min italic text-grey lg:absolute lg:right-4">
            {dates}
        </span>
    </div>
)

const JobContent = ({ description, setActive }) => {
    const ref = createRef(null)
    useEffect(() => {
        const handleClick = (e) => {}
        window.addEventListener('click', handleClick)
        return () => window.removeEventListener('click', handleClick)
    }, [])
    return (
        <motion.div
            className="absolute top-0 z-20 h-[500px] overflow-hidden bg-white p-4 shadow-lg shadow-black"
            ref={ref}
            {...JobWrap}
        >
            {description.map((line, k) => (
                <motion.p
                    key={`jobDesc${k}`}
                    className="text-min py-1 text-start leading-[1.25] lg:py-2"
                    {...JobItem}
                >
                    {'» ' + line}
                </motion.p>
            ))}
        </motion.div>
    )
}

const Jobs = ({ jobs }) => {
    const [active, setActive] = useState(-1)

    return (
        <SubSection title="Work Experience" className="flex-col-top gap-y-4">
            {jobs.map((jobData, i) => {
                const { title } = jobData
                return (
                    <div
                        key={`${title}-${i}`}
                        className="styled-content relative w-full p-2"
                    >
                        <JobLabel
                            active={active}
                            setActive={setActive}
                            i={i}
                            {...jobData}
                        />
                        <AnimatePresence>
                            {active === i && (
                                <JobContent
                                    key={`job-content-${i}`}
                                    setActive={setActive}
                                    {...jobData}
                                />
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}
        </SubSection>
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
                <div className="content relative z-0 h-[550px] w-full overflow-hidden border-2 p-2 py-6 lg:my-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={title}
                            className="flex-col-center mx-auto max-w-[512px] gap-y-2 text-center lg:h-full lg:justify-between"
                            {...CertContent}
                        >
                            <h4>{formatTitle(title)}</h4>
                            <p className="text-min w-[44ch] max-w-full leading-[1.5]">
                                {description}
                            </p>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-root cursor-pointer select-none whitespace-nowrap font-medium text-slate underline underline-offset-[3px] visited:text-rose-gold lg:hover:text-slate-neon"
                            >
                                More Information
                            </a>
                            <div
                                className="styled-image relative aspect-[4/3] select-none max-lg:w-[275px] md:w-[350px] lg:min-h-[300px] lg:w-[400px]"
                                style={{
                                    background: `center / cover no-repeat url(${src})`,
                                }}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

const Experience = ({ data }) => (
    <div id="experience-content" className="flex-col-top relative w-full">
        <Jobs {...data} />
        <Certs {...data} />
    </div>
)

export default Experience
