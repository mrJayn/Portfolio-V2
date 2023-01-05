const xPolygonBuilder = (x) =>
    `polygon(${x}% 0%, ${x}% 0%, ${x}% 100%, ${x}% 100%)`
const yPolygonBuilder = (y) =>
    `polygon(0% ${y}%, 100% ${y}%, 100% ${y}%, 0% ${y}%)`

export const springTransition = {
    type: 'spring',
    stiffness: 250,
    damping: 56,
    mass: 3,
    restDelta: 0.001,
}
const noBounceSpring = {
    type: 'spring',
    bounce: 0,
}
const defaultBtn = {
    hidden: {
        opacity: 0,
        scale: 0.6,
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
            opacity: { duration: 0.75 },
            scale: { duration: 1, ease: 'circOut' },
        },
    },
    exit: {
        opacity: 0,
        scale: 0.6,
        pointerEvents: 'none',
        transition: {
            opacity: { duration: 0.4 },
            scale: { duration: 0.5 },
        },
    },
}

export const layoutVariants = {
    HomePage: {
        hidden: { opacity: 1 },
        show: { opacity: 1 },
        exit: { opacity: 1, transition: { delay: 1 } },
    },
    SectionPage: {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { delay: 1 } },
        exit: { opacity: 0, transition: { delay: 1 } },
    },
    Contact: {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
        exit: { opacity: 0, transition: { delay: 1 } },
    },
    Mobile: {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
        exit: { opacity: 0 },
    },
}
export const sectionVariants = {
    Graphic: (custom = null) => ({
        hidden: {
            opacity: 0,
            scale: custom == null ? 0.65 : 0.9,
            borderRadius: '3rem',
            transition: { duration: 1.5, ease: 'easeInOut' },
        },
        show: {
            opacity: 1,
            scale: custom == null ? 0.65 : 0.9,
            borderRadius: '3rem',
            transition: { duration: 1.5, ease: 'easeInOut' },
        },
        exit: {
            opacity: 0.25,
            scale: custom == null ? 1 : 0.9,
            borderRadius: '0rem',
            transition: { duration: 0.75, ease: 'easeInOut' },
        },
    }),
}
export const sectionCardVariants = {
    Container: {
        hidden: {
            rowGap: '100px',
            transition: { duration: 0.75, ease: 'easeIn' },
        },
        show: {
            rowGap: '0px',
            transition: {
                delay: 0.25,
                duration: 1,
                ease: 'circOut',
                staggerChildren: 0.1,
                delayChildren: 0.15,
            },
        },
        exit: {
            rowGap: '100px',
            transition: {
                duration: 0.75,
                ease: 'easeIn',
                staggerChildren: 0.1,
            },
        },
    },
    Item: {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
        exit: { opacity: 0 },
    },
}
export const sectionHeroVariants = {
    Container: {
        show: { transition: { staggerChildren: 0.25, staggerDirection: -1 } },
    },
    Headings: {
        hidden: {
            opacity: 0,
            clipPath: 'polygon(50% 0%, 50% 0%, 50% 105%, 50% 105%)',
            transition: { duration: 0.75, ease: 'easeIn' },
        },
        show: {
            opacity: 1,
            clipPath: 'polygon(-5% 0%, 105% 0%, 105% 105%, -5% 105%)',
            transition: { duration: 2, ...noBounceSpring },
        },
    },
    Decoration: {
        hidden: {
            opacity: 0,
            scaleX: 0,
            transition: { duration: 0.75, ease: [0.4, 0, 0.15, 1] },
        },
        show: {
            opacity: 1,
            scaleX: 1,
            transition: { duration: 3, ...noBounceSpring },
        },
    },
}

