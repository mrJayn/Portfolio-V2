import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { experienceMotion } from '@motion'

function Jobs({ jobs }) {
    const [active, setActive] = useState(-1)

    return (
        <div className="flex-col-left w-full justify-start gap-y-5">
            <h3>Work Experience</h3>
            {jobs.map(({ title, position, dates, description }, i) => (
                <div key={`${title}-${i}`} className="relative w-full">
                    <div
                        data-active={active === i}
                        className="group w-full cursor-pointer select-none overflow-hidden rounded-lg bg-grey-40 p-4 pr-10 text-black duration-250 ease-tween max-sm:flex-col-left sm:flex-btw data-active:bg-slate data-active:text-white data-inactive:opacity-50 lg:data-inactive:hover:text-black  lg:data-inactive:hover:opacity-100"
                        onClick={() => setActive(active === i ? -1 : i)}
                    >
                        <p>
                            {position} <br className="md:hidden" />
                            <span className="mr-1 text-[1.25em] font-semibold leading-[0] text-[#3d3b47]">@</span>
                            {title}
                        </p>
                        <span className="whitespace-nowrap text-min italic opacity-75">{dates}</span>
                        <div className="flex-center absolute -right-1.5 top-1 aspect-[1/1] w-14 text-[56px] leading-[1]">
                            {active === i ? '-' : '+'}
                        </div>
                    </div>
                    <AnimatePresence>
                        {active === i && (
                            <motion.div
                                key={`job-content-${i}`}
                                className="w-full overflow-hidden"
                                {...experienceMotion.Job}
                            >
                                <div className="m-2.5 rounded-md bg-grey-10/0 sm:px-2.5">
                                    {description.map((line, k) => (
                                        <p key={`jobDesc${k}`} className="mb-[0.5rem] leading-[1.5] last-of-type:mb-0">
                                            {'» ' + line}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}

function Certs({ certifications }) {
    const [active, setActive] = useState(0)
    const { title, description, href } = certifications[active]
    const formatTitle = (str) => str.replace(/&/i, '\n&').replace(/w\//i, '\nw/')

    function handleTabClick(i, e) {
        if (active === i) return
        if (screen.width >= 1024) return setActive(i)

        const scrollContainer = e.currentTarget.parentElement
        const { left, width } = e.currentTarget.getBoundingClientRect()
        const x = scrollContainer.scrollLeft + left + width / 2 - screen.width / 2

        scrollContainer.scrollTo(x, 0)
        setActive(i)
    }

    return (
        <div className="relative w-full max-lg:text-center">
            <h3>Certifications</h3>
            <div className="relative flex w-full max-lg:flex-col lg:h-[650px]">
                <ul className="max-lg:use-scrollbar z-10 touch-pan-x gap-2.5 overflow-y-hidden py-5 max-lg:flex-left lg:flex-col-left max-lg:-ml-4 max-lg:w-screen max-lg:overflow-x-scroll max-lg:scroll-smooth max-lg:px-[6ch] lg:min-w-fit lg:py-10">
                    {certifications.map(({ shortend }, i) => (
                        <motion.li
                            key={shortend}
                            className="styled-tab group h-[3rem] min-w-[18ch] max-lg:p-2.5 lg:min-w-[20ch] lg:translate-x-[-10%] lg:justify-start lg:rounded-r-md lg:pl-[15%] lg:pr-[5%] lg:text-start"
                            data-active={i === active}
                            onClick={(e) => handleTabClick(i, e)}
                        >
                            {formatTitle(shortend)}
                            <span className="lg:tab-decoration" />
                        </motion.li>
                    ))}
                    <div className="absolute inset-y-0 -left-2 z-30 w-2 rounded-r-full bg-slate-60 max-lg:hidden" />
                </ul>
                <div className="relative z-0 mt-2.5 h-[320px] w-full overflow-hidden lg:my-auto lg:h-2/3">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={title}
                            className="flex-col-center mx-auto max-w-[550px] gap-y-5 lg:items-start"
                            {...experienceMotion.Cert}
                        >
                            <h4 className="lg:whitespace-nowrap">{formatTitle(title)}</h4>
                            <p className="w-full leading-[1.5] lg:-ml-5 lg:indent-2">{description}</p>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer select-none whitespace-nowrap font-medium text-slate underline underline-offset-[3px] visited:text-[#b16580] lg:hover:text-slate-neon"
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

export default function Experience({ ...data }) {
    return (
        <div id="experience-content" className="flex-col-top relative mx-auto w-full max-w-[1000px] gap-24">
            <Jobs {...data} />
            <Certs {...data} />
        </div>
    )
}
