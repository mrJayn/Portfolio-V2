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

export const inViewFadeIn = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
        duration: 1.5,
        ease: 'circOut',
    },
    viewport: { once: true },
}

// ~ Section.js ~
export const sectionVariants = {
    hidden: (i) => ({
        opacity: i == 0 ? 1 : 0,
        y: i * 100 + '%',
        transition: {
            when: 'beforeChildren',
            duration: 1,
            ease: [0.5, 0, 0.5, 1],
        },
    }),
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: i == 0 ? 0.5 : 0.25,
            ease: [0.25, 1, 0.5, 1],
        },
    }),
    exit: { y: 0, opacity: 1 },
}
/**
 * Function - PolygonBuilders
 */
const xPolygonBuilder = (x) =>
    `polygon(${x}% 0%, ${x}% 0%, ${x}% 120%, ${x}% 120%)`
const yPolygonBuilder = (y) =>
    `polygon(0% ${y}%, 100% ${y}%, 100% ${y}%, 0% ${y}%)`
// ~ Section_Card.js ~
export const sectionContentVariants = {
    Container: {
        hidden: {
            opacity: 0,
            transition: { when: 'beforeChildren' },
        },
        show: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.25,
                staggerChildren: 0.35,
                delayChildren: 0.15,
            },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.75, staggerChildren: 0.1 },
        },
        //exit variants for slug exit
        back: {
            opacity: 0,
            transition: {
                duration: 0.75,
                staggerChildren: 0.1,
                staggerDirection: -1,
            },
        },
    },
    Items_X: {
        hidden: (i) => ({
            x: i * 15 + '%',
            y: 0,
            clipPath: xPolygonBuilder(50 - i * 150),
            transition: { duration: 0, delay: 1 },
        }),
        show: {
            x: 0,
            y: 0,
            clipPath: 'polygon(-5% -5%, 105% -5%, 105% 105%, -5% 105%)',
            transition: { duration: 1, ease: 'circOut' },
        },
        exit: (i) => ({
            x: i * 15 + '%',
            y: 0,
            clipPath: xPolygonBuilder(50 - i * 150),
            transition: { duration: 0.75, ease: 'easeIn' },
        }),
        back: (i) => ({
            x: i * 15 + '%',
            y: 0,
            clipPath: xPolygonBuilder(50 - i * 150),
            transition: { duration: 0.75, ease: 'easeIn' },
        }),
    },
    Items_Y: {
        hidden: (i) => ({
            x: 0,
            y: i * 25 + '%',
            transition: {
                duration: 0,
                delay: 1,
                ease: 'easeIn',
            },
        }),
        show: {
            x: 0,
            y: 0,
            transition: { duration: 1, ease: 'circOut' },
        },
        exit: (i) => ({
            x: 0,
            y: i * 25 + '%',
            transition: { duration: 0.5, ease: 'easeIn' },
        }),
        back: (i) => ({
            x: 0,
            y: i * 25 + '%',
            transition: { duration: 0.5, ease: 'easeIn' },
        }),
    },
    Btn: {
        hidden: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0,
                delay: 1,
                ease: 'easeIn',
            },
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                opacity: { duration: 1 },
                scale: { duration: 1.5, ease: 'circOut' },
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.75, ease: 'easeIn' },
        },
        back: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.75, ease: 'easeIn' },
        },
    },
    Decoration: {
        hidden: {
            opacity: 0,
            scaleX: 0,
            transition: { delay: 1 },
        },
        show: {
            opacity: 1,
            scaleX: 1,
            transition: { duration: 3, ease: 'anticipate' },
        },
        exit: {
            opacity: 0,
            scaleX: 0,
            transition: { duration: 0.25, ease: 'easeIn' },
        },
        back: {
            opacity: 0,
            scaleX: 0,
            transition: { duration: 0.25, ease: 'easeIn' },
        },
    },
    ImgSm: {
        hidden: (i) => ({
            opacity: 0,
            y: i * 200 + '%',
            transition: { duration: 1, ease: 'easeIn' },
        }),
        show: {
            opacity: 1,
            y: 0,
            transition: {
                default: { duration: 1, delay: 0.5, ease: 'easeOut' },
                y: { duration: 1, delay: 0.5, ease: 'circOut' },
            },
        },
        exit: (i) => ({
            opacity: 0,
            y: i * 100 + '%',
            transition: { duration: 0.5 },
        }),
    },
    ImgMd: {
        hidden: (i) => ({
            opacity: 1,
            scale: 0.6,
            originX: i == 0 ? 0.5 : i == 1 ? 0.7 : 0.3,
            transition: { delay: 1 },
        }),
        show: (i) => {
            return {
                opacity: 1,
                scale: 0.75,
                originX: i == 0 ? 0.5 : i == 1 ? 0.3 : 0.7,
                transition: {
                    default: {
                        duration: 2,
                        delay: 0.4,
                        type: 'spring',
                        bounce: 0,
                    },
                    opacity: { duration: 0 },
                },
            }
        },
        exit: (i) => ({
            opacity: 1,
            scale: 1,
            originX: [i == 0 ? 0.5 : i == 1 ? 0.3 : 0.7, 0.5],
            transition: {
                default: {
                    duration: 1,
                    type: 'spring',
                    bounce: 0,
                },
                opacity: { duration: 0, delay: 1 },
            },
        }),
    },
    scrollDownText: {
        hidden: {
            opacity: 0,
            x: '-50%',
            y: 25,
        },
        show: {
            opacity: [0, 1, 1, 0],
            x: ['-50%', '-50%', '-50%', '-50%'],
            y: [-25, 0, 0, 25],
            transition: {
                delay: 1,
                duration: 3,
                times: [0, 0.3, 0.7, 1],
                ease: ['easeOut', 'linear', 'backIn'],
            },
        },
    },
    scrollDownArrow: {
        hidden: {
            height: '25px',
            opacity: 0,
            marginBottom: '25px',
        },
        show: {
            height: '25px',
            opacity: 1,
            marginBottom: '0px',
            transition: {
                delay: 1,
                duration: 2,
                ease: 'easeOut',
            },
        },
    },
}

