import { motion } from 'framer-motion'
import { navVariants } from '@motion'

const Burger = ({ ANIM, handleBurger, size = 28 }) => {
    // ~Props~
    const lineProps = {
        strokeLinecap: 'round',
        vectorEffect: 'non-scaling-stroke',
        initial: false,
        animate: ANIM,
        transition: {
            type: 'spring',
            stiffness: 250,
            damping: 25,
        },
    }
    // ~Motion~
    const burgerVars = navVariants.Burger
    const variants = [burgerVars.Buns, burgerVars.Meat]

    // ~Line Points~ (x1,x2,y1,y2)
    const line_info = [
        [0, 2, 0, 0],
        [0, 1, 1, 1],
        [1, 2, 1, 1],
        [0, 2, 2, 2],
    ]

    return (
        <motion.div
            className="flex-center aspect-square h-full cursor-pointer text-grey-40 hover:text-white"
            onClick={handleBurger}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.svg
                viewBox="0 0 2 2"
                overflow="visible"
                width={size}
                height={size}
                whileTap={{ scale: 0.95 }}
                whileHover={{ stroke: '#66fcf1' }}
            >
                {line_info.map(([x1, x2, y1, y2], i) => {
                    const vars = i % 3 == 0 ? variants[0] : variants[1]
                    return (
                        <motion.line
                            key={`burger-component-${i}`}
                            className="fill-transparent stroke-current stroke-[3] transition-colors duration-500"
                            x1={x1}
                            x2={x2}
                            y1={y1}
                            y2={y2}
                            variants={vars}
                            custom={i % 2 == 0 ? 1 : -1}
                            {...lineProps}
                        />
                    )
                })}
            </motion.svg>
        </motion.div>
    )
}

export default Burger
