import { theme } from 'tailwind.config'

export const bounce = (value, { reverse = false } = {}) =>
    [0, 0.1, 0.43, 0.98, 0.75, 0.98, 0.93, 0.99, 0.98, 1].map((v) => (reverse ? 1 - v : v) * value)
export const bounceTimes = [0, 0.12, 0.24, 0.36, 0.54, 0.74, 0.82, 0.94, 0.96, 1]

// ====================

const hsh = {
    initial: 'hidden',
    animate: 'show',
    exit: 'hidden',
}

// ====================

// NAV Variants
const NAV_TEXT_COLOR = theme.colors.grey[40]
const LOGO_COLOR = theme.colors.grey[40]
export const NavMotion = {
    Burger: {
        wrapProps: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.5, ease: 'easeIn' },
        },
        outer: {
            burg: {
                stroke: NAV_TEXT_COLOR,
                y: 0,
                rotate: 0,
                scaleX: 1,
                pathLength: 16,
                pathSpacing: 0,
                transition: {
                    originX: { delay: 0.35, duration: 0 },
                    y: { delay: 0.35, duration: 0.35, ease: 'easeOut' },
                    default: { duration: 0.35, ease: 'easeIn' },
                },
            },
            x: (i) => ({
                stroke: '#b00',
                y: i,
                rotate: i * 45,
                originX: 0.5,
                transition: {
                    originX: { duration: 0 },
                    y: { duration: 0.35, ease: 'easeIn' },
                    default: { delay: 0.35, duration: 0.35, ease: 'easeOut' },
                },
            }),
        },
        inner: {
            burg: {
                stroke: NAV_TEXT_COLOR,
                opacity: 1,
                x: 0,
                transition: {
                    opacity: { delay: 0.35, duration: 0.01 },
                    x: { duration: 0.35, ease: 'easeOut' },
                },
            },
            x: {
                opacity: 0,
                transition: { delay: 0.35, duration: 0.01 },
            },
        },
    },
    LogoVariants: {
        path: {
            hidden: {
                pathLength: 0,
                stroke: '#6199ff',
                strokeOpacity: 0,
                strokeWidth: 20,
                fill: LOGO_COLOR,
                fillOpacity: 0,
            },
            show: {
                pathLength: 1,
                stroke: LOGO_COLOR,
                strokeOpacity: 1,
                strokeWidth: 0,
                fill: LOGO_COLOR,
                fillOpacity: 1,
            },
        },
        rect: {
            hidden: {
                pathLength: 0,
                stroke: '#6199ff',
                strokeOpacity: 0,
                strokeWidth: 20,
                fill: LOGO_COLOR,
                fillOpacity: 0,
            },
            show: {
                pathLength: 1,
                stroke: LOGO_COLOR,
                strokeOpacity: 1,
                strokeWidth: 0,
                fill: LOGO_COLOR,
                fillOpacity: 1,
                x: 0,
            },
        },
    },
    MenuMotion: {
        menuClipProps: {
            initial: 'hidden',
            animate: 'show',
            exit: 'hidden',
            variants: {
                hidden: {
                    clipPath: 'inset(100% 0 0% 0)',
                    transition: {
                        delay: 0,
                        duration: 0.5,
                        ease: 'easeInOut',
                    },
                },
                show: {
                    clipPath: ['inset(0% 0 100% 0)', 'inset(0% 0 0% 0)'],
                    transition: {
                        delay: 0.3,
                        duration: 0.5,
                        ease: 'easeInOut',
                    },
                },
            },
        },
        staggerProps: {
            initial: 'hidden',
            animate: 'show',
            variants: {
                show: {
                    transition: {
                        delayChildren: 0.5,
                        staggerChildren: 0.1,
                    },
                },
            },
        },
        socialsVariants: {
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: { duration: 0.3, ease: 'easeIn' },
            },
        },
        backdropProps: {
            initial: 'hidden',
            animate: 'show',
            exit: 'hidden',
            variants: {
                hidden: {
                    opacity: 0,
                    transition: { delay: 0.25, duration: 0.5 },
                },
                show: {
                    opacity: 1,
                    transition: { duration: 0.5 },
                },
            },
        },
    },
    NavLinks: {
        Container: {
            hidden: { transition: { staggerChildren: 0.08 } },
            show: {
                transition: {
                    delayChildren: 0.5,
                    staggerChildren: 0.08,
                    staggerDirection: -1,
                },
            },
        },
        Link: {
            hidden: (isMenu) => ({
                opacity: isMenu ? 0 : 1,
                y: isMenu ? -10 : -50,
                transition: { duration: 0.5, ease: 'circIn' },
            }),
            show: (isMenu) => ({
                opacity: 1,
                y: 0,
                transition: {
                    opacity: { duration: 0.75 },
                    y: { duration: isMenu ? 0.5 : 0.75, ease: 'circOut' },
                },
            }),
        },
    },
}

