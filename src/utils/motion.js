import { theme } from 'tailwind.config'

export const DefVariants = {
    Opacity: (transition = {}) => ({
        hidden: { opacity: 0 },
        show: { opacity: 1, ...transition },
        exit: { opacity: 0 },
    }),
    clipPathY: (delay = 0) => ({
        hidden: {
            y: '100%',
            clipPath: 'inset(0% 0% 100% 0%)',
        },
        show: {
            y: '0%',
            clipPath: 'inset(0% 0% 0% 0%)',
            transition: { delay: delay, duration: 1, ease: 'circOut' },
        },
        exit: {
            y: '100%',
            clipPath: 'inset(0% 0% 100% 0%)',
            transition: { duration: 0.5, ease: 'circOut' },
        },
    }),
    Button: (delay = 0) => ({
        hidden: {
            opacity: 0,
            scale: 0.7,
            pointerEvents: 'none',
            transition: {
                opacity: { duration: 0.4 },
                scale: { duration: 0.5 },
            },
        },
        show: {
            opacity: 1,
            scale: 1,
            pointerEvents: 'auto',
            transition: {
                opacity: { delay: delay, duration: 0.5 },
                scale: { delay: delay, duration: 1, ease: 'circOut' },
            },
        },
        exit: {
            opacity: 0,
            scale: 0.7,
            pointerEvents: 'none',
            transition: {
                opacity: { duration: 0.4 },
                scale: { duration: 0.5 },
            },
        },
    }),
    StaggerContainer: (
        stgIn = 0.1,
        delayIn = 0,
        dirIn = 1,
        stgOut = 0.1,
        delayOut = 0,
        dirOut = 1
    ) => ({
        hidden: {
            transition: {
                staggerChildren: stgOut,
                staggerDirection: dirOut,
                delayChildren: delayOut,
            },
        },
        show: {
            transition: {
                staggerChildren: stgIn,
                staggerDirection: dirIn,
                delayChildren: delayIn,
            },
        },
        exit: {
            transition: {
                staggerChildren: stgOut,
                staggerDirection: dirOut,
                delayChildren: delayOut,
            },
        },
    }),
}

export const springTransition = {
    type: 'spring',
    stiffness: 250,
    damping: 56,
    mass: 3,
    restDelta: 0.001,
}
export const sectionSpring = {
    type: 'spring',
    stiffness: 400,
    damping: 90,
    restDelta: 0.001,
}
export const noBounceSpring = {
    type: 'spring',
    bounce: 0,
}

export const sectionVariants = { Button: DefVariants.Button(0) }
export const sectionGraphicVariants = {
    Skills: (i) => {
        const corner = i < 3 ? i % 2 == 0 : i % 2 !== 0
        const xD = i % 3 == 0 ? -1 : 1
        const yD = i < 3 ? -1 : 1
        return {
            hidden: {
                x: corner ? -15 * xD + '%' : 0,
                y: -10 * yD + '%',
                rotate: 0,
            },
            show: {
                x: '0%',
                y: corner ? 0 : 25 * yD + '%',
                rotate: corner ? -15 * xD * yD : 0,
                transition: { duration: 0.75, ease: 'easeOut' },
            },
            exit: {
                x: corner ? 400 * xD + '%' : 0,
                y: 500 * yD + '%',
                transition: { duration: 0.5 },
            },
        }
    },
}

// SID Variants
export const sidVariants = {
    Title: {
        hidden: (i) => ({
            opacity: i,
            color: '#000',
            letterSpacing: '0.05em',
            transition: { duration: 0.75, ...noBounceSpring },
        }),
        show: {
            opacity: 1,
            color: '#0000',
            letterSpacing: '0.15em',
            transition: { duration: 1, ...noBounceSpring },
        },
        exit: (i) => ({
            opacity: i,
            color: '#000F',
            letterSpacing: '0.05em',
            transition: { duration: 0.75, ...noBounceSpring },
        }),
    },
    Chevron: {
        hidden: { opacity: 0, y: '100%' },
        show: {
            opacity: 1,
            y: '0%',
            transition: { duration: 0.5, ease: 'circOut' },
        },
        exit: {
            opacity: 0,
            y: '100%',
            transition: { duration: 0.5, ease: 'circIn' },
        },
    },
    Underline: {
        hidden: { opacity: 0, scaleX: 0, transition: { duration: 0.5 } },
        show: {
            opacity: 1,
            scaleX: 1,
            transition: { duration: 1.5, ...noBounceSpring },
        },
        exit: { opacity: 0, scaleX: 0, transition: { duration: 0.5 } },
    },
    Content: {
        hidden: {
            y: '0vh',
            transition: { duration: 0.75, ease: 'easeInOut' },
        },
        show: {
            y: '0vh',
            transition: { duration: 0.75, ease: 'easeInOut' },
        },
        exit: {
            y: '0vh',
            transition: { duration: 0.75, ease: 'easeInOut' },
        },
    },
}

