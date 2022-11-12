import { navVariants } from '@motion'
import { AnimatePresence, motion } from 'framer-motion'

const BackButton = ({ isHome, returnHome }) => {
    return (
        <AnimatePresence mode="wait">
            {!isHome ? (
                <motion.div
                    id="nav-back-btn"
                    className="group fixed top-16 left-[calc(5vw-30px)] z-50  h-16  w-24 cursor-pointer overflow-hidden rounded-xl"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    whileHover={{ x: -2.5, transition: { duration: 0.25 } }}
                    variants={navVariants.BackButton.Container}
                    onClick={returnHome}
                >
                    <motion.span
                        className=" absolute top-[calc(50%-1px)] left-[calc(50%-24px)] h-0.5 w-6 origin-left rounded-[999px] bg-white transition-[height] duration-250 ease-in group-hover:h-1"
                        variants={navVariants.BackButton.LineA}
                        custom={-45}
                    />
                    <motion.span
                        className="absolute top-[calc(50%-1px)] left-[calc(50%-24px)] h-0.5 w-6 origin-left rounded-[999px] bg-white transition-[height] duration-250 ease-in group-hover:h-1"
                        variants={navVariants.BackButton.LineA}
                        custom={45}
                    />
                    <motion.span
                        className="absolute top-[calc(50%-1px)] left-[calc(50%-24px)] h-0.5 w-12 origin-top rounded-[999px] bg-white transition-[height] duration-250 ease-in group-hover:h-1"
                        variants={navVariants.BackButton.LineB}
                    />
                </motion.div>
            ) : null}
        </AnimatePresence>
    )
}
export default BackButton