export const navVariants = {
    Logo: {
        hidden: { opacity: 0, y: -50 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 2, delay: 0.25, ease: 'anticipate' },
        },
    },
    NavLinks: {
        Wrap: {
            hidden: { transition: { staggerChildren: 0.075 } },
            show: {
                transition: {
                    staggerChildren: 0.075,
                    staggerDirection: -1,
                    delayChildren: 0.5,
                },
            },
        },
        Items: {
            hidden: { opacity: 0, y: -25, transition: { duration: 0.5 } },
            show: {
                opacity: 1,
                y: 0,
                transition: { y: { duration: 0.5, ease: 'circOut' } },
            },
        },
    },
    Burger: {
        Wrap: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
        },
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
    MessageBtn: {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
        exit: {
            opacity: 0,
            x: '100%',
            transition: {
                default: { ease: 'backIn' },
                opacity: { duration: 1.25 },
            },
        },
    },
    BackButton: {
        Container: {
            hidden: {
                opacity: 0,
                x: 150,
            },
            show: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.25, ease: 'easeInOut' },
            },
            exit: {
                opacity: 0,
                x: -500,
                transition: { duration: 1, ease: 'backIn' },
            },
        },
        LineA: {
            hidden: { opacity: 0, rotate: 0 },
            show: (i = 0) => ({
                opacity: 1,
                rotate: i,
                transition: {
                    duration: 1.35,
                    delay: 0.75,
                    ease: 'anticipate',
                },
            }),
            exit: (i) => ({
                opacity: 1,
                rotate: i / 2,
                transition: { duration: 0.5, ease: 'backOut' },
            }),
        },
        LineB: {
            hidden: {
                scaleX: 0,
            },
            show: {
                scaleX: 1,
                transition: { duration: 1, delay: 0.25, ease: 'easeInOut' },
            },
            exit: {
                scaleX: 0,
                transition: { duration: 1, ease: 'easeIn' },
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
                delay: 0.25,
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
                    y: { type: 'spring', bounce: 0 },
                },
            }),
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    y: { type: 'spring', bounce: 0 },
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
                restDelata: 0.01,
            },
        },
    },
}

