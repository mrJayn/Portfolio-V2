import { AnimatePresence, motion } from 'framer-motion'
const container = {
    hidden: { opacity: 0 },
    enter: {
        opacity: [0, 1, 1, 0],
        transition: {
            type: 'linear',
            duration: 1.5,
            times: [0.33, 0.66, 1],
        },
    },
}
const items = {
    hidden: { x: 0 },
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
                        className="flex-center fixed top-0  left-0 z-10 h-screen  w-screen  bg-charcoal/50"
                        variants={container}
                        initial={'hidden'}
                        animate="enter"
                        onAnimationComplete={() => setIsAnimating(false)}
                    >
                        {[...Array(squares).keys()].map((i) => (
                            <motion.div
                                key={`square-${i}`}
                                className={`fixed top-[50%] left-[50%] z-10 h-3  w-3 translate-x-[-50%] translate-y-[-50%] rounded-sm md:h-6 md:w-6 ${
                                    i % 3 == 0 ? 'bg-teal' : 'bg-neon'
                                }`}
                                variants={items}
                                initial="hidden"
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
