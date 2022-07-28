import { motion } from 'framer-motion'
import Image from 'next/image'

const InfoCard = ({ card, toggleReadMore }) => {
    return (
        <div className="card info-card" onClick={() => toggleReadMore()}>
            <h4>{card.title}</h4>
            <p>{card.content}</p>
            <CardImg SRC={card.SRC} ALT={card.ALT} />
            <button onClick={() => toggleReadMore()}>
                <motion.span whileTap={{ scale: 0.95 }}>
                    {card.btnText}
                </motion.span>
            </button>
        </div>
    )
}

const CardImg = ({ SRC, ALT, ImgProps = null }) => {
    ImgProps = {
        quality: 100,
        placeholder: blur,
        layout: 'fill',
        objectFit: 'scale-down',
        objectPosition: 'top',
        ...ImgProps,
    }
    return (
        <div className="info-card-img">
            <div>
                <Image src={SRC} alt={ALT} {...ImgProps} />
            </div>
        </div>
    )
}

const ImgCard = ({ SRC, ALT, ImgProps = null }) => {
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
                <Image src={SRC} alt={ALT} {...ImgProps} />
            </div>
        </div>
    )
}

const parent = {
    hide: {
        opacity: 0,
        height: 0,
        transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
    show: {
        opacity: 1,
        height: 'auto',
        transition: {
            staggerChildren: 0.07,
            staggerDirection: -1,
        },
    },
}
const child = {
    hide: {
        y: '-10px',
        opacity: 0,
        transition: 'linear',
    },
    show: {
        y: '0px',
        opacity: 1,
        transition: 'linear',
    },
}

const Cards = {
    InfoCard: InfoCard,
    ImgCard: ImgCard,
    parent: parent,
    child: child,
}

export default Cards
