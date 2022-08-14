import { createRef, useRef } from 'react'
import Image from 'next/image'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'

import { useOnClickOutside } from 'src/hooks/useOnClickOutside'
import { toggleScrolling } from '@utils'

import { FaGithub } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { useMediaQuery } from '@hooks'
import { config } from '@config'

const imgProps = {
    quality: 100,
    layout: 'fill',
    objectFit: 'cover',
    objectPosition: 'top',
}

const InfoCard = ({ toggleCard, ...data }) => {
    const isMd = useMediaQuery()
    return (
        <div
            className="card flex-col-center relative w-full cursor-pointer whitespace-pre-line"
            onClick={() => {
                toggleCard()
                toggleScrolling(false)
            }}
        >
            <h4 className="md:flex-bottom text-4xl font-semibold uppercase text-darkblack md:text-3xl">
                {data.data.section}
            </h4>
            <p
                className="my-2 text-center text-base font-medium text-black"
                dangerouslySetInnerHTML={{ __html: data.data.brief }}
            />

            <div className="flex-center shadow-xl shadow-grey/25 md:hidden">
                <div className="relative m-3 aspect-[9/10] h-[200px]  min-w-[320px] md:h-[190px] lg:h-[280px]">
                    <Image
                        src={data.data.src}
                        alt={data.data.alt}
                        {...imgProps}
                    />
                </div>
            </div>
            <h5
                className="flex-center styled-link min-h-[100px] tracking-tighter text-black/50 after:bg-black hover:text-black md:mt-16 md:min-h-0"
                style={{ transition: 'color 0.15s  linear' }}
            >
                {isMd ? 'Click' : 'Tap'} to Read More
            </h5>
        </div>
    )
}

const ImgCard = ({ ...data }) => {
    return (
        <div className="card md:flex-center relative hidden w-full">
            <div className="relative m-3 aspect-[9/10] max-h-[476px] min-w-[320px] md:max-h-[466px] lg:max-h-[556px]">
                <Image src={data.data.src} alt={data.data.alt} {...imgProps} />
            </div>
        </div>
    )
}

