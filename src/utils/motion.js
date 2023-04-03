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

export const sectionVariants = {
    Button: DefVariants.Button(0.5),
    Border: {
        hidden: {
            pathLength: 0,
            transition: {
                duration: 0.75,
                ease: [0.62, 0.01, 0.5, 0.95],
            },
        },
        show: (i = 1) => ({
            pathLength: i,
            transition: {
                delay: 0.25,
                type: 'spring',
                duration: 1,
                bounce: 0,
            },
        }),
    },
    Graphic: DefVariants.Opacity({
        transition: { duration: 0.75, ease: 'easeIn' },
    }),
}
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
export const sidVariants = {
    Title: {
        hidden: (i) => ({
            opacity: i,
            color: '#FFFF',
            letterSpacing: '0.05em',
            transition: { duration: 0.75, ...noBounceSpring },
        }),
        show: {
            opacity: 1,
            color: '#FFF0',
            letterSpacing: '0.15em',
            transition: { duration: 1, ...noBounceSpring },
        },
        exit: (i) => ({
            opacity: i,
            color: '#FFFF',
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
export const navVariants = {
    NavLinks: {
        hidden: { y: -50 },
        show: { y: 0 },
    },
    Burger: {
        Buns: {
            closed: {
                rotate: 0.01,
                y: 0,
                transition: {
                    y: { duration: 0.3, delay: 0.3 },
                    rotate: { duration: 0.3 },
                },
            },
            opened: (i = 1) => ({
                rotate: i * 45,
                y: i,
                transition: {
                    y: { duration: 0.3 },
                    rotate: { duration: 0.3, delay: 0.3 },
                },
            }),
            return: (i = 1) => ({
                rotate: i * -30,
                y: i / 2,
                transition: {
                    y: { duration: 0.3, delay: 0.3 },
                    rotate: { duration: 0.3 },
                },
            }),
        },
        Meat: {
            closed: {
                opacity: 1,
                rotate: 0.01,
                scale: 1,
                y: 0,
                x: 0,
            },
            opened: (i = -1) => ({
                opacity: 0,
                scale: 1,
                y: 0,
                x: -i,
            }),
            return: (i = -1) => ({
                originX: 1,
                opacity: 1,
                rotate: i * 30,
                scale: 1.75,
                y: i * 0.9,
                x: -i / 2 + 1.1,
                transition: {
                    x: { duration: 0.3, delay: 0.3 },
                    y: { duration: 0.3, delay: 0.6 },
                    rotate: { duration: 0.3, delay: 0.6 },
                },
            }),
        },
    },
    BackBtn: {
        Wrapper: {
            hidden: {
                opacity: 0,
                scaleX: 0,
                originX: 0,
                transition: { delay: 0.5, duration: 0.5 },
            },
            show: {
                opacity: 1,
                scaleX: 1,
                originX: 0,
                transition: {
                    delay: 0.5,
                    duration: 0.5,
                    when: 'beforeChildren',
                },
            },
        },
        Line: {
            hidden: (degrees) => {
                const typeA = degrees == 0
                return {
                    opacity: 0,
                    scaleX: typeA ? 0 : 1,
                    rotate: 0,
                    originX: typeA ? [0, -1] : -1,
                    transition: { duration: typeA ? 0.5 : 0.25 },
                }
            },
            show: (degrees) => {
                const typeA = degrees == 0
                return {
                    opacity: 1,
                    scaleX: 1,
                    rotate: degrees,
                    originX: typeA ? [2, 1] : 0,
                    transition: {
                        delay: typeA ? 0.25 : 0.75,
                        duration: typeA ? 1 : 1.35,
                        ease: typeA ? 'easeOut' : 'anticipate',
                    },
                }
            },
        },
    },
}
export const menuVariants = {
    backgroundClip: {
        hidden: {
            clipPath: `polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`,
            transition: {
                delay: 0.25,
                type: 'spring',
                bounce: 0,
                stiffness: 45,
            },
        },
        show: {
            clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
            transition: {
                delay: 0.35,
                type: 'spring',
                bounce: 0,
                stiffness: 50,
                restDelta: 0.02,
            },
        },
    },
    Links: {
        Wrap: {
            hidden: {
                opacity: 0,
                transition: { when: 'afterChildren', staggerChildren: 0.04 },
            },
            show: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
            },
        },
        Items: {
            hidden: (i = 0) => ({
                opacity: 0,
                y: `${i * -3}em`,
                transition: {
                    y: { ...noBounceSpring },
                },
            }),
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    y: { ...noBounceSpring },
                    opacity: { duration: 0.75, ease: 'anticipate' },
                },
            },
        },
    },
    IconWrap: {
        hidden: {
            opacity: 0,
            transition: { staggerChildren: 0.04 },
        },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.65 },
        },
    },
    Icons: {
        hidden: { opacity: 0, transition: { ease: 'circOut' } },
        show: {
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 3000,
                restDelta: 0.01,
            },
        },
    },
}

