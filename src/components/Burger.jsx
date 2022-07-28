import { motion } from 'framer-motion'
import { myVariants } from '@utils'

const [top, center, bottom] = [
    myVariants.burger.top,
    myVariants.burger.center,
    myVariants.burger.bottom,
]

const Burger = ({
    isOpen = false,
    size = 20,
    lineProps = null,
    transition = {
        type: 'spring',
        stiffness: 260,
        damping: 25,
    },
    ...props
}) => {
    const variant = isOpen ? 'opened' : 'closed'

    lineProps = {
        strokeWidth: 3,
        vectorEffect: 'non-scaling-stroke',
        initial: 'closed',
        animate: variant,
        transition,
        ...lineProps,
    }
    const unitSize = 4

    return (
        <motion.div className="burger">
            <motion.svg
                viewBox={`0 0 ${unitSize} ${unitSize}`}
                overflow="visible"
                preserveAspectRatio="none"
                width={size}
                height={size}
                {...props}
            >
                <motion.line
                    x1="0"
                    x2={unitSize}
                    y1="0"
                    y2="0"
                    variants={top}
                    {...lineProps}
                />
                <motion.line
                    x1="0"
                    x2={unitSize}
                    y1="2"
                    y2="2"
                    variants={center}
                    {...lineProps}
                />
                <motion.line
                    x1="0"
                    x2={unitSize}
                    y1="4"
                    y2="4"
                    variants={bottom}
                    {...lineProps}
                />
            </motion.svg>
        </motion.div>
    )
}

export default Burger
