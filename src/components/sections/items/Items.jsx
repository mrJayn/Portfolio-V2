import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { toggleScrolling } from '@utils'
import { config } from '@config'

const ExitButton = ({ toggleCard }) => {
    return (
        <motion.div
            className="exitButtonAfter fixed top-[3vh] left-[3vw] z-10 aspect-square h-12 cursor-pointer rounded-md bg-black/50 text-[48px] text-red md:top-24 md:left-24 md:h-14 md:text-[56px] lg:bg-black/25 "
            onClick={() => {
                toggleCard()
                toggleScrolling(true)
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.35 } }}
            exit={{ opacity: 0 }}
        >
            <HiX />
        </motion.div>
    )
}

const InfoCard = ({ card, toggleCard, ImgProps = null }) => {
    ImgProps = {
        quality: 100,
        placeholder: blur,
        layout: 'fill',
        objectFit: 'scale-down',
        objectPosition: 'top',
        ...ImgProps,
    }
    return (
        <div
            className="card flex-col-center relative w-full whitespace-pre-line"
            onClick={() => {
                toggleCard()
                toggleScrolling(false)
            }}
        >
            <h4 className="text-4xl font-semibold uppercase text-darkblack md:text-3xl">
                {card.title}
            </h4>
            <p className="relative z-10 mb-2 p-2 pt-0 text-center text-md font-medium text-black">
                {card.content}
            </p>
            <div className="flex-center relative w-full">
                <div className="relative m-3 aspect-[9/10] h-[200px] min-w-[320px] md:h-[190px] lg:h-[280px]">
                    <Image src={card.SRC} alt={card.ALT} {...ImgProps} />
                </div>
            </div>
            <button
                onClick={() => {
                    toggleCard()
                    toggleScrolling(false)
                }}
            >
                <motion.span whileTap={{ scale: 0.95 }}>
                    {card.btnText}
                </motion.span>
            </button>
        </div>
    )
}

const ImgCard = ({ src, alt, ImgProps = null }) => {
    ImgProps = {
        quality: 100,
        placeholder: blur,
        layout: 'fill',
        objectFit: 'cover',
        objectPosition: 'top',
        ...ImgProps,
    }
    return (
        <div className="card md:flex-center relative hidden w-full">
            <div className="relative m-3 aspect-[9/10] max-h-[476px] min-w-[320px] md:max-h-[466px] lg:max-h-[556px]">
                <Image src={src} alt={alt} {...ImgProps} />
            </div>
        </div>
    )
}

const CardExpanded = ({ children, state, toggleCard }) => {
    return (
        <AnimatePresence initial={false}>
            {state && (
                <motion.div
                    className="fixed top-0 left-0 right-0 bottom-0 z-50 mx-auto max-w-[1240px] overflow-y-scroll rounded-lg bg-black p-4 text-white md:top-16 md:left-12 md:right-12 md:bottom-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <ExitButton toggleCard={toggleCard} />
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
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

const Items = {
    InfoCard: InfoCard,
    ImgCard: ImgCard,
    ExpandedCard: CardExpanded,
    ExitButton: ExitButton,
    GhLink: GitHubLink,
}

export default Items
