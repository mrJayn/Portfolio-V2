import { createRef, useEffect, useRef, useState } from 'react'
import { AnimatePresence, m, motion } from 'framer-motion'
import { Styled, SubSection } from '@components'
import { experienceMotion } from '@motion'

const PlusMinus = ({ isActive }) => (
    <div className="flex-center absolute right-0 top-0 aspect-[1/1] w-12">
        <div
            data-active={isActive}
            className="absolute h-[3px] w-1/3 rounded-full  duration-250 ease-in data-active:bg-red data-inactive:bg-slate"
        />
        <motion.div
            className="absolute h-1/3 w-[3px] rounded-full bg-slate"
            style={{ textShadow: '0px 0px 0px #78859e' }}
            initial={false}
            animate={{ opacity: isActive ? 0 : 1 }}
            transition={{ duration: 0.25, ease: 'easeIn' }}
        />
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
                        data-active={active === i}
                        className="styled-content flex-col-left w-full cursor-pointer select-none overflow-hidden duration-250 ease-tween data-active:text-black data-active:shadow-[inset_0_0_0_2px_#78859e] data-inactive:bg-grey-10 data-inactive:text-grey-40 data-inactive:shadow-[inset_0_0_0_2px_#0003] data-inactive:hover:shadow-[inset_0_0_0_2px_#0005] lg:data-inactive:hover:bg-grey-20  lg:data-inactive:hover:text-black"
                        onClick={() => setActive(active === i ? -1 : i)}
                    >
                        <h4>{title}</h4>
                        <h5>{position}</h5>
                        <span className="text-min italic opacity-75">
                            {dates}
                        </span>
                        <PlusMinus isActive={active === i} />
                        <AnimatePresence>
                            {active === i && (
                                <motion.div
                                    key={`job-content-${i}`}
                                    className="w-full overflow-hidden"
                                    {...experienceMotion.Job}
                                >
                                    {description.map((line, k) => (
                                        <p
                                            key={`jobDesc${k}`}
                                            className="my-2 text-min"
                                        >
                                            {'» ' + line}
                                        </p>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            ))}
        </SubSection>
    )
}

const Certs = ({ certifications }) => {
    const [active, setActive] = useState(0)
    const { title, description, src, href } = certifications[active]

    function formatTitle(str) {
        return str.replace(/&/i, '\n&').replace(/w\//i, '\nw/')
    }

    return (
        <SubSection
            title="Certifications"
            className="relative w-full max-md:text-center"
        >
            <div className="relative flex w-full overflow-hidden max-md:flex-col max-md:pt-4 md:mt-4 md:h-[575px] md:w-full md:rounded-l-xl md:shadow-[-8px_0_#78859e]">
                <ul className="max-md:use-scrollbar z-10 touch-pan-x gap-0.5 overflow-y-hidden overflow-x-scroll max-md:flex-left max-md:h-24 md:flex-col-left md:min-w-[20ch] md:overflow-x-visible">
                    {certifications.map((data, i) => (
                        <Styled.Tabs
                            key={data.title}
                            isActive={i === active}
                            className="min-w-[16ch] leading-[1.1] -tracking-md "
                            toVerticalAt={768}
                            onClick={() => setActive(i)}
                        >
                            {formatTitle(data.title)}
                        </Styled.Tabs>
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

const Experience = ({ ...data }) => (
    <div
        id="experience-content"
        className="flex-col-top relative mx-auto w-full max-w-[1024px] px-2"
    >
        <Jobs {...data} />
        <Certs {...data} />
    </div>
)

export default Experience
