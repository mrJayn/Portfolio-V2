import { createRef, useRef } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

import { useOnClickOutside } from 'src/hooks/useOnClickOutside'
import { toggleScrolling } from '@utils'

import { FaGithub } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'

const imgProps = {
    quality: 100,
    layout: 'fill',
    objectFit: 'cover',
    objectPosition: 'top',
}

const InfoCard = ({ toggleCard, isMd, ...data }) => {
    return (
        <div
            className="card flex-col-center relative w-full whitespace-pre-line"
            onClick={() => {
                toggleCard()
                toggleScrolling(false)
            }}
        >
            <h4 className="text-4xl font-semibold uppercase text-darkblack md:text-3xl">
                {data.data.section}
            </h4>
            <p
                className="my-2 text-center text-base font-medium text-black"
                dangerouslySetInnerHTML={{ __html: data.data.brief }}
            />

            <div className="flex-center relative w-full">
                <div className="relative m-3 aspect-[9/10] h-[200px] min-w-[320px] md:h-[190px] lg:h-[280px]">
                    <Image
                        src={data.data.src}
                        alt={data.data.alt}
                        {...imgProps}
                    />
                </div>
            </div>
            <p className="">{isMd ? 'Click' : 'Tap'} to Read More</p>
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
                        className="fixed top-0 left-0 right-0 bottom-0 z-50 mx-auto max-w-[1240px] overflow-y-scroll rounded-lg bg-black md:top-20 md:bottom-12 md:left-12 md:right-12"
                        ref={ref}
                        {...motionProps}
                    >
                        <div className="relative w-full p-4">
                            <ExitButton toggleCard={toggleCard} />
                            <div className="flex-col-center min-h-24 border-b-[1px] border-b-eee">
                                <h3>{props.title}</h3>
                                <h4>{props.subtitle}</h4>
                            </div>
                            {children}
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
            className="exitButtonAfter absolute top-5 right-5 z-10 aspect-square h-12 cursor-pointer rounded-md bg-grey text-[48px] text-red  md:left-5 md:h-14 md:text-[56px] lg:bg-black/25 "
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

const Items = {
    InfoCard: InfoCard,
    ImgCard: ImgCard,
    ExpandedCard: CardExpanded,
    ExitButton: ExitButton,
    GhLink: GitHubLink,
    SplitText: SplitText,
}

export default Items
