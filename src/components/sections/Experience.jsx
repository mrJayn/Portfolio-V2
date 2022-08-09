import { useState } from 'react'

import { motion } from 'framer-motion'

import { Section, Items } from '@components'
import data from '@data'

import { toggleScrolling } from '@utils'
import { config } from '@config'

const Experience = (infoProps = null, imgProps = null) => {
    const [readMore, setReadMore] = useState(false)
    const animate_card = readMore ? 'enter' : 'hidden'

    const toggleCard = () => {
        toggleScrolling(readMore)
        setReadMore(!readMore)
    }

    infoProps = {
        toggleCard: toggleCard,
        card: data.cards.experience,
        ...infoProps,
    }
    imgProps = {
        src: data.cards.experience.SRC,
        alt: data.cards.experience.ALT,
        ...imgProps,
    }
    return (
        <Section id="experience" fullScreen={false}>
            <div className="experience-cards">
                <Items.ImgCard {...imgProps} />
                <Items.InfoCard {...infoProps} />
            </div>
            <Items.ExpandedCard state={readMore} toggleCard={toggleCard}>
                <motion.div
                    className="experience-content"
                    initial="hide"
                    animate={animate_card}
                    variants={config.variants.cards.stagger}
                ></motion.div>
            </Items.ExpandedCard>
        </Section>
    )
}
export default Experience
