import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import { Section, Cards, Tabs } from '@components'

const Experience = ({ ...data }) => {
    const experience = data.text.filter((obj) => obj.id == 'experience')[0]
    const [readMore, setReadMore] = useState(false)
    const [[currentTab, direction], setTab] = useState([0, 0])

    const cardProps = {
        toggleCard: () => setReadMore(true),
        infoLoc: 'right',
        ...experience,
    }
    const expandedProps = {
        title: experience.data.title,
        subtitle: experience.data.subtitle,
        state: readMore,
        toggleCard: () => setReadMore(false),
    }
    const tabProps = {
        tabNames: ['Summary', 'Jobs', 'Certifications'],
        currentTab: currentTab,
        setTab: setTab,
    }

    const Summary = (
        <div
            id="about-innerHTML"
            className="py-5 px-2 text-white md:p-10 md:pt-5"
            dangerouslySetInnerHTML={{
                __html: experience.content,
            }}
        />
    )
    const Jobs = (
        <div className="flex-col-top px-2md:p-10 h-full w-full py-5 text-white md:pt-5">
            {experience.data.jobs.map((job, i) => (
                <div
                    key={`job-${i}`}
                    className="flex-col-top mb-4 h-auto w-full rounded-md bg-grey p-3 md:mb-8 md:flex-row"
                >
                    <div className="flex-col-top h-full w-full pt-3 md:w-[25%]">
                        {job.map((jobdata, i) => (
                            <p
                                key={`${jobdata[0]}-data-${i}`}
                                className="font-thin italic first-of-type:text-md first-of-type:font-semibold first-of-type:not-italic last-of-type:mb-4 md:mb-4"
                            >
                                {jobdata}
                            </p>
                        ))}
                    </div>
                    <div className="flex-col-top full md:text-basemd:p-10 rounded-md bg-black/50 p-3 md:w-[75%] md:pt-5">
                        {experience.data.jobs_desc[i].map((text, i) => (
                            <p key={`job-text-${i}`} className="pb-4 indent-4">
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
    const Certifications = (
        <ul className="w-full max-w-[767px] py-5 px-2  text-white">
            {experience.data.certs.map((cert, i) => (
                <li
                    className="flex-top mb-3 h-[100px] rounded-md bg-grey py-2 px-3 md:h-[200px]"
                    key={`job-${i}`}
                >
                    <div className="flex-left mr-[5%] h-full w-[60%] select-none md:before:p-5 md:before:text-2xl md:before:text-neon md:before:content-['\2605']">
                        <div className="flex-col-left">
                            <p className="text-base font-semibold md:text-lg">
                                {cert[0]}
                            </p>
                            <a
                                href={cert[2]}
                                rel="noreferrer"
                                target="_blank"
                                className="styled-link py-2 text-neon/75 hover:text-neon md:pt-4 md:pb-0"
                                style={{ transition: 'color 0.25s linear' }}
                            >
                                My Certificate
                            </a>
                            <a
                                href={cert[2]}
                                rel="noreferrer"
                                target="_blank"
                                className="styled-link text-neon/75 hover:text-neon"
                                style={{ transition: 'color 0.25s linear' }}
                            >
                                {cert[1]}
                            </a>
                        </div>
                    </div>
                    <a
                        href={experience.data.certs_imgs[i]}
                        target="_blank"
                        rel="noreferrer"
                        className="relative h-full w-[35%] opacity-50 duration-250 ease-in hover:opacity-100"
                    >
                        <Image
                            src={experience.data.certs_imgs[i]}
                            alt={`${cert} certification image`}
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
    const tabs = {
        0: Summary,
        1: Jobs,
        2: Certifications,
    }

    return (
        <Section id="experience" fullScreen={false}>
            <div className="full grid-cols-2 md:grid">
                <Cards.Img {...cardProps} />
                <Cards.Info {...cardProps} />
            </div>

            <Cards.Expanded {...expandedProps}>
                <div className="full relative overflow-hidden">
                    {/** TAB LIST */}
                    <div className="absolute top-0 left-0 h-12 w-full">
                        <Tabs.List {...tabProps} />
                    </div>
                    {/** TABS */}
                    <div className="absolute top-16 left-0 right-0 bottom-0 overflow-y-scroll">
                        <div className="mb-10 mt-5">
                            <AnimatePresence exitBeforeEnter custom={direction}>
                                {[
                                    ...Array(tabProps.tabNames.length).keys(),
                                ].map(
                                    (i) =>
                                        currentTab == i && (
                                            <Tabs.Item
                                                key={currentTab}
                                                custom={direction}
                                            >
                                                {tabs[i]}
                                            </Tabs.Item>
                                        )
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </Cards.Expanded>
        </Section>
    )
}
export default Experience
