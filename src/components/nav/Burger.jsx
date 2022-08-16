import { motion } from 'framer-motion'
import { config } from '@config'

const Burger = ({ state, isMain, ...props }) => {
    const unitSize = 4
    const size = 24
    const lineProps = {
        strokeWidth: 3,
        vectorEffect: 'non-scaling-stroke',
        initial: 'init',
        animate: isMain ? (state ? 'opened' : 'closed') : 'return',
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
            id="burger"
            className="flex-center absolute left-2 top-0 z-50  aspect-square h-full cursor-pointer rounded bg-transparent md:hidden"
            variants={config.variants.fade}
            data-returnlabel={!isMain}
        >
            <motion.svg
                viewBox={`0 0 ${unitSize} ${unitSize}`}
                overflow="visible"
                preserveAspectRatio="xMidYMid meet"
                width={size}
                height={size}
                {...props}
            >
                <motion.line
                    x1="0"
                    x2={unitSize}
                    y1="0"
                    y2="0"
                    variants={config.variants.burger.top}
                    {...lineProps}
                />
                <motion.line
                    x1="0"
                    x2={unitSize / 2}
                    y1={unitSize / 2}
                    y2={unitSize / 2}
                    variants={config.variants.burger.center1}
                    {...lineProps}
                />
                <motion.line
                    x1={unitSize / 2}
                    x2={unitSize}
                    y1={unitSize / 2}
                    y2={unitSize / 2}
                    variants={config.variants.burger.center2}
                    {...lineProps}
                />
                <motion.line
                    x1="0"
                    x2={unitSize}
                    y1={unitSize}
                    y2={unitSize}
                    variants={config.variants.burger.bottom}
                    {...lineProps}
                />
            </motion.svg>
        </motion.div>
    )
}

export default Burger