/** ~ CARDS & TABS ~  **/
export const cardVariants = {
    CardSm: {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.5, delay: 0.25 } },
        expanded: { opacity: 0, transition: { duration: 0.25 } },
    },
    MdBg: {
        show: {
            scaleX: 0.5,
            scaleY: 0.95,
            filter: 'brightness(1)',
            transition: {
                scaleX: {
                    duration: 0.5,
                    delay: 0.7,
                    ease: [0.25, 0.5, 0.25, 1],
                },
                default: { duration: 0.2, delay: 0.25 },
            },
        },
        expanded: {
            scaleX: 1,
            scaleY: 1,
            filter: 'brightness(1)',
            transition: {
                scaleX: { duration: 0.5, ease: [0.25, 1, 0.65, 1] },
                default: { duration: 0.25, delay: 0.5, ease: 'easeOut' },
            },
        },
    },
    Img: {
        hidden: (isAbout = null) => ({
            transition: { delay: 0.5 },
        }),
        show: (isAbout = null) => ({
            opacity: 1,
            transition: {
                delay: isAbout == null && 0.5,
                type: 'spring',
                bounce: 0,
            },
        }),
        expanded: (isAbout = null) => ({
            opacity: 0.8,
            x: isAbout == null ? 0 : isAbout ? '100%' : '-100%',

            transition: { duration: isAbout == null ? 0.5 : 0.5 },
        }),
    },
    Content: {
        hidden: { opacity: 1, transition: { delay: 0.5 } },
        show: {
            opacity: 1,
            transition: { duration: 1, delay: 0.5 },
        },
        expanded: (isMd) => ({ opacity: isMd ? 0 : 1 }),
    },
}
export const cardExpanded_Variants = {
    Wrap: {
        hidden: { opacity: 0, transition: { duration: 0.5 } },
        show: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
    },
    Content: {
        hidden: { opacity: 1, transition: { duration: 1 } },
        show: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
    },
    TabListContainer: {
        hidden: {
            opacity: 0,
            y: '100%',
            transition: {
                duration: 1,
                ease: 'backIn',
            },
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.5,
                ease: 'backOut',
            },
        },
    },
}
export const expanded_Variants = {
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

export const tabsMotion = {
    Tabs: {
        enter: (direction) => ({
            opacity: 0,
            x: direction > 0 ? '100%' : '-100%',
        }),
        show: {
            opacity: 1,
            x: 0,
            transition: { ease: [0.5, 0.5, 0, 0.75] },
        },
        exit: (direction) => ({
            opacity: 0,
            x: direction < 0 ? '100%' : '-100%',
            transition: { ease: [0.75, 0, 0.5, 0.5] },
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
            transition: { delay: 0.15, type: 'tween' },
        },
        reduced: {
            color: '#fff',
            transition: { ease: 'easeIn' },
        },
    },
}

/** ~ SECTIONS ~  **/
export const introVariants = {
    TopText: {
        hidden: { opacity: 0, y: 10 },
        show: (i) => {
            const [is1st, is2nd, pause] = [i == 0, i == 1, 0.75]
            const stagger = is1st
                ? 0
                : is2nd
                ? pause
                : i == -1
                ? -0.5
                : pause + i * 0.05
            return {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 1.5 + stagger },
            }
        },
    },
    Title: {
        hidden: {
            pathLength: 0,
            stroke: '#66fcf1',
            strokeOpacity: 1,
            fill: '#ffffff',
            fillOpacity: 0,
        },
        pRM_hidden: {
            pathLength: 0.5,
            stroke: '#66fcf1',
            strokeOpacity: 0,
            fill: '#ffffff',
            fillOpacity: 0,
        },
        show: {
            pathLength: 1,
            stroke: '#ffffff',
            strokeOpacity: 1,
            fill: '#ffffff',
            fillOpacity: 1,
        },
    },
    Content: {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                opacity: { duration: 0.75 },
                y: { duration: 0.75, ease: 'circOut' },
            },
        },
    },
    StyledButton: {
        hidden: {
            opacity: 0,
            pointerEvents: 'none',
            scale: 0.8,
        },
        show: {
            opacity: 1,
            scale: 1,
            pointerEvents: 'auto',
            transition: {
                delay: 0.35,
                opacity: { duration: 1 },
                scale: { duration: 1.5, ease: 'circOut' },
            },
        },
    },
}
export const skillsVariants = {
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
    Certs: {
        accordion: {
            open: {
                opacity: 1,
                height: 'auto',
                transition: {
                    duration: 0.8,
                    ease: [0.04, 0.62, 0.23, 0.98],
                },
            },
            collapsed: {
                opacity: 0,
                height: 0,
                transition: {
                    duration: 0.8,
                    ease: [0.04, 0.62, 0.23, 0.98],
                },
            },
        },
        image: {
            hidden: { opacity: 0, filter: 'blur(3px) brightness(0.75)' },
            show: {
                opacity: 1,
                filter: 'blur(0px) brightness(1)',
                transition: { duration: 0.5 },
            },
            exit: {
                opacity: 0,
                filter: 'blur(3px) brightness(0.75)',
                transition: { duration: 0.5 },
            },
        },
        LinkContainer: {
            hidden: {},
            show: {
                transition: { staggerChildren: 0.2, delayChildren: 0.25 },
            },
            exit: {
                transition: { staggerChildren: 0.1, staggerDirection: -1 },
            },
        },
        LinkItem: {
            hidden: { opacity: 0, y: -200 },
            show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.75, ease: 'easeOut' },
            },
            exit: {
                opacity: 0,
                y: -200,
                transition: { duration: 0.5 },
            },
        },
    },
    Jobs: {
        Container: {
            hidden: {},
            show: {
                transition: { staggerChildren: 0.1, delayChildren: 0.25 },
            },
            exit: {
                transition: { staggerChildren: 0.1 },
            },
        },
        Items: {
            hidden: (pRM) => ({
                opacity: 0,
                clipPath: !pRM
                    ? 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
                    : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }),
            show: {
                opacity: 1,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                },
            },
            exit: (pRM) => ({
                opacity: 0,
                clipPath: !pRM
                    ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
                    : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                transition: {
                    duration: 0.5,
                    ease: 'easeIn',
                },
            }),
        },
    },
}
/****/
export const projectsVariants = {
    title: {
        container: {
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
        },
        items: {
            hidden: { y: 50 },
            show: {
                y: 0,
                transition: { duration: 1, type: 'spring', bounce: 0 },
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
/****/
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
    Content: {
        hidden: { opacity: 0, pointerEvents: 'none' },
        show: { opacity: 1, pointerEvents: 'auto' },
    },
}
/****/
export const ftdSlidesVariants = {
    Slides: {
        enter: {
            opacity: 0,
            x: '-50%',
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.75, ease: [0, 0, 0.5, 1] },
        },
        exit: {
            opacity: 0,
            x: '200%',
            transition: { duration: 1.5, ease: [0.5, 0, 1, 1] },
        },
        close: {
            opacity: 0,
            x: '-50%',
            transition: { duration: 0.5, ease: [0.5, 0, 1, 1] },
        },
    },
    draggableSlides: {
        enter: (direction) => ({
            opacity: 0,
            x: direction > 0 ? '100%' : '-100%',
        }),
        show: {
            opacity: 1,
            x: 0,
            transition: { ease: [0.5, 0.5, 0, 0.75] },
        },
        exit: (direction) => ({
            opacity: 0,
            x: direction < 0 ? '100%' : '-100%',
            transition: { ease: [0.75, 0, 0.5, 0.5] },
        }),
    },
    IndicatorsWrap: {
        hidden: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
    },
    Indicators: {
        hidden: {
            opacity: 0,
            y: 10,
            transition: { duration: 0.5, ease: 'easeIn' },
        },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'circOut' },
        },
    },
}
/****/
export const ftdProjectVariants = {
    isHome: {
        Header: {
            hidden: (i = -1) => ({
                opacity: 0,
                x: i * -50 + '%',
            }),
            show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.75, ease: [0, 0, 0.5, 1] },
            },
            exit: (i = -1) => ({
                opacity: 0,
                x: i * 200 + '%',
                transition: { duration: 1.5, ease: [0.5, 0, 1, 1] },
            }),
        },
    },
    slug: {
        md: {
            header: {
                hidden: {
                    transition: { staggerChildren: 0.1, staggerDirection: -1 },
                },
                show: { transition: { staggerChildren: 0.1, delay: 0.5 } },
            },
            fade: {
                hidden: { opacity: 0 },
                show: { opacity: 1 },
            },
            img: {
                hidden: (i = 0) => ({
                    x: i * -25,
                    scale: 0.9,
                    transition: { duration: 1, ease: 'easeIn' },
                }),
                show: {
                    x: 0,
                    scale: 1,
                    transition: { duration: 1, ease: 'easeOut' },
                },
            },
            item: {
                hidden: (i = 0) => ({
                    x: i * 25,
                    transition: { duration: 1, ease: 'easeIn' },
                }),
                show: {
                    x: 0,
                    transition: { duration: 1, ease: 'easeOut' },
                },
            },
        },
        image: {
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
        },
        title: {
            initial: { y: 0 },
            expanded: { y: 0 },
        },
        description: {
            initial: { opacity: 1, x: 0 },
            expanded: (i) => ({ opacity: 0, x: i }),
        },
        links: {
            initial: { y: 0 },
            expanded: { y: 0 },
        },
    },
}
/****/

