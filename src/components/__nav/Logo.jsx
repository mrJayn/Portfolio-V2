import { motion, useAnimationControls } from 'framer-motion'
import { navVariants } from '@motion'

const Logo = ({ handleLogo }) => {
    const controls = useAnimationControls()

    return (
        <motion.button
            key="logo"
            id="logo"
            className="flex-center ful group relative cursor-pointer select-none text-3xl font-semibold tracking-widest md:text-4xl"
            initial="hidden"
            animate="show"
            variants={navVariants.Logo}
            onAnimationStart={() => controls.start({ opacity: 0 })}
            onAnimationComplete={() => {
                controls.start({
                    opacity: 1,
                    transition: { type: 'spring', stiffness: 2500 },
                })
            }}
            onClick={handleLogo}
        >
            <span className="bg-gradient bg-clip-text leading-7 text-transparent">
                JYN
            </span>
            <motion.span
                className="absoluteFull -z-10 leading-8 text-background"
                style={{
                    textShadow:
                        '0px 0px 0px #fff4, 0.5px -0.5px 0px var(--theme-teal), -0.5px 0.5px 0px var(--theme-purple), 1.5px -1.5px 2.5px var(--theme-teal), -1.5px 1.5px 2.5px var(--theme-purple)',
                }}
                animate={controls}
            >
                JYN
            </motion.span>
        </motion.button>
    )
}

export default Logo
