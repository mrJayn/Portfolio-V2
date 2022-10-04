export const Variants = {
    fade_props: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    },
    fade: {
        hidden: { opacity: 0 },
        enter: { opacity: 1, x: [0, 0] },
        exit: { opacity: 0 },
    },
    fadeY: {
        hidden: (i = 50) => ({ opacity: 0, y: -i }),
        enter: { opacity: 1, y: 0 },
        exit: (i = 50) => ({ opacity: 0, y: -i }),
    },
    stagger: {
        enter: { transition: { staggerChildren: 0.1, staggerDirection: 1 } },
        exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    },
}
export const layoutVariants = {
    hidden: (isHome) => {
        return {
            opacity: 0,
            x: isHome ? '-100%' : '100%',
        }
    },
    enter: {
        opacity: 1,
        x: 0,
        transition: {
            opacity: { duration: 0.9 },
            x: { duration: 1, type: 'spring' },
        },
    },
    exit: (isHome) => ({
        opacity: 0,
        x: isHome ? '-100%' : '100%',
        transition: {
            opacity: { duration: 0.9 },
            x: { duration: 1, type: 'spring' },
        },
    }),
}
export const navVariants = {
    LinksWrap: {
        hidden: { opacity: 0 },
        enter: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.08,
                staggerDirection: -1,
                delayChildren: 0.25,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                when: 'afterChildren',
                staggerDirection: 1,
                staggerChildren: 0.05,
            },
        },
    },
    Links: {
        hidden: (i = 0) => ({
            opacity: 0,
            y: -i - 15,
            transition: {
                opacity: { duration: 0.25 },
                y: { duration: 0.35 },
            },
        }),
        enter: { opacity: 1, y: 0 },
        exit: (i = 0) => ({
            opacity: 0,
            y: -i - 15,
            transition: {
                opacity: { duration: 0.25 },
                y: { duration: 0.35 },
            },
        }),
    },
}
export const menuVariants = {
    backgroundClip: {
        hidden: {
            clipPath: `polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`,
            transition: {
                clipPath: {
                    type: 'spring',
                    delay: 0.2,
                    stiffness: 250,
                    damping: 35,
                    velocity: -50,
                },
                opacity: {
                    duration: 0.7,
                },
            },
        },
        enter: {
            clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
            transition: {
                type: 'spring',
                stiffness: 250,
                damping: 40,
                velocity: 50,
                restDelta: 0.02,
            },
        },
    },
    LinksWrap: {
        hidden: {},
        enter: {
            transition: { staggerChildren: 0.08, delayChildren: 0.15 },
        },
        exit: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    },
    socials: {
        hidden: {
            y: -100,
            opacity: 0,
            transition: {
                duration: 0.35,
                delayChildren: 0.5,
            },
        },
        enter: {
            y: 0,
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 2 },
        },
    },
    children: {
        hidden: (i = 0) => ({
            opacity: 0,
            y: -i - 15,
            transition: {
                opacity: { duration: 0.25 },
                y: { duration: 0.35 },
            },
        }),
        enter: { opacity: 1, y: 0 },
        exit: (i = 0) => ({
            opacity: 0,
            y: -i - 15,
            transition: {
                opacity: { duration: 0.25 },
                y: { duration: 0.35 },
            },
        }),
    },
}
export const burgerVariants = {
    buns: {
        closed: {
            rotate: 0.01,
            translateY: 0,
        },
        opened: (i = 1) => ({
            rotate: i * 45,
            translateY: i,
        }),
        return: (i = 1) => ({
            rotate: i * -30,
            translateY: i / 2,
        }),
    },
    meat: {
        closed: {
            pathLength: -1,
            opacity: 1,
            rotate: 0.01,
            scale: 1,
            y: 0,
            x: 0,
        },
        opened: (i = -1) => ({
            pathLength: 0,
            opacity: 0,
            scale: 1,
            y: 0,
            x: i,
        }),
        return: (i = -1) => ({
            originX: 1,
            pathLength: -1,
            opacity: 1,
            rotate: i * 30,
            scale: 1.75,
            y: i * 0.9,
            x: -i / 2 + 1.1,
        }),
    },
}

