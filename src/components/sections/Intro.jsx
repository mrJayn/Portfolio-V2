import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useCycle } from 'framer-motion'

import { Section } from '@components'
import { spring } from '@utils'

const parent = {
    init: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    show: {
        transition: {
            staggerChildren: 0.15,
            staggerDirection: 1,
        },
    },
}
const child = {
    init: {
        x: '-50px',
        opacity: 0,
        transition: spring,
    },
    show: {
        x: '0px',
        opacity: 1,
        transition: spring,
    },
}

const enableScroll = () => {
    document.querySelector('body').style.overflow = 'auto'
}

const cards = [
    { text: 'Engineer', color: '#c33' },
    { text: 'Data Analyst', color: '#3b3' },
    { text: 'Developer', color: '#ca0' },
    { text: 'Dork', color: '#33c' },
]
const Intro = () => {
    const [anim, setAnim] = useState('init')
    const [card, setCard] = useCycle(cards[0], cards[1], cards[2], cards[3])

    useEffect(() => {
        if (anim == 'init') {
            return
        }
        const interval = setInterval(() => {
            setCard()
        }, 4000)
        return () => clearInterval(interval)
    }, [setCard, anim])

    useEffect(() => {
        const timeout = window.innerWidth < 768 ? 100 : 1000
        setTimeout(() => {
            setAnim('show')
        }, timeout)
        enableScroll()
    }, [])
    // lg = 768px
    return (
        <Section id="intro">
            <motion.div
                className="intro-content"
                initial={false}
                animate={`${anim}`}
                variants={parent}
            >
                <motion.p variants={child}>Hello, my name is</motion.p>
                <motion.h1 variants={child}>Michael Jayne.</motion.h1>
                <motion.div variants={child}>
                    <Cards card={card} />
                </motion.div>
                <motion.p variants={child}>
                    I&apos;m a recent graduate with an exceptional ability to
                    learn new skills, and capitalize on what I&apos;ve learned
                    almost instantaneously.
                </motion.p>
                <motion.div variants={child}>
                    <Link href="#featured">Check out my projects</Link>
                </motion.div>
            </motion.div>
        </Section>
    )
}
const Cards = ({ card }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.h2
                key={card.text}
                initial={{
                    opacity: 0,
                    translateX: '-5vw',
                }}
                animate={{
                    opacity: 1,
                    translateX: '0px',
                    transition: { duration: 0.5, ease: 'easeOut' },
                }}
                exit={{
                    opacity: 0,
                    translateX: '5vw',
                    transition: { duration: 0.5, ease: 'easeIn' },
                }}
                style={{ color: `${card.color}` }}
            >
                {card.text}
            </motion.h2>
        </AnimatePresence>
    )
}
/**
 *  <AnimatePresence exitBeforeEnter>
                        <motion.h2
                            key={card.text}
                            className="card"
                            initial={{ opacity: 0, translateX: '-50px' }}
                            animate={{
                                opacity: 1,
                                translateX: '0px',
                                transition: { duration: 0.5 },
                            }}
                            exit={{ opacity: 0, translateX: '50px' }}
                            style={{ backgroundColor: card.color }}
                        >
                            {card.text}
                        </motion.h2>
                    </AnimatePresence>
 * 
 */
export default Intro
