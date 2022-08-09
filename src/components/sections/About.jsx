import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import { Section, Items, Skills } from '@components'
import data from '@data'
import { toggleScrolling } from '@utils'
import { config } from '@config'

const About = ({ props, infoProps = null, imgProps = null }) => {
    const [readMore, setReadMore] = useState(false)
    const animate_card = readMore ? 'enter' : 'hidden'

    const toggleCard = () => {
        setReadMore(!readMore)
        toggleScrolling(readMore)
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    infoProps = {
        toggleCard: toggleCard,
        card: data.cards.about,
        ...infoProps,
    }
    imgProps = {
        src: data.cards.about.SRC,
        alt: data.cards.about.ALT,
        ...imgProps,
    }

    return (
        <Section id="about" fullScreen={false} marginBottom={false}>
            <div className="about-cards">
                <Items.InfoCard {...infoProps} />
                <Items.ImgCard {...imgProps} />
            </div>

            <Items.ExpandedCard state={readMore} toggleCard={toggleCard}>
                <motion.div
                    className="about-content"
                    initial="hide"
                    animate={animate_card}
                    variants={config.variants.cards.stagger}
                >
                    {props.map(({ id, content }) => {
                        console.log(data)
                        return (
                            <div
                                className="left"
                                key={id}
                                dangerouslySetInnerHTML={{
                                    __html: content,
                                }}
                            />
                        )
                    })}

                    <div className="right">
                        <Skills />
                    </div>
                </motion.div>
            </Items.ExpandedCard>
        </Section>
    )
}

export default About
