import { useState } from 'react'

import { motion } from 'framer-motion'

import { Section, Items } from '@components'
import data from '@data'

import { card_variants } from '@variants'
import { toggleScrolling } from '@utils'

const Experience = (infoProps = null, imgProps = null) => {
    const [readMore, setReadMore] = useState(false)
    const animate_card = readMore ? 'show' : 'hide'

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
                    variants={card_variants.parent}
                ></motion.div>
            </Items.ExpandedCard>
        </Section>
    )
}
export default Experience
