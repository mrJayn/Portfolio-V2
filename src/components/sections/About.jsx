import { useState, useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'

import { Section, Cards, Skills } from '@components'
import data from '@data'

import { toggleScrolling } from '@utils'

const About = () => {
    const [readMore, setReadMore] = useState(false)
    const animCard = readMore ? 'show' : 'hide'

    const toggleReadMore = () => {
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

    return (
        <Section id="about">
            <div className="about-card">
                <Cards.InfoCard
                    card={data.cards.about}
                    toggleReadMore={toggleReadMore}
                />
                <Cards.ImgCard
                    SRC={data.cards.about.SRC}
                    ALT={data.cards.about.ALT}
                />
            </div>

            <AnimatePresence initial={false}>
                {readMore && (
                    <motion.div
                        className="about card-expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="exitBtn"
                            onClick={() => toggleReadMore()}
                            whileHover={{ scale: 1.1 }}
                        >
                            <HiX size={32} />
                        </motion.div>

                        <motion.div
                            className="about-content"
                            initial="hide"
                            animate={animCard}
                            variants={Cards.parent}
                        >
                            <div className="left">
                                <motion.p variants={Cards.child}>
                                    Hello!
                                    <br /> My name is Michael Jayne and I love
                                    developing tools to make tedious tasks,
                                    simple.
                                </motion.p>
                                <motion.p variants={Cards.child}>
                                    My interests for problem solving began long
                                    before I took up development, and as early
                                    as I can remember. My first interactions
                                    with some type of development were a CAD
                                    design course, and a robotics course both
                                    offered at my highschool. However, when it
                                    came to college, I chose a chemical
                                    engineering degree, not quite yet knowing
                                    where I wanted to head in life.
                                </motion.p>
                                <motion.p layout variants={Cards.child}>
                                    After graduation, I still felt uncertain
                                    about what lie ahead. And after about a
                                    month of thinking, I thought I&apos;d give
                                    pharmaceutical development a try, but after
                                    a little less than a year with a related job
                                    and coursework, I also knew this wasn&apos;t
                                    right for me.
                                </motion.p>
                                <motion.p variants={Cards.child}>
                                    I finally realized my love for development a
                                    litle over a year ago. While developing a
                                    mediocre google sheets app for tracking
                                    working out and periodization for workout
                                    programs, I ended up stumbling into google
                                    API... and then I just kept going until I
                                    decided it was time to access some real
                                    educational content. And since then,
                                    I&apos;ve taken up the challenge to build,
                                    not only my knowledge and undestanding of
                                    developement, but my carrer as well.
                                </motion.p>
                            </div>
                            <div className="right">
                                <Skills />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    )
}

export default About
