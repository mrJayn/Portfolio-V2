import { navVariants } from '@motion'
import { AnimatePresence, motion } from 'framer-motion'
const variants = navVariants.BackButton

const BackBtn = ({ isHome, backToHome }) => (
    <AnimatePresence>
        {!isHome && (
            <motion.div
                className="fixed left-[calc(5vw-30px)]  top-16 z-50 aspect-[2/1.25] cursor-pointer overflow-hidden rounded-xl bg-nav/75 text-white/50 backdrop-blur-sm hover:text-white"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={variants.Wrapper}
                whileTap={{ scale: 0.9 }}
                onClick={backToHome}
            >
                {[0, 45, -45].map((deg, i) => (
                    <motion.span
                        key={`back-btn-line-${i}`}
                        className={`absolute top-[45%] left-1/4 h-1 rounded-full bg-current transition-colors duration-250 ease-in ${
                            deg == 0 ? 'ml-[3px] w-1/2' : 'w-1/4 origin-left'
                        }`}
                        variants={variants[deg == 0 ? 'LineA' : 'LineB']}
                        custom={deg}
                    />
                ))}
            </motion.div>
        )}
    </AnimatePresence>
)

export default BackBtn
