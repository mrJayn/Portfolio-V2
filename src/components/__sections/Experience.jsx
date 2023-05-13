import { createRef, useEffect, useRef, useState } from 'react'
import { AnimatePresence, m, motion } from 'framer-motion'
import { Styled, SubSection } from '@components'
import { experienceMotion } from '@motion'

const PlusMinus = ({ isActive }) => (
    <div
        className="absolute right-4 text-transparent"
        style={{ textShadow: '0px 0px 0px #b16580' }}
    >
        &#10134;
        <motion.span
            className="absolute inset-0"
            style={{ textShadow: '0px 0px 0px #78859e' }}
            initial={false}
            animate={{ opacity: isActive ? 0 : 1 }}
            transition={{ duration: 0.25 }}
        >
            &#10133;
        </motion.span>
    </div>
)

const Jobs = ({ jobs }) => {
    const [active, setActive] = useState(-1)

    return (
        <SubSection
            title="Work Experience"
            className="flex-col-left h-[525px] max-w-[1000px] justify-start gap-y-4"
        >
            {jobs.map(({ title, position, dates, description }, i) => (
                <div key={`${title}-${i}`} className="relative w-full">
                    <div
                        className={`flex-col-left h-min w-full cursor-pointer select-none overflow-hidden rounded-lg p-4 duration-250 ease-tween ${
                            active === i
                                ? 'bg-slate text-white'
                                : ' bg-slate-5 lg:hover:bg-slate-10 lg:hover:text-slate-neon'
                        }`}
                        onClick={() => setActive(active === i ? -1 : i)}
                    >
                        <h4>{title}</h4>
                        <h5>{position}</h5>
                        <span className="text-min italic opacity-50">
                            {dates}
                        </span>
                        <PlusMinus isActive={active === i} />
                    </div>
                    <AnimatePresence>
                        {active === i && (
                            <motion.div
                                key={`job-content-${i}`}
                                className="styled-content mx-auto w-[97.5%] overflow-hidden p-0"
                                {...experienceMotion.Job}
                            >
                                {description.map((line, k) => (
                                    <p
                                        key={`jobDesc${k}`}
                                        className="px-4 py-1 text-start text-min leading-[1.25] first-of-type:pt-4 last-of-type:pb-4"
                                    >
                                        {'» ' + line}
                                    </p>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </SubSection>
    )
}

const Certs = ({ certifications }) => {
    const [active, setActive] = useState(0)
    const { title, description, src, href } = certifications[active]
    const formatTitle = (str) =>
        str.replace(/&/i, '\n&').replace(/w\//i, '\nw/')

    return (
        <SubSection
            title="Certifications"
            className="relative w-full max-md:text-center"
        >
            <div className="relative flex w-screen max-md:-ml-2 max-md:flex-col md:h-[575px] md:w-full md:overflow-hidden md:rounded-l-xl md:shadow-[-8px_0_#78859e]">
                <ul className="max-md:use-scrollbar z-10 flex h-24 gap-y-1.5 overflow-x-scroll max-md:pt-2 md:h-auto md:min-w-[225px] md:flex-col md:overflow-visible">
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
                <div className="content relative z-0 h-[550px] w-full overflow-hidden p-2 py-6 md:my-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={title}
                            className="flex-col-center mx-auto max-w-[512px] gap-y-2 text-center md:h-full md:justify-between"
                            {...experienceMotion.Cert}
                        >
                            <h4>{formatTitle(title)}</h4>
                            <p className="w-[44ch] max-w-full text-min leading-[1.5]">
                                {description}
                            </p>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer select-none whitespace-nowrap font-medium text-slate underline underline-offset-[3px] visited:text-rose-gold md:hover:text-slate-neon"
                            >
                                More Information
                            </a>
                            <div
                                className="styled-image relative aspect-[4/3] select-none max-md:w-[275px] md:w-[350px] lg:min-h-[300px] lg:w-[400px]"
                                style={{
                                    background: `center / cover no-repeat url(${src})`,
                                }}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </SubSection>
    )
}

const Experience = ({ data }) => (
    <div
        id="experience-content"
        className="flex-col-top relative mx-auto w-full max-w-[1024px]"
    >
        <Jobs {...data} />
        <Certs {...data} />
    </div>
)

export default Experience