const CardExpanded = ({ children, toggleCard, ...props }) => {
    const ref = createRef()
    useOnClickOutside(ref, () => {
        toggleCard()
        toggleScrolling(true)
    })
    const motionProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    }
    return (
        <AnimatePresence initial={false}>
            {props.state && (
                <>
                    <motion.div
                        className="fixed top-0 left-0 right-0 bottom-0 z-[30] bg-black/50"
                        {...motionProps}
                    />
                    <motion.div
                        className="fixed top-0 left-0 right-0 bottom-0 z-50 mx-auto max-w-[1024px] overflow-hidden rounded-lg bg-charcoal shadow-2xl shadow-black md:top-14 md:bottom-4 md:left-12 md:right-12"
                        ref={ref}
                        {...motionProps}
                    >
                        <div className="relative m-4 h-full">
                            <ExitButton toggleCard={toggleCard} />
                            <h4 className="flex-bottom absolute top-0 left-0 h-32 w-full rounded-t-md border-b-2 border-b-neon/75 bg-black/75 pb-5 text-lightTeal md:h-20 md:pb-3">
                                {props.title}
                            </h4>
                            <div className="absolute top-32 left-0 right-0 bottom-0 md:top-20">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

const ExitButton = ({ toggleCard }) => {
    return (
        <motion.div
            className="exitButtonAfter absolute z-10 m-5 aspect-square h-12 cursor-pointer rounded-md text-[48px] text-red/75 md:m-2   md:h-14 md:text-[56px] "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
            onClick={() => {
                toggleCard()
                toggleScrolling(true)
            }}
        >
            <HiX />
        </motion.div>
    )
}

const GitHubLink = ({ className }) => {
    return (
        <a
            className={`absolute z-10 cursor-pointer rounded-md ${className}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="styled-element h-full w-full p-2">
                <FaGithub size={28} />
            </div>
        </a>
    )
}

const SplitText = ({ children, ...props }) => {
    let words = children.split(' ')
    return (
        <div className="flex-center w-full flex-wrap overflow-hidden ">
            {words.map((word, i) => (
                <motion.span
                    key={`splitText-word${i}`}
                    style={{ display: 'inline-block', willChange: 'transform' }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    {...props}
                >
                    {word + (i !== words.length - 1 ? '\u00A0' : '')}
                </motion.span>
            ))}
        </div>
    )
}

const TabList = ({ currentTab, handleTab, tabNames }) => {
    const tabNums = [...Array(tabNames.length).keys()]
    return (
        <LayoutGroup>
            <div className="flex-evenly w-full border-b-[1px] border-lightTeal/75 bg-black/75 shadow-xl shadow-black/75">
                {tabNums.map((tabNum) => (
                    <motion.div
                        key={tabNum}
                        className="flex-center relative mb-1 h-12 w-full cursor-pointer whitespace-nowrap rounded-md rounded-b-none p-2 text-center md:mx-5"
                        onClick={() => handleTab(tabNum)}
                        whileHover={{
                            backgroundColor: '#eeeeee25',
                        }}
                        transition={{ duration: 0.1 }}
                    >
                        <span className="font-medium capitalize tracking-wide text-white">
                            {tabNames[tabNum]}
                        </span>
                        {tabNum === currentTab ? (
                            <motion.div
                                className="absolute bottom-2 top-2 left-2 right-2 -z-10 rounded-md bg-neon/50 opacity-100"
                                layoutId="underline"
                            />
                        ) : null}
                    </motion.div>
                ))}
            </div>
        </LayoutGroup>
    )
}

const TabWrap = ({ children, ...tabProps }) => {
    tabProps = {
        variants: config.variants.slideshow,
        initial: 'enter',
        animate: 'display',
        exit: 'exit',
        ...tabProps,
    }
    return (
        <motion.div className=" md:flex-top full" {...tabProps}>
            {children}
        </motion.div>
    )
}

const Skills = ({ readMore, ...content }) => {
    const [skills, icons] = [content.data.skills, content.data.skills_icons]
    const motionProps = {
        initial: { opacity: 0, y: 10 },
        animate: readMore && { opacity: 1, y: 0 },
    }
    return (
        <div className="md:flex-col-center md:w-[30%] md:border-l-2 md:border-l-eee/50 md:pl-5">
            <Items.SplitText
                className="text-base font-medium text-lightTeal md:text-md"
                {...motionProps}
            >
                Tech I&apos;ve worked with recently
            </Items.SplitText>
            <ul className="mt-3 grid grid-cols-3 gap-x-2 border-t-2 border-t-eee/50 pt-3 text-xs md:grid-cols-1 md:text-base lg:grid-cols-2 lg:text-md">
                {skills.map((skill, i) => (
                    <motion.li
                        key={`skill-item-${i}`}
                        className="flex-left my-2 rounded bg-grey p-2"
                        transition={{ delay: 0.75 + i * 0.08 }}
                        {...motionProps}
                    >
                        <div>
                            <Image
                                src={icons[i]}
                                alt={`${skill}.png`}
                                layout="intrinsic"
                                height={15}
                                width={15}
                            />
                        </div>
                        <p className="pl-[5px] font-robotoMono text-xs font-normal italic text-neon md:text-sm">
                            {skill}
                        </p>
                    </motion.li>
                ))}
            </ul>
        </div>
    )
}

const Items = {
    InfoCard: InfoCard,
    ImgCard: ImgCard,
    ExpandedCard: CardExpanded,
    ExitButton: ExitButton,
    GhLink: GitHubLink,
    SplitText: SplitText,
    TabList: TabList,
    TabWrap: TabWrap,
    Skills: Skills,
}

export default Items
