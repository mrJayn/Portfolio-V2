import { motion } from 'framer-motion'
import { burgerVariants } from '@config'

const Burger = ({ menuState, isHome, handleBurger }) => {
    const size = 20

    const lineProps = {
        fill: 'none',
        stroke: '#ddd',
        strokeWidth: 3,
        strokeLinecap: 'round',
        vectorEffect: 'non-scaling-stroke',
        initial: false,
        animate: !isHome ? 'return' : menuState ? 'opened' : 'closed',
        transition: {
            type: 'spring',
            stiffness: 260,
            damping: 25,
        },
    }

    return (
        <motion.div
            className="flex-center absolute left-2 top-0 z-10 h-12 w-12 cursor-pointer md:pointer-events-none md:invisible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => handleBurger(e)}
        >
            <motion.svg
                viewBox="0 0 2 2"
                overflow="visible"
                width={size}
                height={size}
                whileTap={{ scale: 0.95 }}
                whileHover={{ stroke: '#66fcf1' }}
            >
                <motion.line
                    x1={0}
                    x2={2}
                    y1={0}
                    y2={0}
                    variants={burgerVariants.buns}
                    {...lineProps}
                />
                <motion.line
                    x1={0}
                    x2={1}
                    y1={1}
                    y2={1}
                    variants={burgerVariants.meat}
                    {...lineProps}
                />
                <motion.line
                    x1={1}
                    x2={2}
                    y1={1}
                    y2={1}
                    variants={burgerVariants.meat}
                    custom={1}
                    {...lineProps}
                />
                <motion.line
                    x1={0}
                    x2={2}
                    y1={2}
                    y2={2}
                    custom={-1}
                    variants={burgerVariants.buns}
                    {...lineProps}
                />
            </motion.svg>
        </motion.div>
    )
}

export default Burger
