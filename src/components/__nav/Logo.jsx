import { AnimatePresence, motion } from 'framer-motion'
import { navVariants } from '@motion'

const Logo = ({ logoState, logoDisplay, handleLogo }) => {
    const pathProps = {
        initial: 'hidden',
        animate: 'show',
    }
    return (
        <AnimatePresence mode="wait">
            {logoState ? (
                <motion.button
                    key="logo"
                    className="flex-center full group relative cursor-pointer select-none text-3xl font-medium md:ml-[2.5vw] md:font-normal"
                    initial="hidden"
                    animate={logoDisplay}
                    exit="exit"
                    variants={navVariants.Logo.Wrap}
                    onClick={handleLogo}
                >
                    <motion.span
                        className="relative px-1 duration-250 ease-in group-hover:text-white"
                        variants={navVariants.Logo.Letter}
                        {...pathProps}
                    >
                        JYN
                        <motion.span
                            className={`absoluteFull flex-center -z-10 bg-clip-text pr-[2px]  text-[1.1em] font-bold tracking-tighter text-transparent`}
                            variants={navVariants.Logo.Blur}
                            {...pathProps}
                        >
                            JYN
                        </motion.span>
                    </motion.span>
                </motion.button>
            ) : (
                <motion.button
                    key="return-to-home-btn"
                    className="full relative ml-[2.5vw] text-white"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={navVariants.Logo.Wrap}
                    onClick={handleLogo}
                >
                    BACK
                </motion.button>
            )}
        </AnimatePresence>
    )
}
export default Logo