export const introVariants = {
    SubTitle: DefVariants.clipPathY(2),
    Btn: DefVariants.Button(2.25),
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
            show: {
                opacity: 1,
                y: '0%',
                transition: { duration: 0.5, ease: 'backOut' },
            },
            exit: {
                opacity: 0,
                y: '100%',
                clipPath: 'inset(0 0 100% 0)',
                transition: { duration: 0.25 },
            },
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
export const experienceMotion = {
    Accordion: {
        closed: {
            opacity: 0.5,
            height: 0,
            transition: { duration: 0.5 },
        },
        open: {
            opacity: 1,
            height: 'auto',
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.075,
                delayChildren: 0.15,
            },
        },
    },
    Content: {
        closed: { opacity: 0 },
        open: { opacity: 1, transition: { duration: 0.5 } },
    },
    Image: {
        open: {
            opacity: 1,
            filter: 'blur(0px)',
            transition: { duration: 0.75 },
        },
        closed: {
            opacity: 0,
            filter: 'blur(5px)',
        },
    },
}
export const projectCardVariants = {
    Wrap: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0,
                when: 'afterChildren',
                staggerChildren: 0.08,
                staggerDirection: -1,
            },
        },
    },
    Card: {
        hidden: { opacity: 0, scale: 0.85 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.25 } },
    },
    Content: {
        hidden: { opacity: 0, pointerEvents: 'none' },
        show: { opacity: 1, pointerEvents: 'auto' },
    },
    Archive: {
        Header: {
            container: {
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
            },
            items: {
                hidden: { y: 50 },
                show: {
                    y: 0,
                    transition: { duration: 1, ...noBounceSpring },
                },
            },
            decoration: {
                hidden: { opacity: 0, scaleX: 0 },
                show: {
                    opacity: 1,
                    scaleX: 1,
                    transition: { duration: 1, delay: 1, ease: 'easeInOut' },
                },
            },
        },
        Wrap: {
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: 0,
                    when: 'afterChildren',
                    staggerChildren: 0.06,
                    staggerDirection: -1,
                },
            },
        },
        ProjectCard: {
            hidden: { opacity: 0, scale: 0.85 },
            show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            exit: { opacity: 0, scale: 0.95, transition: { duration: 0.25 } },
        },
    },
}

export const featuredProjectVariants = {
    Title: {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    },
    TechWrap: {
        show: (i) => ({
            transition: {
                staggerChildren: 0.125,
                staggerDirection: i,
                delayChildren: 0.25,
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
    Content: {
        hidden: { opacity: 0, y: 25 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    },
    LinkItem: {
        hidden: {
            opacity: 0,
            y: 10,
        },
        show: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.75 + i * 0.125,
                duration: 0.5,
                ease: 'easeOut',
            },
        }),
    },
    Image: {
        hidden: (i) => ({
            opacity: 0,
            x: i * 50,
        }),
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    },
}
export const archiveVariants = {
    Headline: {
        hidden: { y: 25 },
        show: {
            y: 0,
            transition: { duration: 1, ...noBounceSpring },
        },
    },
    ProjectWrap: {
        hidden: {
            transition: { staggerChildren: 0.1, staggerDirection: 1 },
        },
        show: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: 1,
                delayChildren: 0.25,
            },
        },
    },
    Project: {
        hidden: {
            opacity: 0,
            y: 25,
            pointerEvents: 'none',
            transition: {
                opacity: { duration: 0.35 },
                y: { duration: 0.5, ease: 'easeIn' },
            },
        },
        show: {
            opacity: 1,
            y: [-25, 0],
            transition: {
                opacity: { duration: 0.35 },
                y: { duration: 0.5, ease: 'circOut' },
            },
            transitionEnd: { pointerEvents: 'auto' },
        },
    },
}

export const styledComponentsVariants = {
    BackBtn: {
        Wrapper: {
            hidden: {
                opacity: 0,
                scaleX: 0,
                originX: 0,
                transition: { delay: 0.5, duration: 0.5 },
            },
            show: {
                opacity: 1,
                scaleX: 1,
                originX: 0,
                transition: {
                    delay: 0.5,
                    duration: 0.5,
                    when: 'beforeChildren',
                },
            },
        },
        Line: {
            hidden: (degrees) => {
                const typeA = degrees == 0
                return {
                    opacity: 0,
                    scaleX: typeA ? 0 : 1,
                    rotate: 0,
                    originX: typeA ? [0, -1] : -1,
                    transition: { duration: typeA ? 0.5 : 0.25 },
                }
            },
            show: (degrees) => {
                const typeA = degrees == 0
                return {
                    opacity: 1,
                    scaleX: 1,
                    rotate: degrees,
                    originX: typeA ? [2, 1] : 0,
                    transition: {
                        delay: typeA ? 0.25 : 0.75,
                        duration: typeA ? 1 : 1.35,
                        ease: typeA ? 'easeOut' : 'anticipate',
                    },
                }
            },
        },
    },
}
