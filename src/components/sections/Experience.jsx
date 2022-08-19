import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Section, Items } from '@components'
import Image from 'next/image'

const Experience = ({ ...data }) => {
    const experience = data.text.filter((obj) => obj.id == 'experience')[0]
    const [readMore, setReadMore] = useState(false)
    const [[currentTab, direction], setTab] = useState([0, 0])

    function handleTab(selectedTab) {
        let newDirection = selectedTab - currentTab
        setTab([selectedTab, newDirection])
    }
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
    const tabListProps = {
        tabNames: ['Summary', 'Jobs', 'Certifications'],
        currentTab: currentTab,
        handleTab: handleTab,
    }
    const Summary = (
        <div
            id="about-innerHTML"
            className="p-10 pt-5 text-white"
            dangerouslySetInnerHTML={{
                __html: experience.content,
            }}
        />
    )
    const Jobs = (
        <div className="flex-col-top h-full w-full p-10 pt-5 text-white">
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
                    <div className="flex-col-top full rounded-md bg-black/50 p-3 md:w-[75%] md:text-base">
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
        <ul className="w-full max-w-[767px] p-5  text-white">
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
                <Items.ImgCard {...cardProps} />
                <Items.InfoCard {...cardProps} />
            </div>

            <Items.ExpandedCard {...expandedProps}>
                <div className="full relative overflow-hidden">
                    {/** TAB LIST */}
                    <div className="absolute top-0 left-0 h-12 w-full">
                        <Items.TabList {...tabListProps} />
                    </div>
                    {/** TABS */}
                    <div className="absolute top-14 left-0 right-0 bottom-0 overflow-y-scroll">
                        <div className="mb-10 mt-5">
                            <AnimatePresence exitBeforeEnter custom={direction}>
                                {[0, 1, 2].map(
                                    (i) =>
                                        currentTab == i && (
                                            <Items.TabWrap
                                                key={currentTab}
                                                custom={direction}
                                            >
                                                {tabs[i]}
                                            </Items.TabWrap>
                                        )
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </Items.ExpandedCard>
        </Section>
    )
}
export default Experience
