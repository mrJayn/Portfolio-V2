import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'

const Background = ({ isLoading }) => {
    const { scrollYProgress } = useScroll({})
    const ySpring = useSpring(scrollYProgress, {
        type: 'spring',
        stiffness: 400,
        damping: 100,
        restDelta: 0.001,
    })
    const y = useTransform(ySpring, (v) => `${v * -25}%`)

    return (
        <motion.div
            className="fixed inset-x-0 top-0 z-0 flex h-[150vh] justify-center"
            style={{
                y,
                background: 'linear-gradient(to right, #040406 0%, #000 100%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, ease: 'easeIn' }}
        >
            <Image
                src={`/assets/misc/andromedaGalaxy.jpg`}
                alt="The Andromeda Galaxy"
                layout="fill"
                objectFit="cover"
                className="opacity-10"
            />
            {/**
                 *  <motion.div
                id="earth"
                className="fixed inset-x-0 bottom-0 z-0 aspect-[2/1]"
                style={{
                    transformStyle: 'preserve-3d',
                    clipPath: 'ellipse(100% 75% at 77% 105%)',
                }}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={variants}
            >
                <Image
                    src={`/assets/misc/earth.jpg`}
                    alt="Nasa's photo of Earth's Atmosphere"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                />
            </motion.div>
                 */}
        </motion.div>
    )
}
export default Background