// NAV Variants
export const BurgerVariants = {
    outer: {
        default: {
            x: 0,
            y: 0,
            rotate: 0,
            transition: {
                x: { duration: 0.35, ease: 'backIn' },
                y: { duration: 0.35, delay: 0.35, ease: 'easeOut' },
                rotate: { duration: 0.35, ease: 'easeIn' },
            },
        },
        exit: (i) => ({
            y: i,
            rotate: i * 45,
            transition: {
                y: { duration: 0.35, ease: 'easeIn' },
                rotate: { delay: 0.35, duration: 0.35, ease: 'easeOut' },
            },
        }),
        return: (i) => ({
            x: Math.abs(i) / -2,
            y: i / 2,
            rotate: i * -30,
            transition: {
                x: { duration: 1, ease: 'anticipate' },
                y: { duration: 0.35 },
                rotate: { duration: 0.35 },
            },
        }),
    },
    inner: {
        default: {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            transition: {
                opacity: { duration: 0.5, ease: 'anticipate' },
                x: { delay: 0.7, duration: 0.35, ease: 'easeOut' },
                y: { delay: 0.35, duration: 0.35, ease: 'easeIn' },
                rotate: { duration: 0.35, ease: 'easeIn' },
                scale: { duration: 0.5, ease: 'circOut' },
            },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.5, ease: 'anticipate' },
        },
        return: (i) => ({
            x: -i / 2 + 0.5,
            y: i * 0.9,
            rotate: i * 30,
            scale: 1.75,
            originX: 1,
            transition: {
                x: { duration: 0.35, ease: 'circOut' },
                default: { duration: 0.6, delay: 0.35 },
            },
        }),
    },
}
export const navLinkVariants = {
    Container: DefVariants.StaggerContainer(0.08, 0.5, -1, 0.05, 0, 1),
    Link: {
        hidden: (i) => ({
            opacity: 0,
            y: i,
            transition: {
                opacity: { duration: 0.25 },
                y: { duration: 0.4 },
            },
        }),
        show: {
            opacity: 1,
            y: 0,
            transition: {
                opacity: { duration: 0.75 },
                y: { duration: 0.5, ease: 'circOut' },
            },
        },
    },
}
export const LogoVariants = {
    hidden: {
        pathLength: 0,
        stroke: '#6199ff',
        strokeOpacity: 0,
        strokeWidth: 3,
        fill: '#FFF',
        fillOpacity: 0,
    },
    show_1: (i) => {
        const DLY = (xtraDly = 0) => ({
            delay: xtraDly + i * 0.065,
        })
        return {
            pathLength: 1,
            stroke: '#FFF',
            strokeOpacity: 1,
            strokeWidth: 0,
            fill: '#FFF',
            fillOpacity: 1,
            transition: {
                strokeOpacity: { duration: 0.01, ...DLY(1) },
                pathLength: { duration: 1, ...DLY(1) },
                default: { duration: 0.7, ease: 'easeIn', ...DLY(1.3) },
            },
        }
    },
    show_2: {
        pathLength: 1,
        stroke: '#FFF',
        strokeOpacity: 1,
        strokeWidth: 0,
        fill: '#FFF',
        fillOpacity: 1,
        transition: { duration: 0.5 },
    },
    hover: {
        stroke: '#FFF',
        strokeWidth: 3,
        transition: { duration: 0.5 },
    },
}
export const menuVariants = {
    Wrapper: {
        hidden: {
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 0.5 },
        },
        show: {
            clipPath: 'inset(0 0 0% 0)',
            transition: { delay: 0.35, duration: 0.5 },
        },
    },
    LinksContainer: DefVariants.StaggerContainer(0.08, 0.5, 1, 0.05, 0, -1),
    Link: {
        hidden: { opacity: 0, y: -25 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                opacity: { duration: 0.75 },
                y: { duration: 0.5, ease: 'easeOut' },
            },
        },
    },
}
export const BackBtnVariants = {
    hidden: (deg) => ({
        opacity: 1,
        scaleX: 0,
        rotate: 0,
        transition: {
            opacity: { delay: 0.25 },
            scaleX: deg === 0 ? { duration: 0.5 } : { delay: 0.25 },
            rotate: { duration: 0.25 },
        },
    }),
    show: (deg) => ({
        opacity: 1,
        scaleX: 1,
        rotate: deg,
        transition: {
            scaleX: { duration: 0.5 },
            opacity: { delay: 0.25, duration: 0 },
            rotate: { delay: 0.25, duration: 0.5 },
        },
    }),
}

