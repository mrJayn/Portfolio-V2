import { useState, useEffect, createRef } from 'react'
import Image from 'next/image'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'

import { useOnClickOutside } from 'src/hooks/useOnClickOutside'
import { SplitText, toggleScrolling } from '@utils'

import { FaGithub } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { config } from '@config'
import { theme } from 'tailwind.config'

const imgProps = {
    quality: 100,
    layout: 'fill',
    objectFit: 'cover',
    objectPosition: 'top',
}
const IsSmall = () => {
    const [isSm, setIsSm] = useState(false)
    useEffect(() => {
        function checkIfSm() {
            setIsSm(window.innerWidth < 768)
        }
        window.addEventListener('resize', checkIfSm())
        return () => window.removeEventListener('resize', checkIfSm())
    }, [isSm])
    return { isSm }
}
const InfoCard = ({ toggleCard, infoLoc, ...data }) => {
    const isSm = IsSmall()
    const InViewProps = {
        initial: {
            opacity: 0,
            x: infoLoc == null || isSm ? 0 : infoLoc == 'left' ? 500 : -500,
            backgroundColor: '#ffffffff',
        },
        whileInView: {
            opacity: 1,
            x: 0,
            backgroundColor: '#ffffff00',
            boxShadow: [
                '0px 0px 0px 0px black',
                `${infoLoc == 'left' ? '20px' : '-20px'} 0px 20px -20px black`,
                `${infoLoc == 'left' ? '7px' : '-7px'} 0px 5px -10px black`,
            ],
            transition: {
                default: { delay: 0.25, duration: 1, ease: 'easeOut' },
                opacity: { delay: 0.25, duration: 0.5 },
                backgroundColor: { delay: 2, duration: 1 },
                boxShadow: { duration: 1.75, delay: 0.5 },
            },
        },
    }

    return (
        <motion.div
            className="h-[500px] w-full select-none whitespace-pre-line rounded-lg md:h-[450px] lg:h-[580px]"
            onClick={() => {
                toggleCard()
                toggleScrolling(false)
            }}
            viewport={{ once: true }}
            {...InViewProps}
        >
            <div className="flex-col-center full relative rounded-lg  bg-gradient-to-t md:from-eee md:to-eee/25">
                <h4 className="md:flex-bottom text-4xl font-bold uppercase tracking-wide text-darkblack md:text-3xl lg:text-4xl">
                    {data.data.section}
                </h4>
                <p
                    className="mt-4 text-center text-base font-medium text-black/75 lg:text-lg"
                    dangerouslySetInnerHTML={{ __html: data.data.brief }}
                />

                <div className="flex-center shadow-xl shadow-grey/25 md:hidden">
                    <div className="relative m-3 aspect-[9/10] h-[200px]  min-w-[320px] md:h-[190px] lg:h-[280px]">
                        <Image
                            src={data.data.src}
                            alt={data.data.alt}
                            className="full rounded-md"
                            {...imgProps}
                        />
                    </div>
                </div>
                <motion.p
                    className="styled-link mt-8 text-4xl tracking-tighter text-black/75 after:bg-black hover:text-black md:mt-16 md:text-2xl md:font-medium md:text-black/50"
                    style={{ transition: 'color 0.15s  linear' }}
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 1.5 },
                    }}
                    viewport={{ once: true }}
                >
                    {isSm == 1 ? 'Tap' : 'Click'} to Read More
                </motion.p>
            </div>
        </motion.div>
    )
}
const ImgCard = ({ infoLoc, ...data }) => {
    const InViewProps = {
        initial: {
            opacity: 0,
            x: infoLoc == null ? 0 : infoLoc == 'left' ? '-100%' : '100%',
        },
        whileInView: {
            opacity: 1,
            x: 0,
            transition: {
                opacity: { delay: 0.75, duration: 1.25, ease: 'easeOut' },
                x: { delay: 0.5, duration: 1.5, ease: 'easeOut' },
            },
        },
    }
    return (
        <div className="md:flex-center relative -z-10 hidden h-[500px] w-full select-none  md:h-[450px] lg:h-[580px]">
            <motion.div
                className="relative my-10 h-[90%]  w-[90%]"
                viewport={{ once: true }}
                {...InViewProps}
            >
                <Image
                    src={data.data.src}
                    alt={data.data.alt}
                    className="full -z-50 rounded-md"
                    {...imgProps}
                />
            </motion.div>
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
            <SplitText
                className="text-base font-medium tracking-normal text-lightTeal md:text-[18px] lg:text-[24px]"
                {...motionProps}
            >
                Tech I&apos;ve worked with recently
            </SplitText>
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

const Styled_Button = ({
    text,
    href = null,
    action = null,
    anim,
    delay,
    ...btnprops
}) => {
    return (
        <motion.a
            href={href}
            onClick={action}
            className="bg-fff w-[250px] cursor-pointer select-none rounded-xl bg-eee/50 py-2 text-center text-md font-medium uppercase tracking-normal"
            style={{
                boxShadow: `0px 5px 10px -10px ${theme.colors.charcoal}`,
            }}
            initial={{ opacity: 0 }}
            animate={anim}
            whileHover={{
                translateY: -2.5,
                boxShadow: `0px 10px 15px -10px ${theme.colors.charcoal}`,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ opacity: { delay: delay * 0.5 } }}
            {...btnprops}
        >
            {text}
        </motion.a>
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

const GitHubLink = ({ href = null }) => {
    return (
        <motion.a href={href} className="gh-Link p-3">
            <FaGithub size={30} />
        </motion.a>
    )
}

const Items = {
    InfoCard: InfoCard,
    ImgCard: ImgCard,
    ExpandedCard: CardExpanded,
    GhLink: GitHubLink,
    TabList: TabList,
    TabWrap: TabWrap,
    Skills: Skills,
    Styled_Button: Styled_Button,
}

export default Items
