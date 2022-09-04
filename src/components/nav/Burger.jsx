import { motion } from 'framer-motion'
import { burgerVariants } from '@config'

const Burger = ({ menuState, isHome, handleBurger }) => {
    const unitSize = 4
    const size = 24

    const lineProps = {
        strokeWidth: 3,
        vectorEffect: 'non-scaling-stroke',
        initial: 'closed',
        animate: !isHome ? 'return' : menuState ? 'opened' : 'closed',
        transition: {
            type: 'spring',
            stiffness: 260,
            damping: 25,
        },
        strokeLinecap: 'round',
        custom: unitSize,
    }

    return (
        <motion.div
            className="flex-center absolute left-2 top-0 z-50 h-12 w-12 cursor-pointer rounded bg-transparent stroke-teal duration-250 ease-in hover:stroke-neon md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => handleBurger(e)}
        >
            <motion.svg
                viewBox={`0 0 ${unitSize} ${unitSize}`}
                overflow="visible"
                preserveAspectRatio="xMidYMid meet"
                width={size}
                height={size}
            >
                <motion.line
                    x1="0"
                    x2={unitSize}
                    y1="0"
                    y2="0"
                    variants={burgerVariants.top}
                    {...lineProps}
                />
                <motion.line
                    x1="0"
                    x2={unitSize / 2}
                    y1={unitSize / 2}
                    y2={unitSize / 2}
                    variants={burgerVariants.center1}
                    {...lineProps}
                />
                <motion.line
                    x1={unitSize / 2}
                    x2={unitSize}
                    y1={unitSize / 2}
                    y2={unitSize / 2}
                    variants={burgerVariants.center2}
                    {...lineProps}
                />
                <motion.line
                    x1="0"
                    x2={unitSize}
                    y1={unitSize}
                    y2={unitSize}
                    variants={burgerVariants.bottom}
                    {...lineProps}
                />
            </motion.svg>
        </motion.div>
    )
}

export default Burger
