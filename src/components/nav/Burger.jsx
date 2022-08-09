import { motion } from 'framer-motion'
import { config } from '@config'
import { burgerUnitSize, burgerSize } from '@utils'

const Burger = ({ state, isMain, lineProps = null, ...props }) => {
    const [unitSize, size, variants, burgerVariants, anim] = [
        burgerUnitSize,
        burgerSize,
        config.variants,
        config.variants.burger,
        isMain ? (state ? 'opened' : 'closed') : 'return',
    ]
    // unitSize=8 , size=24 from fmVariants

    lineProps = {
        strokeWidth: 3,
        vectorEffect: 'non-scaling-stroke',
        initial: 'init',
        animate: anim,
        transition: {
            type: 'spring',
            stiffness: 260,
            damping: 25,
        },
        strokeLinecap: 'round',
        custom: unitSize,
        ...lineProps,
    }

    return (
        <motion.div
            className="burger"
            variants={variants.fade}
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
