import { motion } from 'framer-motion'
import { BurgerVariants } from '@motion'

const lineData = {
    top: { x1: 0, y1: 0, x2: 2, y2: 0, variant: 'outer', custom: 1 },
    midLeft: { x1: 0, y1: 1, x2: 1, y2: 1, variant: 'inner', custom: -1 },
    midRight: { x1: 1, y1: 1, x2: 2, y2: 1, variant: 'inner', custom: 1 },
    bottom: { x1: 0, y1: 2, x2: 2, y2: 2, variant: 'outer', custom: -1 },
}

const Burger = ({ ANIM, handleBurger }) => (
    <div
        className="flex-center absolute left-0 top-0 z-20 aspect-square h-full cursor-pointer lg:hidden"
        onClick={handleBurger}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2 2"
            className="h-8 select-none overflow-visible"
        >
            {Object.entries(lineData).map(
                ([key, { x1, y1, x2, y2, variant, custom }]) => (
                    <motion.line
                        key={key}
                        x1={x1}
                        x2={x2}
                        y1={y1}
                        y2={y2}
                        initial={false}
                        animate={ANIM}
                        variants={BurgerVariants[variant]}
                        custom={custom}
                        className="fill-none stroke-white stroke-[2.5] non-scaling linecap-round"
                    />
                )
            )}
        </svg>
    </div>
)
export default Burger
