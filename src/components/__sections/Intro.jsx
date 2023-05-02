import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { introVariants } from '@motion'

// Software Engineer. A self-taught developer with an interest in Computer Science.
const springConfig = {
    stiffness: 400,
    damping: 90,
    mass: 0.25,
    restDelta: 0.001,
}

const Intro = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'center start'],
    })
    const ySpring = useSpring(scrollYProgress, springConfig)
    const opacity = useTransform(ySpring, [0, 0.75], [1, 0])
    return (
        <div
            className="flex-col-top h-[calc(100vh-56px)] w-full pt-[10vh]"
            ref={ref}
        >
            <div className="md:absolute md:inset-x-0 md:bottom-0">
                <motion.h1 style={{ opacity }}>Mike Jayne</motion.h1>
            </div>
            <motion.div className="my-4 flex" variants={introVariants.Text}>
                <span className="text-[2em]"> &darr;</span>
                <span>{`Chemical Engineer \nSelf-taught developer`}</span>
            </motion.div>
        </div>
    )
}

export default Intro
