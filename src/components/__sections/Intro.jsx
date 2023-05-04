import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { introVariants } from '@motion'

// Software Engineer. A self-taught developer with an interest in Computer Science.
const springConfig = {
    stiffness: 1000,
    damping: 500,
    mass: 1,
    restDelta: 0.001,
}

const Intro = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })
    const ySpring = useSpring(scrollYProgress, springConfig)

    const y = useTransform(ySpring, [0, 1], ['0vh', '15vh'])
    const opacity = useTransform(ySpring, [0, 0.5], [1, 0])

    return (
        <div
            className="flex-col-top h-[calc(100vh-56px)] w-full pt-[10vh]"
            ref={ref}
        >
            <h1 className="lg:hidden">Mike Jayne</h1>
            <div className="absolute bottom-0 max-lg:hidden">
                <motion.h1 style={{ y, opacity }}>Mike Jayne</motion.h1>
            </div>
            <motion.div className="my-4 flex" variants={introVariants.Text}>
                <span className="text-[2em]"> &darr;</span>
                <span>{`Chemical Engineer \nSelf-taught developer`}</span>
            </motion.div>
        </div>
    )
}

export default Intro
