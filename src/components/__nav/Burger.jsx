import { motion } from 'framer-motion'
import { NavMotion } from '@motion'

const lineData = {
    top: { x1: 0, y1: 0, x2: 2, y2: 0, type: 'outer', custom: 1 },
    midLeft: { x1: 0, y1: 1, x2: 1, y2: 1, type: 'inner', custom: -1 },
    midRight: { x1: 1, y1: 1, x2: 2, y2: 1, type: 'inner', custom: 1 },
    bottom: { x1: 0, y1: 2, x2: 2, y2: 2, type: 'outer', custom: -1 },
}

const Burger = ({ anim, ...onclick }) => (
    <div
        id="burger"
        className="flex-center absolute left-0 top-0 z-30 h-16 w-16 cursor-pointer lg:pointer-events-none lg:invisible"
        {...onclick}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2 2"
            className="absolute h-8 w-8 select-none overflow-visible"
            preserveAspectRatio="xMidYMid"
        >
            {Object.entries(lineData).map(
                ([key, { x1, y1, x2, y2, type, custom }]) => (
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
                        className="fill-none stroke-[4] non-scaling"
                        strokeLinecap="butt"
                    />
                )
            )}
        </svg>
    </div>
)
export default Burger