export const cardVariants = [
    /**wrap_vars**/ {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.5, delay: 0.25 } },
        expanded: { opacity: 0, transition: { duration: 0.25 } },
    },
    /**clip_vars**/ {
        hidden: {
            opacity: 1,
            clipPath: `polygon(
                0% 0%, 
                100% 0%, 
                100% 100%, 
                0% 100%)`,
        },
        show: (ltr) => {
            const [x1, x2] = [ltr ? '0%' : '50%', ltr ? '50%' : '100%']
            return {
                opacity: 1,
                x: 0,
                clipPath: `polygon(${x1} 0%,  ${x2} 0%,  ${x2} 100%,${x1} 100%)`,
                transition: {
                    default: { delay: 0.25, duration: 1 },
                    opacity: { delay: 0.125, duration: 1 },
                },
            }
        },
        expanded: {
            opacity: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            transition: { duration: 1 },
        },
        pRM: {
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { duration: 1, delay: 0.25 } },
            expanded: (isMd) => ({ opacity: isMd ? 0 : 0 }),
        },
    },
    /**img_vars**/ {
        hidden: (isLtr) => ({
            opacity: 0,
            x: isLtr ? '-100%' : '100%',
            filter: 'blur(4px)  brightness(0.75)',
        }),
        show: {
            opacity: 1,
            x: 0,
            filter: 'blur(0px) brightness(1)',
            transition: {
                type: 'tween',
                default: { duration: 2, ease: 'anticipate' },
                filter: { delay: 1, duration: 1, ease: 'anticipate' },
            },
        },
        expanded: {
            opacity: 0,
            x: 0,
            filter: 'blur(4px)  brightness(0.75)',
            transition: { duration: 1 },
        },
        pRM: {
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { duration: 1, delay: 0.25 } },
            expanded: (isMd) => ({ opacity: isMd ? 0 : 1 }),
        },
    },
    /**content_vars**/ {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: 1, delay: 0.25 },
        },
        expanded: (isMd) => ({ opacity: isMd ? 0 : 1 }),
    },
]
export const tabsMotion = {
    Tabs: {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        show: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
        exit: (direction) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            transition: { duration: 0.25, ease: 'easeIn' },
        }),
    },
    TabList: {
        initial: {
            color: '#c5c5c9',
            paddingInline: '0px',
            transition: { ease: 'easeIn' },
        },
        active: {
            color: '#fff',
            paddingInline: '7.5px',
            transition: { scale: { delay: 0.15, type: 'tween' } },
        },
        reduced: {
            color: '#fff',
            transition: { ease: 'easeIn' },
        },
    },
    Reduced: {
        enter: { opacity: 0 },
        show: { opacity: 1 },
        exit: { opacity: 0 },
    },
}

export const introVariants = {
    TopText: {
        hidden: (isFirst) => ({
            opacity: isFirst ? 0 : 1,
            clipPath: isFirst
                ? `polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)`
                : `polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)`,
        }),
        show: (isFirst) => ({
            opacity: 1,
            clipPath: `polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)`,
            transition: { duration: 0.5, delay: isFirst ? 1.5 : 0.5 },
        }),
    },
    TopTextReduced: {
        hidden: { opacity: 0 },
        show: (isFirst) => ({
            opacity: 1,
            transition: { duration: 0.5, delay: isFirst ? 1.5 : 0.5 },
        }),
    },
    Content: {
        hidden: { opacity: 0 },
        contentEnter: { opacity: 1, transition: { duration: 0.5 } },
    },
    Button: {
        initial: { opacity: 0, scale: 0.65 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: 0.25, ease: 'easeOut' },
        },
    },
}
export const titleVariants = {
    hidden: ([i, isFirst, color]) => ({
        pathLength: 0,
        opacity: 0,
        fill: '#00000000',
        stroke: '#66FCF1' /** COLOR-NEON**/,
    }),
    visible: ([color, i, isFirst]) => {
        const [timeA, timeB, timeC] = isFirst
            ? [2, 0.125, 0.01]
            : [1, 0.025, 0.25]
        const wait = timeA + i * timeB
        return {
            pathLength: 1,
            opacity: 1,
            fill: '#000',
            stroke: '#000',
            transition: {
                pathLength: {
                    delay,
                    type: 'spring',
                    duration: timeA,
                    bounce: 0,
                },
                opacity: { delay: wait, duration: timeC },
                fill: { delay: wait + 0.55, duration: 0.4 },
                stroke: { delay: wait + 0.25, duration: 0.25 },
            },
        }
    },
    pRM: {
        hidden: ([color, isFirst]) => ({
            opacity: 0,
            pathLength: -1,
            fill: color,
            stroke: color,
        }),
        enter: {
            opacity: 1,
            transition: { delay: 1, duration: 0.5 },
        },
    },
}

export const experienceMotion = {
    Certs: {
        items: {
            hidden: { opacity: 0 },
            show: { opacity: 1 },
        },
        active: {
            hidden: { opacity: 0, height: 0 },
            show: {
                opacity: 1,
                height: 'auto',
                transition: { duration: 0.25, delay: 0.25, ease: 'circOut' },
            },
            exit: {
                opacity: 0,
                height: 0,
                transition: { duration: 0.25, delay: 0.25, ease: 'circOut' },
            },
        },
        image: {
            hidden: { opacity: 0, filter: 'blur(3px) brightness(0.75)' },
            show: {
                opacity: 1,
                filter: 'blur(0px) brightness(1)',
                transition: { duration: 0.6, delay: 0.1 },
            },
            exit: {
                opacity: 0,
                filter: 'blur(3px) brightness(0.75)',
                transition: { duration: 0.5 },
            },
        },
        mdLink: {
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: { duration: 0.6, delay: 0.1 },
            },
            exit: {
                opacity: 0,
                transition: { duration: 0.5 },
            },
        },
    },
}

