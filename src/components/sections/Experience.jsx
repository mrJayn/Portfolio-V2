import { useState } from 'react'
import { motion } from 'framer-motion'

import { Section, Items } from '@components'
import { config } from '@config'

const Experience = ({ ...data }) => {
    const content = data.text.filter((obj) => {
        return (obj.id = 'experience')
    })[0]
    const [readMore, setReadMore] = useState(false)
    const [infoProps, imgProps] = [
        {
            toggleCard: () => setReadMore(!readMore),
            card: config.cards.experience,
        },
        {
            src: config.cards.experience.SRC,
            alt: config.cards.experience.ALT,
        },
    ]
    return (
        <Section id="experience" fullScreen={false}>
            <div className="experience-cards">
                <Items.ImgCard {...imgProps} />
                <Items.InfoCard {...infoProps} />
            </div>
            <Items.ExpandedCard
                state={readMore}
                toggleCard={() => setReadMore(!readMore)}
            >
                <motion.div
                    className="experience-content"
                    initial="hide"
                    animate={readMore ? 'enter' : 'hidden'}
                    variants={config.variants.cards.stagger}
                ></motion.div>
            </Items.ExpandedCard>
        </Section>
    )
}
export default Experience
