import { motion } from 'framer-motion'
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

export const scrollNow = (e, scrollTarget) => {
    e.preventDefault()
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: scrollTarget,
    })
}
export const scrollToTop = (e) => {
    e.preventDefault()
    document.querySelector('#layout').scrollTo(0, 0)
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

export const styledBtn = {
    className: 'styled-button',
    whileHover: {
        color: black,
        translateY: -2.5,
        boxShadow: `0px 10px 15px -10px #333`,
    },
    whileTap: { scale: 0.95 },
}
