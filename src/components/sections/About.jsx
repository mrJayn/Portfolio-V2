import { useState, useEffect } from 'react'

import Image from 'next/image'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { HiX } from 'react-icons/hi'

import { Experience, ReadMore, Section, Skills } from '@components'
import assets from '@assets'
import data from '@data'

const parent = {
    init: {
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
    init: {
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
const buttonVariants = {
    init: {
        y: '0px',
        opacity: 1,
        pointerEvents: 'all',
        transition: 'linear',
    },
    show: {
        y: '10px',
        opacity: 0,
        pointerEvents: 'none',
        transition: 'linear',
    },
}

const About = ({ VariantProps = null }) => {
    const [expanded, setExpanded] = useState(false)
    const [readMore, setReadMore] = useState(false)
    const [skills, setSkills] = useState(false)
    const [experience, SetExperience] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768 && expanded) {
                setExpanded(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [expanded])

    VariantProps = {
        parent: parent,
        child: child,
        ...VariantProps,
    }

    return (
        <Section id="about">
            <div className="about-content">
                <InfoCard
                    card={data.cards.about}
                    action={() => setReadMore(true)}
                />
                <ImageCard
                    SRC={data.cards.about.SRC}
                    ALT={data.cards.about.ALT}
                />
                <ImageCard
                    SRC={data.cards.skills.SRC}
                    ALT={data.cards.skills.ALT}
                />
                <InfoCard
                    card={data.cards.skills}
                    action={() => setReadMore(true)}
                />
                <InfoCard
                    card={data.cards.experience}
                    action={() => setReadMore(true)}
                />
                <ImageCard
                    SRC={data.cards.experience.SRC}
                    ALT={data.cards.experience.ALT}
                />
            </div>

            <ReadMore
                isOpen={readMore}
                close={() => setReadMore(false)}
                {...VariantProps}
            />

            <Skills
                isOpen={skills}
                close={() => setSkills(false)}
                {...VariantProps}
            />

            <Experience
                experience={experience}
                setExperience={SetExperience}
                {...VariantProps}
            />
        </Section>
    )
}

const InfoCard = ({ card, action }) => {
    return (
        <div className="card info-card" onClick={() => setReadMore(true)}>
            <h4>{card.title}</h4>
            <p>{card.content}</p>
            <CardImg SRC={card.SRC} ALT={card.ALT} />
            <button onClick={action}>
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
        <div className="cardImg">
            <div>
                <Image src={SRC} alt={ALT} {...ImgProps} />
            </div>
        </div>
    )
}

const ImageCard = ({ SRC, ALT, ImgProps = null }) => {
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

export default About
