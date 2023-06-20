import { motion } from 'framer-motion'
import { NavMotion } from '@motion'

const lineData = {
    top: { x1: 0, y1: 0, x2: 2, y2: 0, type: 'outer', custom: 1 },
    middle: { x1: 0, y1: 1, x2: 2, y2: 1, type: 'inner', custom: null },
    bottom: { x1: 0, y1: 2, x2: 2, y2: 2, type: 'outer', custom: -1 },
}
// back / exit / burg
const Burger = ({ anim, ...onclick }) => (
    <motion.div
        id="burger"
        className="flex-center absolute left-0 top-0 z-30 h-16 w-16 cursor-pointer lg:pointer-events-none lg:invisible"
        {...NavMotion.Burger.wrapProps}
        {...onclick}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2" className="absolute h-9 select-none overflow-visible">
            {Object.entries(lineData).map(([key, { x1, y1, x2, y2, type, custom }]) => (
                <motion.line
                    key={key}
                    x1={x1}
                    x2={x2}
                    y1={y1}
                    y2={y2}
                    initial="burg"
                    animate={anim}
                    variants={NavMotion.Burger[type]}
                    custom={custom}
                    className="fill-none"
                    strokeWidth={3.5}
                    strokeLinecap="butt"
                    vectorEffect="non-scaling-stroke"
                />
            ))}
        </svg>
    </motion.div>
)
export default Burger
