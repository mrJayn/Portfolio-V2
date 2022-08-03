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

export const fadeIn = {
    hidden: { opacity: 0, x: 0, y: 10 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 10 },
}
export const staggerChildren = {
    enter: { transition: { staggerChildren: 0.08, staggerDirection: 1 } },
}
export const nav_vars = {
    parent: {
        show: {
            transition: default_spring,
        },
        hidden: {},
    },
    child: {
        show: (largeScreen = false) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: largeScreen ? 1.5 : 0,
                duration: 0.5,
            },
        }),
        hidden: {
            opacity: 0,
            transition: default_spring,
        },
    },

    logo: {
        show: (largeScreen = false) => ({
            opacity: [
                0, 0.5, 0.25, 0.75, 0.1, 0.75, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0.5, 0.25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.25,
                0.75, 1,
            ],
            transition: {
                when: 'afterChildren',
                delay: largeScreen ? 2 : 1.25,
                duration: 1.5,
            },
        }),
        hidden: {
            opacity: 0,
            transition: default_spring,
        },
    },
    links_ul: {
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                staggerDirection: 1,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                exitTransition: default_spring,
                when: 'beforeChildren',
            },
        },
    },
    links_li: {
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 30,
                velocity: 50,
            },
        },
        hidden: {
            y: '-50px',
        },
    },
}

/*** BURGER VARIANTS AND CONSTANTS ***/
export const [unitSize, size] = [4, 24]
const pathLen = (unitSize * 2) / 1.4
export const burger_vars = {
    top: {
        init: {
            rotate: 0,
            translateY: 0,
        },
        closed: {
            rotate: [null, 0],
            translateY: [null, 0],
        },
        opened: {
            rotate: [0, 0, 45],
            translateY: [0, unitSize / 2, unitSize / 2],
        },
        return: {
            rotate: [null, -30],
            translateY: [null, unitSize / 4],
        },
    },
    center1: {
        init: {
            pathLength: -1,
            opacity: 1,
        },
        closed: {
            pathLength: [null, 0, -1],
            opacity: [null, 0, 1],
            rotate: 0,
            translateY: 0,
            translateX: [null, 0],
        },
        opened: {
            pathLength: [null, -1, 0],
            opacity: 0,
            translateY: 0,
            translateX: -2,
        },
        return: {
            pathLength: [null, 0, -1],
            opacity: [null, 0, 1],
            rotateZ: [null, 0, -30],
            translateY: [null, 0, -unitSize / 4],
            translateX: [null, 0, 0.5 + unitSize / 2],
            originX: 1,
        },
    },
    center2: {
        init: {
            pathLength: -1,
            opacity: 1,
        },
        closed: {
            pathLength: [null, 0, -1],
            opacity: [null, 0, 1],
            translateY: 0,
            translateX: [null, 0],
        },
        opened: {
            pathLength: [null, -1, 0],
            opacity: 0,
            translateY: 0,
            translateX: 2,
        },
        return: {
            pathLength: [null, 0, -1],
            opacity: [null, 0, 1],
            rotateZ: [null, 0, 30],
            translateY: [null, 0, unitSize / 4],
            translateX: [null, 0, 0.5],
            originX: 1,
        },
    },
    bottom: {
        init: {
            rotate: 0,
            translateY: 0,
        },
        closed: {
            rotate: [null, 0],
            translateY: [null, 0],
        },
        opened: {
            rotate: [0, 0, -45],
            translateY: [-0, -unitSize / 2, -unitSize / 2],
        },
        return: {
            rotate: [null, 30],
            translateY: [null, -unitSize / 4],
        },
    },
}
export const menu_vars = {
    menu_clip: {
        show: {
            clipPath: `polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)`,
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 30,
                velocity: 50,
                restDelta: 0.02,
            },
        },
        hide: {
            clipPath: `polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)`,
            transition: {
                type: 'spring',
                delay: 0.2,
                stiffness: 150,
                damping: 35,
                velocity: -50,
            },
        },
    },
    parent: {
        show: (custom = true) => ({
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.05,
                delayChildren: custom ? 0 : 0.5,
            },
        }),
        hide: (custom = true) => ({
            transition: {
                staggerChildren: custom ? 0.05 : 0,
                delayChildren: custom ? 0.15 : 0,
                staggerDirection: custom ? -1 : 1,
            },
        }),
    },
    child: {
        show: {
            y: '0px',
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 1000,
                velocity: -300,
            },
        },
        hide: (dy = 50) => ({
            y: -dy + 'px',
            opacity: 0,
            transition: {
                type: 'spring',
                stiffness: 150,
            },
        }),
    },
}

export const draw = {
    hidden: {
        pathLength: 0,
        opacity: 0,
        fill: '#00000000',
        stroke: theme.colors.neon,
    },
    visible: (i) => {
        const delay = i * 0.15
        return {
            pathLength: 1,
            opacity: 1,
            fill: '#000',
            stroke: '#000',
            transition: {
                pathLength: { delay, type: 'spring', duration: 1, bounce: 0 },
                opacity: { delay, duration: 0.01 },
                fill: { delay: delay + 0.65, duration: 0.5 },
                stroke: { delay: delay + 0.05, duration: 0.5 },
            },
        }
    },
}

export const resumeVars = {
    stagger: {
        enter: {
            transition: {
                staggerChildren: 0.07,
                staggerDirection: 1,
                delayChildren: 0.25,
            },
        },
        exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    },
    listItem: {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
    },
    btn: {
        top: {
            closed: {
                rotate: [45, 90],
            },
            opened: {
                rotate: [90, 45],
            },
        },
        bottom: {
            closed: {
                rotate: [-45, 0],
            },
            opened: {
                rotate: [0, -45],
            },
        },
        circle: {
            closed: {
                pathLength: [0, 8.75],
                fill: theme.colors.lightTeal,
            },
            opened: {
                pathLength: [null, 0.75],
                fill: theme.colors.eee,
            },
        },
    },
    btnWrap: {
        hidden: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                duration: 0.5,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
    },
}
