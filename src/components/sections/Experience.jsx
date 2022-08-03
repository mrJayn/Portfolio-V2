import { useState } from 'react'
import Image from 'next/image'

import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'

import { Section, Cards } from '@components'
import { toggleScrolling } from '@utils'
import data from '@data'

const Experience = () => {
    const [readMore, setReadMore] = useState(false)
    const toggleReadMore = () => {
        toggleScrolling(readMore)
        setReadMore(!readMore)
    }
    return (
        <Section id="experience">
            <div className="experience-card">
                <Cards.InfoCard
                    card={data.cards.experience}
                    readMore={readMore}
                    toggleReadMore={toggleReadMore}
                />
                <Cards.ImgCard
                    SRC={data.cards.experience.SRC}
                    ALT={data.cards.experience.ALT}
                />
            </div>
            <AnimatePresence>
                {readMore && (
                    <motion.div
                        className="experience card-expanded"
                        id="exp"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="exitBtn"
                            onClick={toggleReadMore}
                            whileHover={{ scale: 1.1 }}
                            variants={Cards.child}
                        >
                            <HiX size={32} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    )
}
export default Experience
