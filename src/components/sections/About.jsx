import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import { Section, Items, Skills } from '@components'
import data from '@data'

import { card_variants } from '@variants'
import { toggleScrolling } from '@utils'

const About = ({ infoProps = null, imgProps = null }) => {
    const [readMore, setReadMore] = useState(false)
    const animate_card = readMore ? 'show' : 'hide'

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
                    variants={card_variants.parent}
                >
                    <div className="left">
                        <motion.p variants={card_variants.child}>
                            Hello!
                            <br /> My name is Michael Jayne and I love
                            developing tools to make tedious tasks, simple.
                        </motion.p>
                        <motion.p variants={card_variants.child}>
                            My interests for problem solving began long before I
                            took up development, and as early as I can remember.
                            My first interactions with some type of development
                            were a CAD design course, and a robotics course both
                            offered at my highschool. However, when it came to
                            college, I chose a chemical engineering degree, not
                            quite yet knowing where I wanted to head in life.
                        </motion.p>
                        <motion.p layout variants={card_variants.child}>
                            After graduation, I still felt uncertain about what
                            lie ahead. And after about a month of thinking, I
                            thought I&apos;d give pharmaceutical development a
                            try, but after a little less than a year with a
                            related job and coursework, I also knew this
                            wasn&apos;t right for me.
                        </motion.p>
                        <motion.p variants={card_variants.child}>
                            I finally realized my love for development a litle
                            over a year ago. While developing a mediocre google
                            sheets app for tracking working out and
                            periodization for workout programs, I ended up
                            stumbling into google API... and then I just kept
                            going until I decided it was time to access some
                            real educational content. And since then, I&apos;ve
                            taken up the challenge to build, not only my
                            knowledge and undestanding of developement, but my
                            carrer as well.
                        </motion.p>
                    </div>
                    <div className="right">
                        <Skills />
                    </div>
                </motion.div>
            </Items.ExpandedCard>
        </Section>
    )
}

export default About
