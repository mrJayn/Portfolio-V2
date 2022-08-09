import { theme } from 'tailwind.config'
import { navDelay } from './utils'

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
const default_spring = {
    type: 'spring',
    stiffness: 150,
    damping: 30,
    velocity: 50,
}

export const fadeX = (value = 10) => {
    const [xFrom, xTo] = [value, -value]
    return {
        hidden: { opacity: 0, x: xFrom, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: xTo, y: 0 },
    }
}

export const stagger = {
    enter: { transition: { staggerChildren: 0.1, staggerDirection: 1 } },
}

/*** BURGER VARIANTS AND CONSTANTS ***/
export const [unitSize, size] = [4, 24]
const pathLen = (unitSize * 2) / 1.4

export const card_variants = {
    parent: {
        hide: {
            opacity: 0,
            height: 0,
            transition: { staggerChildren: 0.05, delayChildren: 0.2 },
        },
        show: {
            opacity: 1,
            height: 'auto',
            transition: {
                staggerChildren: 0.07,
                staggerDirection: -1,
            },
        },
    },
    child: {
        hide: { y: '-10px', opacity: 0, transition: 'linear' },
        show: { y: '0px', opacity: 1, transition: 'linear' },
    },
}

export const slideshow_variants = {
    enter: (direction) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    display: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.25, duration: 0.5, ease: 'easeOut' },
    },
    exit: (direction) => ({
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
        transition: { duration: 0.35, ease: 'easeIn' },
    }),
}

export const project_variants = {
    item: {
        hidden: { opacity: 0 },
        enter: (cust) => {
            const dt = cust[0] * 0.08
            return {
                opacity: 1,
                transition: { delay: dt },
            }
        },
        exit: (cust) => {
            const dt = (cust[1] - cust[0]) * 0.05
            return {
                opacity: 0,
                transition: { delay: dt },
            }
        },
    },
}