// SECTIONS Variants
export const introVariants = {
    Text1: DefVariants.clipPathY(0),
    Text2: DefVariants.clipPathY(1),
    Btn: DefVariants.Button(1.25),
}
export const aboutVariants = {
    Skills: {
        Container: {
            hidden: { opacity: 1 },
            show: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.25 },
            },
        },
        Item: {
            hidden: { opacity: 0, y: 25 },
            show: { opacity: 1, y: 0 },
        },
    },
    ItemMd: {
        closed: (i) => ({
            opacity: 1,
            x: i % 2 == 0 ? '25%' : '-25%',
            y: i % 2 == 0 ? '0%' : '50%',
            width: '48px',
            transition: {
                type: 'tween',
                duration: 0.5,
                delay: 0.25,
            },
        }),
        opened: {
            opacity: 1,
            x: 0,
            y: 0,
            width: 'auto',
            transition: { duration: 0.5, type: 'tween' },
        },
    },
    Text: {
        closed: {
            opacity: 0,
            transition: { duration: 0.25 },
        },
        opened: {
            opacity: 1,
            transition: { delay: 0.35 },
        },
    },
    Img: {
        closed: {
            transition: { type: 'tween', duration: 0.5, delay: 0.25 },
        },
        opened: {
            transition: { type: 'tween', duration: 0.5 },
        },
    },
}

export const featuredVariants = {
    TechWrap: {
        show: (i) => ({
            transition: {
                staggerChildren: 0.125,
                staggerDirection: i,
            },
        }),
    },
    Tech: {
        hidden: { opacity: 0, y: '-150%' },
        show: {
            opacity: 1,
            y: '0%',
            transition: { duration: 0.5, ease: 'backOut' },
        },
    },
    Item: {
        hidden: { opacity: 0, y: 20 },
        show: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.125,
                duration: 0.5,
                ease: 'easeOut',
            },
        }),
    },
}
export const archiveVariants = {
    Project: {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        show: {
            opacity: 1,
            scale: 1,
        },
    },
}

export const contactVariants = {
    Headline: {
        h3: {
            hidden: {
                opacity: 0,
                clipPath: 'inset(0 0 100% 0)',
            },
            show: {
                opacity: 1,
                clipPath: 'inset(0 0 0% 0)',
                transition: { duration: 1, ease: 'easeInOut' },
            },
            exit: {
                opacity: 0,
                clipPath: 'inset(0 0 100% 0)',
                transition: { duration: 0.5 },
            },
        },
        Decoration: {
            hidden: { opacity: 0, scaleX: 0, bottom: '100%' },
            show: {
                opacity: 1,
                scaleX: 1,
                bottom: '0%',
                transition: {
                    default: { duration: 0.5, ease: 'easeOut' },
                    bottom: { duration: 1, ease: 'easeInOut' },
                },
            },
            exit: {
                opacity: 0,
                scaleX: 0,
                bottom: '100%',
                transition: {
                    default: { delay: 0.5 },
                    bottom: { duration: 0.5 },
                },
            },
        },
    },
    Button: DefVariants.Button(0),
    Socials: {
        Container: {
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
            exit: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
            },
        },
        Item: {
            hidden: { opacity: 0, y: '100%' },
            show: (i) => ({
                opacity: 1,
                y: '0%',
                transition: { delay: i * 0.1, duration: 0.5, ease: 'backOut' },
            }),
        },
    },
    Footer: {
        hidden: { y: '100%' },
        show: {
            y: '0%',
            transition: { duration: 1, ease: 'backOut' },
        },
        exit: {
            y: '100%',
            transition: { duration: 0.5, ease: 'backIn' },
        },
    },
}