export const navVariants = {
    NavLinks: {
        hidden: (i) => ({
            y: -50,
            transition: { duration: 0.5, delay: i * 0.075 },
        }),
        show: (i) => ({
            y: 0,
            transition: {
                duration: 1,
                delay: 1.75 + i * 0.075,
            },
        }),
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
    BackButton: {
        LineA: {
            hidden: {
                scaleX: 0,
                originX: [0, -1],
                transition: { duration: 0.5 },
            },
            show: {
                scaleX: 1,
                originX: [2, 1],
                transition: { duration: 1, delay: 0.25, ease: 'easeOut' },
            },
        },
        LineB: {
            hidden: {
                opacity: 0,
                rotate: 0,
                transition: { duration: 0.25 },
            },
            show: (i = 0) => ({
                opacity: 1,
                rotate: i,
                transition: {
                    duration: 1.35,
                    delay: 0.75,
                    ease: 'anticipate',
                },
            }),
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
    Wrap: {
        hidden: (is1st) => ({
            opacity: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.25,
                staggerDirection: -1,
            },
        }),
        show: (is1st) => ({
            opacity: 1,
            transition: {
                duration: 1,
                when: 'beforeChildren',
                staggerChildren: 0.25,
                delayChildren: is1st ? 3 : 0,
            },
        }),
        exit: {
            opacity: 0,
            transition: { duration: 0.25, ease: 'easeIn' },
        },
    },
    TitleVars: {
        Title: {
            hidden: {
                pathLength: 0,
                stroke: '#66fcf1',
                strokeWidth: 2,
                strokeOpacity: 0,
                fillOpacity: 0,
            },
            show: {
                pathLength: 1,
                stroke: '#fff',
                strokeWidth: 0,
                strokeOpacity: 1,
                fillOpacity: 1,
            },
        },
        TitleBlur: {
            hidden: {
                fillOpacity: 0,
            },
            show: {
                fillOpacity: 1,
            },
        },
    },
    SubHead: {
        hidden: {
            opacity: 0,
            y: '100%',
            clipPath: 'inset(0% 0% 100% 0%)',
            transition: { duration: 0.5 },
        },
        show: {
            opacity: 1,
            y: '0%',
            clipPath: 'inset(0% 0% 0% 0%)',
            transition: {
                y: { duration: 1, ease: 'circOut' },
                clipPath: { duration: 1, ease: 'circOut' },
            },
        },
    },
    Btn: { ...defaultBtn },
    NextSectionBtn: {
        hidden: {
            opacity: 0,
            y: 50,
            transition: { duration: 0.5, ease: 'backIn' },
        },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'backOut' },
        },
        exit: { opacity: 0 },
    },
    Graphic: {
        hidden: {
            rotateX: 67,
            rotateY: 0,
            y: '75vh',
            transition: { duration: 1, ease: 'circIn' },
        },
        show: (is1st) => ({
            rotateX: 75,
            rotateY: 5,
            y: '0vh',
            transition: {
                delay: is1st ? 3.5 : 0.5,
                default: { duration: 2, ease: 'easeOut' },
                y: { duration: 2, ease: 'backOut' },
            },
        }),
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
export const ftdSlidesVariants = {
    Slides: {
        Dsktp: {
            hidden: (direction = -1) => ({
                opacity: 0,
                x: direction == -1 ? '-150%' : '250%',
            }),
            show: {
                opacity: 1,
                x: '0%',
            },
            next: (direction = -1) => ({
                opacity: 0,
                x: direction == -1 ? '250%' : '-150%',
            }),
        },
        Mble: {
            hidden: (direction) => ({
                opacity: 0,
                x: direction > 0 ? '100%' : '-100%',
            }),
            show: {
                opacity: 1,
                x: 0,
            },
            next: (direction) => ({
                opacity: 0,
                x: direction < 0 ? '100%' : '-100%',
            }),
        },
        HeaderLg: {
            hidden: (i = -1) => ({
                opacity: 0,
                x: i == -1 ? '-75%' : '125%',
            }),
            show: {
                opacity: 1,
                x: 0,
                transition: {
                    opacity: { duration: 1 },
                    x: {
                        duration: 2.5,
                        type: 'spring',
                        bounce: 0,
                    },
                },
            },
            exit: (i = -1) => ({
                opacity: 0,
                x: i == -1 ? '125%' : '-75%',
                transition: { duration: i == -1 ? 1.25 : 0.75, ease: 'easeIn' },
            }),
        },
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
    PlayPauseControls: {
        show: {
            opacity: 1,
            x: '0%',
            transition: { delay: 1, duration: 1, ease: 'circOut' },
        },
        exit: {
            opacity: 0,
            x: '-200%',
            transition: { delay: 0, duration: 0.5, ease: 'easeIn' },
        },
    },
}
export const full_projectVariants = {
    FullPage: {
        Header: {
            hidden: {
                transition: { staggerChildren: 0.1, staggerDirection: -1 },
            },
            show: { transition: { staggerChildren: 0.1, delay: 0.5 } },
        },
        Image: {
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
        Item: {
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
}
export const archiveVariants = {
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
}

export const contactSectionVariants = {
    Content: {
        hidden: {},
        show: { transition: { delayChildren: 1.5 } },
    },
    Headline: {
        h3: {
            hidden: {
                opacity: 0,
                clipPath: 'inset(0 0 100% 0)',
                transition: { duration: 0.5 },
            },
            show: {
                opacity: 1,
                clipPath: 'inset(0 0 0% 0)',
                transition: { duration: 1, ease: 'easeInOut' },
            },
        },
        Decoration: {
            hidden: {
                opacity: 0,
                scaleX: 0,
                bottom: '100%',
                transition: {
                    default: { delay: 0.5 },
                    bottom: { duration: 0.5 },
                },
            },
            show: {
                opacity: 1,
                scaleX: 1,
                bottom: '0%',
                transition: {
                    default: { duration: 0.5, ease: 'easeOut' },
                    bottom: { duration: 1, ease: 'easeInOut' },
                },
            },
        },
    },
    Button: {
        hidden: {
            opacity: 0,
            scale: 0.6,
            transition: { duration: 0.25 },
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: 'backOut' },
        },
    },
    Socials: {
        Container: {
            hidden: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
            },
            show: { transition: { staggerChildren: 0.1 } },
        },
        Item: {
            hidden: {
                opacity: 0,
                y: '100%',
                clipPath: 'inset(0 0 100% 0)',
                transition: { duration: 0.25 },
            },
            show: {
                opacity: 1,
                y: '0%',
                clipPath: 'inset(0 0 0% 0)',
                transition: { duration: 0.5, ease: 'backOut' },
            },
        },
    },
}

export const contactVariants = {
    Wrapper: {
        hidden: {
            opacity: 1,
            transition: { when: 'afterChildren' },
        },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.33, delayChildren: 1 },
        },
    },
    Item: {
        hidden: {
            opacity: 0,
            transition: { duration: 0.5 },
        },
        show: {
            opacity: 1,
            transition: { duration: 0.75 },
        },
    },
    FormContainer: {
        hidden: (isLg) => ({
            rowGap: isLg ? '24px' : '16px',
            transition: { delay: 0.5 },
        }),
        show: { rowGap: '8px', transition: { duration: 1, ...noBounceSpring } },
    },
}

export const tabsMotion = {
    Wrap: {
        hidden: { opacity: 0, transition: { when: 'beforeChildren' } },
        show: { opacity: 1, transition: { delay: 0.5 } },
    },
    Content: {
        hidden: { opacity: 1, transition: { duration: 1 } },
        show: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
    },
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

export const styledComponentsVariants = {
    Background: {
        hidden: (even = null) => ({
            opacity: 0,
            clipPath: even
                ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
                : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
            transition: { duration: 0.75, ease: 'easeIn' },
        }),
        show: {
            opacity: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            transition: { duration: 2, ...noBounceSpring },
        },
    },
}
