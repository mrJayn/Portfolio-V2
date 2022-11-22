import { navVariants } from '@motion'
import { AnimatePresence, motion } from 'framer-motion'

const AVars = navVariants.BackButton.LineA
const BVars = navVariants.BackButton.LineB

const BackButton = ({ isHome, backToHome }) => {
    return (
        <AnimatePresence>
            {!isHome ? (
                <motion.div
                    key="backToHome-btn"
                    className="group fixed top-16 left-[calc(5vw-30px)] z-50  h-16  w-24 cursor-pointer overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                        hidden: {
                            opacity: 0,
                            transition: { when: 'afterChildren' },
                        },
                        show: { opacity: 1 },
                    }}
                    onClick={backToHome}
                >
                    {[0, 45, -45].map((i) => (
                        <motion.span
                            key={`back-btn-line-${i}`}
                            className={`absolute top-1/2 left-1/4 h-1 rounded-full bg-white/50 transition-[background-color] duration-250 ease-in group-hover:bg-white/100 ${
                                i == 0
                                    ? 'ml-[3px] w-12'
                                    : 'w-[28px] origin-left'
                            }`}
                            variants={i == 0 ? AVars : BVars}
                            custom={i}
                        />
                    ))}
                </motion.div>
            ) : null}
        </AnimatePresence>
    )
}
export default BackButton
