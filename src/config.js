export const config = {
    email: 'm63jayne@gmail.com',

    colors: {
        black: '#0B0C10',
        charcoal: '#1B1C20',
        teal: '#45A29E',
        neon: '#66FCF1',
    },

    transitions: {
        default_spring: {
            type: 'spring',
            stiffness: 150,
            damping: 30,
            velocity: 50,
        },
    },
}

/**
 * Nav      -> fade_stagger, fadeY, fade,
 * Burger -> fade, burger                           X
 * Menu   -> menu, fadeY, fade
 *
 * Title -> draw
 *
 * Projects          -> featured_items
 * Project_Items -> stagger
 *
 * SlideShow -> slideshow
 *
 * Tabs
 *      List  -> ...
 *      Item -> slideshow
 *
 *
 *
 **/
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
        enter: {
            transition: { staggerChildren: 0.1, staggerDirection: 1 },
        },
        exit: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    },
    fade_stagger: {
        hidden: { opacity: 0 },
        enter: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1,
                staggerDirection: -1,
                delayChildren: 0.75,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                when: 'afterChildren',
                staggerChildren: 0.05,
                staggerDirection: 1,
            },
        },
    },
    sliders: {
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
    },
    featured_items: {
        more: {
            hidden: (even) => ({ opacity: 0, x: even ? 100 : -100 }),
            enter: {
                opacity: 1,
                x: 0,
                transition: {
                    opacity: { delay: 0.35, duration: 0.4 },
                    x: { delay: 0.25, duration: 0.5 },
                },
            },
            exit: (even) => ({
                opacity: 0,
                x: even ? 100 : -100,
                transition: {
                    opacity: { duration: 0.4 },
                    x: { duration: 0.5 },
                },
            }),
        },
    },
    project_items: {
        enter: {
            opacity: 0,
        },
        display: (i) => ({
            opacity: 1,
            transition: {
                duration: 0.1,
            },
        }),
        exit: {
            opacity: 0,
            transition: {
                duration: 0.25,
            },
        },
    },
}
export const linksVariants = {
    navLinks: {
        hidden: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.15,
                staggerDirection: -1,
            },
        },
        enter: {
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.05,
                delayChildren: 0,
            },
        },
    },
    socials: {
        hidden: {
            transition: {
                delayChildren: 0.5,
            },
        },
        enter: {
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.05,
                delayChildren: 0.5,
            },
        },
    },
}
export const menuVariants = {
    backgroundClip: {
        hidden: {
            clipPath: `polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)`,
            transition: {
                type: 'spring',
                delay: 0.2,
                stiffness: 250,
                damping: 35,
                velocity: -50,
            },
        },
        enter: {
            clipPath: `polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)`,
            transition: {
                type: 'spring',
                stiffness: 250,
                damping: 40,
                velocity: 50,
                restDelta: 0.02,
            },
        },
    },
    parent: {
        hidden: (custom = true) => ({
            transition: {
                staggerChildren: custom ? 0.05 : 0,
                delayChildren: custom ? 0.15 : 0.5,
                staggerDirection: custom ? -1 : 1,
            },
        }),
        enter: (custom = true) => ({
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.05,
                delayChildren: custom ? 0 : 0.5,
            },
        }),
    },
}
export const burgerVariants = {
    top: {
        closed: {
            rotate: 0,
            translateY: 0,
        },
        opened: (i) => ({
            rotate: 45,
            translateY: i / 2,
        }),
        return: (i) => ({
            rotate: -30,
            translateY: i / 4,
        }),
    },
    center1: {
        closed: {
            pathLength: -1,
            opacity: 1,
            rotate: 0,
            translateY: 0,
            translateX: 0,
        },
        opened: {
            pathLength: 0,
            opacity: 0,
            translateY: 0,
            translateX: -2,
        },
        return: (i) => ({
            pathLength: -1,
            opacity: 1,
            rotateZ: -30,
            translateY: -i / 4,
            translateX: 0.5 + i / 2,
            originX: 1,
        }),
    },
    center2: {
        closed: {
            pathLength: -1,
            opacity: 1,
            translateY: 0,
            translateX: 0,
        },
        opened: {
            pathLength: 0,
            opacity: 0,
            translateY: 0,
            translateX: 2,
        },
        return: (i) => ({
            pathLength: -1,
            opacity: 1,
            rotateZ: 30,
            translateY: i / 4,
            translateX: 0.5,
            originX: 1,
        }),
    },
    bottom: {
        closed: {
            rotate: 0,
            translateY: 0,
        },
        opened: (i) => ({
            rotate: -45,
            translateY: -i / 2,
        }),
        return: (i) => ({
            rotate: 30,
            translateY: -i / 4,
        }),
    },
}
export const titleVariants = {
    hidden: {
        pathLength: 0,
        opacity: 0,
        fill: '#00000000',
        stroke: '#66FCF1' /** COLOR-NEON**/,
    },
    visible: (i) => {
        const delay = 1 + i * 0.15
        return {
            pathLength: 1,
            opacity: 1,
            fill: '#000',
            stroke: '#000',
            transition: {
                pathLength: {
                    delay,
                    type: 'spring',
                    duration: 1,
                    bounce: 0,
                },
                opacity: { delay, duration: 0.01 },
                fill: { delay: delay + 0.65, duration: 0.5 },
                stroke: { delay: delay + 0.05, duration: 0.5 },
            },
        }
    },
}
export const layoutVariants = {
    hidden: (isHome) => {
        return {
            opacity: 0,
            x: isHome ? -200 : 200,
        }
    },
    enter: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, type: 'spring' },
    },
    exit: (isHome) => ({
        opacity: 0,
        x: isHome ? -200 : 200,
        transition: { duration: 1, type: 'spring' },
    }),
}
export const cardVariants = {
    infoCard: {
        hidden: (isLtr) => {
            return {
                opacity: 0,
                x: isLtr ? 25 : -25,
            }
        },
        enter: (isLtr) => {
            return {
                opacity: 1,
                x: 0,
                boxShadow: [
                    '0px 0px 0px 0px black',
                    `${isLtr ? 20 : -20}px 0px 20px -20px black`,
                    `${isLtr ? 7 : -7}px 0px 5px -10px black`,
                ],
                transition: {
                    default: {
                        delay: 0.25,
                        duration: 1,
                        ease: 'easeOut',
                    },
                    opacity: { delay: 0.25, duration: 0.5 },
                    backgroundColor: { delay: 2, duration: 1 },
                    boxShadow: { duration: 1.75, delay: 0.5 },
                },
            }
        },
    },
    imgCard: {
        hidden: (isLtr) => ({
            opacity: 0,
            x: isLtr ? '-100%' : '100%',
        }),
        enter: {
            opacity: 1,
            x: 0,
            transition: {
                opacity: {
                    delay: 0.75,
                    duration: 1.25,
                    ease: 'easeOut',
                },
                x: { delay: 0.35, duration: 1.5, ease: 'easeOut' },
            },
        },
    },
}