export const ftdVariants = [
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
/****/
export const archiveVariants = {}
/****/
export const contactVariants = {
    Container: {
        hidden: { opacity: 0, transition: { delay: 1 } },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.25 },
        },
    },
    Item: {
        hidden: (i = 0) => ({
            x: i * 65 + '%',
            y: 0,
            clipPath: xPolygonBuilder(50 - i * 150),
            transition: {
                duration: 0,
                delay: 1,
                ease: 'easeIn',
            },
        }),
        show: {
            x: 0,
            y: 0,
            clipPath: 'polygon(-5% -5%, 105% -5%, 105% 105%, -5% 105%)',
            transition: { duration: 1.5, ease: 'circOut' },
        },
        exit: (i = 0) => ({
            x: i * 65 + '%',
            y: 0,
            clipPath: xPolygonBuilder(50 - i * 150),
            transition: { duration: 0.75, ease: 'easeIn' },
        }),
    },
    Socials: {
        hidden: { opacity: 0, y: '200%', transition: { duration: 0 } },
        show: (i) => ({
            opacity: 1,
            y: 0,
            transition: { type: 'spring', bounce: 0, delay: 1 + i * 0.08 },
        }),
    },
    Signature: {
        hidden: {
            y: '100%',
            transition: { delay: 1 },
        },
        show: {
            y: 0,
            transition: { duration: 1, delay: 0.5, ease: 'anticipate' },
        },
    },
}
