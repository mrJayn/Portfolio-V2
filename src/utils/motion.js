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

const navItem_Enter = { y: { duration: 0.5, ease: 'circOut' } }
const navItem_Exit = { duration: 0.5 }

export const navVariants = {
    Logo: {
        Wrap: {
            hidden: { opacity: 0, y: -50 },
            show: {
                opacity: 1,
                y: 0,
                transition: navItem_Enter,
            },
            exit: {
                opacity: 0,
                y: -50,
                transition: navItem_Exit,
            },
        },
        Letter: {
            hidden: { color: '#00000000' },
            show: {
                color: '#d5d5d7',
                transition: { color: { delay: 0.25 } },
            },
        },
        Blur: {
            hidden: {
                backgroundImage: 'linear-gradient(45deg, #00000000, #00000000)',
                filter: 'blur(0px) saturate(0)  contrast(1)',
            },
            show: {
                backgroundImage: 'linear-gradient(45deg, #8360c3, #45A29E)',
                filter: 'blur(1.5px) saturate(2) contrast(2)',
                transition: {
                    duration: 1,
                    delay: 1,
                    type: 'spring',
                    stiffness: 500,
                },
            },
        },
    },
    NavLinks: {
        Wrap: {
            hidden: {},
            enter: {
                transition: {
                    staggerChildren: 0.075,
                    staggerDirection: -1,
                },
            },
            exit: {
                transition: { staggerChildren: 0.075 },
            },
        },
        Items: {
            hidden: { opacity: 0, y: -15 },
            enter: {
                opacity: 1,
                y: 0,
                transition: navItem_Enter,
            },
            exit: {
                opacity: 0,
                y: -25,
                transition: navItem_Exit,
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
}

export const menuVariants = {
    backgroundClip: {
        hidden: {
            clipPath: `polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`,
            transition: {
                clipPath: {
                    delay: 0.25,
                    type: 'spring',
                    bounce: 0,
                    stiffness: 45,
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
                bounce: 0,
                stiffness: 50,
                restDelta: 0.02,
            },
        },
    },
    LinkWrap: {
        hidden: {
            opacity: 0,
            transition: { when: 'afterChildren', staggerChildren: 0.04 },
        },
        enter: { opacity: 1, transition: { staggerChildren: 0.04 } },
    },
    IconWrap: {
        hidden: {
            opacity: 0,
            transition: { staggerChildren: 0.04 },
        },
        enter: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.5 },
        },
    },
    Icons: {
        hidden: { opacity: 0, transition: { ease: 'circOut' } },
        enter: { opacity: 1, transition: { duration: 2, ease: 'circOut' } },
    },
    Links: {
        hidden: (i = 0) => ({
            opacity: 0,
            y: `${i * -3}em`,
            transition: {
                y: { type: 'spring', bounce: 0 },
                opacity: { ease: 'circOut' },
            },
        }),
        enter: {
            opacity: 1,
            y: 0,
            transition: {
                y: { type: 'spring', bounce: 0 },
                opacity: { ease: 'circIn' },
            },
        },
    },
}

/** ~ CARDS & TABS ~  **/
export const cardVariants = {
    Wrap: {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.5, delay: 0.25 } },
        expanded: { opacity: 0, transition: { duration: 0.25 } },
    },
    BgClip: {
        hidden: {
            opacity: 1,
            clipPath: `polygon(
                0% 0%, 
                100% 0%, 
                100% 100%, 
                0% 100%)`,
        },
        show: (isAbout) => {
            const [x1, x2] = [isAbout ? '0%' : '50%', isAbout ? '50%' : '100%']
            return {
                opacity: 1,
                x: 0,
                clipPath: `polygon(${x1} 0%,  ${x2} 0%,  ${x2} 100%,${x1} 100%)`,
                transition: {
                    default: { delay: 0.5, duration: 1 },
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
    Img: {
        hidden: (isAbout) => ({
            opacity: 0,
            x: isAbout ? '-10%' : '10%',
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
        expanded: (isAbout) => ({
            opacity: 0,
            x: isAbout ? '-10%' : '10%',
            filter: 'blur(4px)  brightness(0.75)',
            transition: { duration: 1 },
        }),
        pRM: {
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { duration: 1, delay: 0.25 } },
            expanded: (isMd) => ({ opacity: isMd ? 0 : 1 }),
        },
    },
    Content: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: 1, delay: 0.25 },
        },
        expanded: (isMd) => ({ opacity: isMd ? 0 : 1 }),
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
            bottom: 0,
            transition: {
                opacity: { duration: 0.5, ease: 'circIn' },
                bottom: { type: 'spring', stiffness: 40 },
            },
        },
        show: {
            opacity: 1,
            bottom: -100,
            transition: {
                opacity: { duration: 1, delay: 0.75 },
                bottom: { delay: 1, type: 'spring', stiffness: 30 },
            },
        },
        TitleProps: {
            initial: 'hidden',
            animate: 'show',
            exit: 'hidden',
            variants: {
                hidden: { opacity: 0, top: 0 },
                show: {
                    opacity: 1,
                    top: '-7.5%',
                    transition: { delay: 1, type: 'spring', stiffness: 30 },
                },
            },
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
            transition: { delay: 0.15, type: 'tween' },
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

/** ~ SECTIONS ~  **/
export const introVariants = {
    TopText: {
        hidden: {
            opacity: 0,
            clipPath: `polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)`,
        },
        show: {
            opacity: 1,
            clipPath: `polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)`,
            transition: { duration: 0.5, delay: 1.5 },
        },
        noClip: {
            hidden: {
                opacity: 0,
            },
            show: {
                opacity: 1,
                transition: { duration: 0.5, delay: 1.5 },
            },
        },
    },
    Title: {
        hide: (titleColor) => ({
            pathLength: 0,
            stroke: '#66fcf1',
            strokeOpacity: 1,
            fill: titleColor,
            fillOpacity: 0,
        }),
        pRM_hide: (titleColor) => ({
            pathLength: 0.5,
            stroke: '#66fcf1',
            strokeOpacity: 0,
            fill: titleColor,
            fillOpacity: 0,
        }),
        enter: (titleColor) => ({
            pathLength: 1,
            stroke: titleColor,
            strokeOpacity: 1,
            fill: titleColor,
            fillOpacity: 1,
        }),
    },
    Content: {
        hidden: { opacity: 0 },
        contentEnter: (pRM) => ({
            opacity: 1,
            transition: { delay: pRM ? 0.5 : 0 },
        }),
    },
    Button: {
        initial: { opacity: 0, scale: 0.65 },
        animate: { opacity: 1, scale: 1, transition: { delay: 0.25 } },
    },
}
export const aboutMotion = {
    Skills: {
        Wrap: {
            closed: {
                filter: 'saturate(0.15) brightness(0.75)',
                boxShadow: '-1px 0px 5px 0px #aaa',
                transition: { type: 'spring', bounce: 0, delay: 0.25 },
            },
            opened: {
                filter: 'saturate(1.25) brightness(1)',
                boxShadow: '-5px 0px 10px -5px #fff',
                transition: { type: 'spring', bounce: 0 },
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
        ItemSm: {
            hidden: { opacity: 0, y: 10, rotateX: 90 },
            show: (i) => ({
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: { delay: 0.25 + i * 0.04 },
            }),
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
    Content: {
        hidden: { opacity: 0, pointerEvents: 'none' },
        show: { opacity: 1, pointerEvents: 'auto' },
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