// SECTIONS Variants
export const aboutMotion = {
    skills: {
        wrap: {
            initial: 'hidden',
            whileInView: 'show',
            viewport: { once: true },
            variants: { show: { transition: { staggerChildren: 0.125 } } },
        },
        item: {
            variants: {
                hidden: { opacity: 0, width: 'min-content' },
                show: (i) => ({
                    opacity: 1,
                    width: i + '%',
                    transition: {
                        opacity: { duration: 0.25, ease: 'easeIn' },
                        width: { duration: 2, ease: 'circOut' },
                    },
                }),
            },
        },
    },
}

export const experienceMotion = {
    Job: {
        layout: 'size',
        initial: { height: 0 },
        animate: { height: 'auto' },
        exit: { height: 0 },
        transition: { duration: 0.5, ease: 'anticipate' },
    },
    Cert: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.25, ease: 'easeIn' },
    },
}

export const featuredMotion = {
    imgProps: {
        initial: 'hidden',
        animate: 'show',
        exit: 'exit',
        variants: {
            hidden: (i) => ({
                opacity: 0,
                x: i * 150 + '%',
                z: Math.abs(i) * -1000,
                rotateY: i * -20,
            }),
            show: (i) => ({
                opacity: 1,
                x: i * 105 + '%',
                z: Math.abs(i) * -400,
                rotateY: i * -20,
            }),
            exit: (i) => ({
                opacity: 1,
                x: i * 150 + '%',
                z: Math.abs(i) * -1000,
                rotateY: i * -20,
            }),
        },
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
    contentProps: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.25, ease: 'easeIn' },
    },
}

// PROJECTS
export const projectsMotion = {
    containerProps: {
        initial: 'show',
        animate: 'show',
        exit: 'exit',
        variants: {
            show: { opacity: 1 },
            exit: { opacity: 0 },
        },
        transition: { duration: 0.2, ease: 'easeIn', when: 'beforeChildren' },
    },
    layoutBtn: {
        wrapProps: {
            initial: 'hidden',
            animate: 'show',
            exit: 'hidden',
            variants: {
                hidden: {
                    opacity: 0,
                    transition: { duration: 0.3, ease: 'easeIn' },
                },
                show: {
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.3, ease: 'easeIn' },
                },
            },
        },
        textProps: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.25, ease: 'easeIn' },
        },
    },
}

export const archiveMotion = {
    wrapProps: {
        grid: {
            initial: 'hidden',
            animate: 'show',
            exit: 'hidden',
            variants: {
                hidden: { opacity: 0, scale: 0 },
                show: { opacity: 1, scale: 1 },
            },
            transition: { duration: 0.5, ease: 'easeInOut' },
        },
        list: {
            initial: 'hidden',
            animate: 'show',
            exit: 'hidden',
            variants: {
                hidden: { opacity: 0 },
                show: { opacity: 1 },
            },
            transition: { duration: 0.25, ease: 'easeIn' },
        },
    },
}

export const sidebarMotion = {
    wrapProps: {
        initial: 'hidden',
        animate: 'show',
        exit: 'hidden',
        variants: {
            hidden: { x: '-100%' },
            show: {
                x: '0%',
                transition: {
                    duration: 0.25,
                    ease: 'easeOut',
                    staggerChildren: 0.1,
                    delayChildren: 0,
                    when: 'beforeChildren',
                },
            },
        },
        transition: { duration: 0.25, ease: 'easeOut' },
    },
    itemProps: {
        variants: {
            hidden: {
                opacity: 0,
                transition: { when: 'afterChildren', duration: 0.25, ease: 'easeIn' },
            },
            show: {
                opacity: 1,
                transition: { when: 'beforeChildren', duration: 0.25, ease: 'easeIn' },
            },
        },
    },
    arrowVars: {
        hidden: (deg) => ({
            scaleX: 0,
            rotate: 0,
            transition: {
                scaleX: deg === 0 ? { duration: 0.5 } : { delay: 0.25 },
                rotate: { duration: 0.25 },
            },
        }),
        show: (deg) => ({
            scaleX: 1,
            rotate: deg,
            transition: {
                scaleX: { duration: 0.5 },
                rotate: { delay: 0.25, duration: 0.5 },
            },
        }),
    },
}
