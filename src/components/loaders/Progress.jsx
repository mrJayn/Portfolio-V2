import { AnimatePresence, motion } from 'framer-motion'
const background = {
    hide: {
        scaleX: 0,
    },
    enter: {
        scaleX: [0, 1, 1, 0],
        originX: [0, 0, 1, 1],
        transition: {
            type: 'linear',
            duration: 1.75,
        },
    },
}
const items = {
    hide: {
        x: 0,
    },
    enter: (custom) => ({
        x: [
            custom % 2 == 0 ? '65vw' : '35vw',
            custom % 2 == 0 ? '54vw' : '46vw',
            custom % 2 == 0 ? '46vw' : '54vw',
            custom % 2 == 0 ? '35vw' : '65vw',
        ],
        y: [
            custom % 2 == 0 ? '-10vw' : '10vw',
            custom % 2 == 0 ? '4vw' : '-4vw',
            custom % 2 == 0 ? '-20vw' : '20vw',
        ],
        scale: [0, 0.5, 1, 0.5, 0],
        opacity: [0, 0.5, 1, 0.5, 0],
        rotateZ: [0, 35],
        transition: {
            type: 'linear',
            delay: custom * 0.025 + 0.1,
        },
    }),
}
const squares = [...Array(15).keys()]
const Progress = ({ isAnimating, setIsAnimating }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {isAnimating && (
                <>
                    <motion.div
                        className="progress-background"
                        variants={background}
                        initial="hide"
                        animate="enter"
                        custom={0}
                        onAnimationComplete={() => setIsAnimating(false)}
                    />
                    {squares.map((i) => (
                        <motion.div
                            key={`square-${i}`}
                            className={`progress-square ${
                                i % 3 == 0 ? 'bg-teal/50' : 'bg-neon'
                            }`}
                            variants={items}
                            initial="hide"
                            animate="enter"
                            custom={i}
                        />
                    ))}
                </>
            )}
        </AnimatePresence>
    )
}

export default Progress
