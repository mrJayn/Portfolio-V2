import { AnimatePresence, motion } from 'framer-motion'
const container = {
    hide: {
        opacity: 0,
    },
    show: {
        opacity: [0, 1, 1, 0],
        transition: {
            type: 'linear',
            duration: 1.5,
            times: [0.33, 0.66, 1],
        },
    },
}
const items = {
    hide: {
        x: 0,
    },
    enter: (custom) => ({
        x: [0, custom % 2 == 0 ? 100 : -100, custom % 2 == 0 ? -100 : 100, 0],
        y: [0, custom % 2 == 0 ? -50 : 50, 0],
        opacity: [0.75, 1, 0.75],
        scale: [0, 1.5, 0],
        transition: {
            type: 'linear',
            duration: 0.5,
            delay: custom * 0.025 + 0.25,
            repeat: 1,
            repeatType: 'loop',
        },
    }),
}
const squares = 20

const Progress = ({ isAnimating, setIsAnimating }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {isAnimating && (
                <>
                    <motion.div
                        className="progress-container"
                        variants={container}
                        initial={'hide'}
                        animate="show"
                        onAnimationComplete={() => setIsAnimating(false)}
                    >
                        {[...Array(squares).keys()].map((i) => (
                            <motion.div
                                key={`square-${i}`}
                                className={`progress-square ${
                                    i % 3 == 0 ? 'bg-teal' : 'bg-neon'
                                }`}
                                variants={items}
                                initial="hide"
                                animate="enter"
                                custom={i}
                            />
                        ))}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Progress
