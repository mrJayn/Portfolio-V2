import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { introVariants } from '@motion'
import { ssOffset } from '@config'
import { useRef } from 'react'

const springConfig = {
    stiffness: 400,
    damping: 90,
    mass: 0.25,
    restDelta: 0.001,
}

const Intro = ({ shouldAnimate }) => {
    const introRef = useRef(null)
    const { scrollYProgress } = useScroll({
        offset: ['0px 0px', `${ssOffset * 1}px 0px`],
    })
    const ySpring = useSpring(scrollYProgress, springConfig)

    const toLeftX = useTransform(ySpring, [0, 1], ['0vw', '-100vw'])
    const toRightX = useTransform(ySpring, [0, 1], ['0vw', '100vw'])

    const y = useTransform(ySpring, [0, 1], ['0%', '30%'])
    const scale = useTransform(ySpring, [0, 1], [1, 2.75])

    return (
        <div
            id="intro-content"
            className="flex-col-around relative mx-auto h-screen w-screen max-w-[1920px] overflow-hidden lg:px-8"
            style={{ perspective: '1000px', perspectiveOrigin: '50% 100%' }}
            ref={introRef}
            // h-[calc(100vh-64px)]
        >
            <motion.div
                className="absolute inset-y-[calc(10vh-32px)] inset-x-4 -z-10 mx-auto max-w-[1440px] lg:inset-x-0 lg:bottom-auto lg:top-[-33vh] lg:aspect-[2/3]"
                style={{
                    transformOrigin: '52.5% 50%',
                    background:
                        '50% 50% / 100% url(/assets/misc/picB.jpg) no-repeat',
                    translateZ: 100,
                    y: shouldAnimate ? y : 0,
                    scale: shouldAnimate ? scale : 0,
                }}
            />

            <h1 className="flex max-w-[1440px] flex-col max-lg:text-center lg:w-full">
                <motion.span
                    className="block lg:mr-auto"
                    style={{ x: shouldAnimate ? toLeftX : 0 }}
                >
                    Michael
                </motion.span>
                {` `}
                <motion.span
                    className="block lg:mr-[0.1ch] lg:ml-auto"
                    style={{ x: shouldAnimate ? toRightX : 0 }}
                >
                    Jayne
                </motion.span>
            </h1>

            <motion.div
                className="flex text-h1-sub text-white max-lg:leading-[1] lg:whitespace-nowrap"
                variants={introVariants.Text}
            >
                {`Software\nEngineer.`}
            </motion.div>
        </div>
    )
}
//   Software Engineer. A self-taught developer with an interest in Computer Science.
export default Intro
