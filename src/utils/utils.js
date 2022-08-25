import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { theme } from 'tailwind.config'
import { black } from 'tailwindcss/colors'

export const navDelay = 1000

/*export const spring = "spring(1,20,20,5)";*/
export const srConfig = {
    delay: 250,
    duration: 500,
    distance: '50px',
    origin: 'bottom',
    reset: false,
    mobile: true,
    viewFactor: 0.25,
    useDelay: 'always',
    easing: 'ease-out',
}

export function toggleScrolling(state) {
    if (typeof window !== undefined) {
        document.querySelector('body').style.overflow =
            state == true ? 'auto' : 'hidden'
    }
}

export const default_spring = {
    type: 'spring',
    stiffness: 150,
    damping: 30,
    velocity: 50,
}
/* SPRING DEFAULTS 
    type: 'spring',
    bounce: 0.25,
    damping: 10,
    mass: 1,
    stiffness: 100,
    velocity: 2,
    restSpeed: 0.01,
    restDelta: 0.01,    
*/
export const SplitText = ({ children, ...props }) => {
    let words = children.split(' ')
    return (
        <div className="flex-center flex-wrap">
            {words.map((word, i) => (
                <motion.span
                    key={`splitText-word${i}`}
                    style={{
                        display: 'inline-block',
                        willChange: 'transform',
                        paddingInline: '1px',
                    }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    {...props}
                >
                    {word + (i !== words.length - 1 ? '\u00A0' : '')}
                </motion.span>
            ))}
        </div>
    )
}

export const styledBtn = {
    className: 'styled-button',
    whileHover: {
        color: black,
        translateY: -2.5,
        boxShadow: `0px 10px 15px -10px ${theme.colors.charcoal}`,
    },
    whileTap: { scale: 0.95 },
}
