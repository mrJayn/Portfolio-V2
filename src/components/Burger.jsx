import { motion } from 'framer-motion'
import { useState } from 'react'
import { theme } from 'tailwind.config'
import { transparent } from 'tailwindcss/colors'

const Burger = ({
    isOpen = false,
    size = 20,
    strokeWidth = 3,
    color = theme.colors.teal,
    lineProps = null,
    transition = { type: 'spring', stiffness: 260, damping: 20 },
    ...props
}) => {
    const variant = isOpen ? 'opened' : 'closed'

    const top = {
        closed: {
            rotate: 0,
            translateY: 0,
        },
        opened: {
            rotate: 45,
            translateY: 2,
        },
    }
    const center = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        },
    }
    const bottom = {
        closed: {
            rotate: 0,
            translateY: 0,
        },
        opened: {
            rotate: -45,
            translateY: -2,
        },
    }
    lineProps = {
        strokeWidth: strokeWidth,
        stroke: color,
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
