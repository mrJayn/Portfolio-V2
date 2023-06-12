import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Styled } from '@components'
import { experienceMotion } from '@motion'

const PlusMinus = ({ isActive }) => (
    <div className="flex-center absolute -right-1.5 top-1 aspect-[1/1] w-14">
        <div
            data-active={isActive}
            className="absolute h-[3px] w-1/3 rounded-full data-active:bg-red data-inactive:bg-slate-70"
        />
        <div
            className="absolute h-1/3 w-[3px] rounded-full bg-slate-70"
            style={{ textShadow: '0px 0px 0px #78859e', opacity: isActive ? 0 : 1 }}
        />
    </div>
)

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
                            <span className="mr-1 text-[1.25em] font-semibold leading-[0] text-purple-90">@</span>
                            {title}
                        </p>
                        <span className="whitespace-nowrap text-min italic opacity-75">{dates}</span>
                        <PlusMinus isActive={active === i} />
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
    const scrollContainer = useRef(null)
    const [active, setActive] = useState(0)
    const { title, description, href } = certifications[active]

    function formatTitle(str) {
        return str.replace(/&/i, '\n&').replace(/w\//i, '\nw/')
    }

    function handleTabClick(i, e) {
        if (active === i) return
        if (screen.width >= 1024) return setActive(i)
        const { left, width } = e.currentTarget.getBoundingClientRect()
        const x = scrollContainer.current.scrollLeft + left + width / 2 - screen.width / 2
        scrollContainer.current.scrollTo(x, 0)
        setActive(i)
    }

    return (
        <div className="relative w-full max-lg:text-center">
            <h3>Certifications</h3>
            <div className="relative mt-5 flex w-full overflow-hidden max-lg:flex-col lg:h-[575px] lg:rounded-l-xl lg:shadow-[-8px_0_#78859e]">
                <ul
                    className="max-lg:use-scrollbar z-10 touch-pan-x gap-0.5 overflow-y-hidden overflow-x-scroll max-lg:flex-left lg:flex-col-left max-lg:h-24 max-lg:scroll-smooth lg:min-w-[20ch] lg:overflow-x-visible"
                    ref={scrollContainer}
                >
                    {certifications.map((data, i) => (
                        <Styled.Tabs
                            key={data.title}
                            isActive={i === active}
                            className="min-w-[16ch] leading-[0.9] tracking-[-0.025em]"
                            toVerticalAt={1024}
                            onClick={(e) => handleTabClick(i, e)}
                        >
                            {formatTitle(data.title)}
                        </Styled.Tabs>
                    ))}
                </ul>
                <div className="relative z-0 h-[320px] w-full overflow-hidden p-2 py-6 lg:my-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={title}
                            className="flex-col-center mx-auto max-w-[500px] gap-y-4 lg:justify-start"
                            {...experienceMotion.Cert}
                        >
                            <h4>{formatTitle(title)}</h4>
                            <p className="w-full leading-[1.5]">{description}</p>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer select-none whitespace-nowrap font-medium text-slate underline underline-offset-[3px] visited:text-rose-gold lg:hover:text-slate-neon"
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
