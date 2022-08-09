import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'

const ExitButton = ({ onClick }) => {
    return (
        <motion.div
            className="exitBtn"
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
        >
            <HiX size={48} />
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
        <div className="card info-card" onClick={() => toggleCard()}>
            <h4>{card.title}</h4>
            <p>{card.content}</p>
            <div className="info-card-img">
                <div>
                    <Image src={card.SRC} alt={card.ALT} {...ImgProps} />
                </div>
            </div>
            <button onClick={() => toggleCard()}>
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
        <div className="card image-card">
            <div>
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
                    className="card-expanded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <ExitButton onClick={() => toggleCard()} />
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