export const featuredVariants = [
    /**img**/ {
        initial: {
            opacity: 1,
            x: 0,
            scale: 1,
            originY: 0,
            transition: { duration: 0.75, type: 'tween' },
        },
        expanded: (i) => ({
            x: `${i * 67.5}%`,
            scale: 0.85,
            originY: 0,
            transition: { duration: 0.75, type: 'tween' },
        }),
        pRM: {
            initial: { opacity: 1 },
            expanded: { opacity: 0 },
        },
    },
    /**title**/ {
        initial: { y: 0 },
        expanded: { y: 0 },
        pRM: { y: 0 },
    },
    /**desc**/ {
        initial: { opacity: 1, x: 0 },
        expanded: (i) => ({ opacity: 0, x: i }),
        pRM: { opacity: 0, x: 0 },
    },
    /**links**/ {
        initial: { y: 0 },
        expanded: { y: 0 },
        pRM: { y: 0 },
    },
    /**reduce_vars**/ {
        initial: { opacity: 1 },
        expanded: { opacity: 0 },
    },
]

export const projectVariants = {
    Wrap: {
        hidden: { opacity: 0 },
        show: (pRM) => ({
            opacity: 1,
            transition: { staggerChildren: pRM ? 0 : 0.08 },
        }),
        exit: (pRM) => ({
            opacity: 0,
            transition: {
                duration: 0,
                when: 'afterChildren',
                staggerChildren: pRM ? 0 : 0.06,
                staggerDirection: -1,
            },
        }),
    },
    Card: {
        hidden: { opacity: 0, scale: 0.85 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.25 } },
    },
}
export const projectCardVariants = {
    Brief_md: {
        hidden: {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 0.5, ease: 'anticipate' },
        },
        show: {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            transition: { duration: 0.5, ease: 'anticipate' },
        },
    },
    contentView: {
        hidden: { opacity: 0, pointerEvents: 'none' },
        show: { opacity: 1, pointerEvents: 'auto' },
    },
}

export const expandedVariants = {
    Title: {
        hidden: () => ({
            opacity: 0,
            y: '-100%',
            x: '-50%',
        }),
        show: {
            opacity: 1,
            y: '0%',
            x: '-50%',
            transition: {
                duration: 0.5,
                delay: 0.5,
                ease: 'circOut',
            },
        },
        exit: {
            opacity: 0,
            y: '-100%',
            x: '-50%',
            transition: {
                duration: 0.25,
                ease: 'circIn',
            },
        },
    },
    Card: {
        hidden: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.5, ease: 'circIn' },
        },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.75, ease: 'circOut' },
        },

        pRM: {
            hidden: (isMd) => ({
                opacity: 0,
                transition: isMd
                    ? { duration: 0.5 }
                    : { duration: 0.35, ease: 'easeIn' },
            }),
            show: (isMd = true) => ({
                opacity: 1,
                transition: isMd
                    ? { duration: 0.5, delay: 1 }
                    : { duration: 0.5, delay: 0.25 },
            }),
        },
    },
    Featured: {
        GridWrap: {
            hidden: (i) => ({
                opacity: 0,
                x: i * 100,
                transition: {
                    opacity: { duration: 0.4 },
                    x: { duration: 0.5 },
                },
            }),
            show: {
                opacity: 1,
                x: 0,
                transition: {
                    opacity: { duration: 0.4, delay: 0.35 },
                    x: { duration: 0.5, delay: 0.25 },
                },
            },
        },
        TabsExpWrap: {
            hidden: { opacity: 0, y: 15 },
            show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.25, ease: 'easeOut' },
            },
            exit: {
                opacity: 0,
                transition: { duration: 0.25 },
            },
        },
        pRM: {
            hidden: { opacity: 0, transition: { duration: 0.4 } },
            show: { opacity: 1, transition: { duration: 0.4, delay: 0.35 } },
        },
    },
}

export const contactMotion = {
    Text: {
        initial: { opacity: 0, y: 10 },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.25 },
        },
        viewport: { once: true },
    },
    Button: {
        initial: { opacity: 0 },
        whileInView: (i = 0) => ({
            opacity: 1,
            transition: { duration: 0.5, delay: i, ease: 'circOut' },
        }),
        viewport: { once: true },
    },
}
