import { FaGithub, FaCodepen, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { default_spring, BurgerUnitSize } from '@utils'
import { theme } from 'tailwind.config'

export const config = {
    email: 'm63jayne@gmail.com',
    socials: [
        {
            title: 'GitHub',
            url: 'https://github.com/mrJayn',
            icon: FaGithub,
        },
        {
            title: 'Codepen',
            url: 'https://codepen.io/mrjayn',
            icon: FaCodepen,
        },
        {
            title: 'Linkedin',
            url: 'https://www.linkedin.com/in/',
            icon: FaLinkedinIn,
        },
        {
            title: 'Email',
            url: 'mailTo',
            icon: AiOutlineMail,
        },
    ],
    sectionLinks: [
        {
            title: 'about',
            url: '/#about',
        },
        {
            title: 'experience',
            url: '/#experience',
        },
        {
            title: 'projects',
            url: '/#featured',
        },
        {
            title: 'contact',
            url: '/#contact',
        },
    ],
    variants: {
        fade: {
            hidden: { opacity: 0 },
            enter: { opacity: 1 },
            exit: { opacity: 0 },
        },
        fadeX: {
            hidden: (i = 50) => ({ opacity: 0, x: -i }),
            enter: { opacity: 1, x: 0 },
            exit: (i = 50) => ({ opacity: 0, x: i }),
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
        nav: {
            logo: {
                hidden: {
                    opacity: 0,
                    transition: default_spring,
                },
                enter: (isMd = false) => ({
                    opacity: [
                        0, 0.5, 0.25, 0.75, 0.1, 0.75, 0, 0, 0, 0, 0.5, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0.5, 0.25, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0.5, 0.25, 0.75, 1,
                    ],
                    transition: {
                        when: 'afterChildren',
                        delay: isMd ? 2 : 1.25,
                        duration: 1.5,
                    },
                }),
            },
            links: {
                hidden: {
                    opacity: 0,
                    transition: {
                        exitTransition: default_spring,
                        when: 'beforeChildren',
                    },
                },
                enter: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                        staggerDirection: 1,
                    },
                },
            },
        },
        burger: {
            top: {
                init: {
                    rotate: 0,
                    translateY: 0,
                },
                closed: {
                    rotate: [null, 0],
                    translateY: [null, 0],
                },
                opened: (i) => ({
                    rotate: [0, 0, 45],
                    translateY: [0, i / 2, i / 2],
                }),
                return: (i) => ({
                    rotate: [null, -30],
                    translateY: [null, i / 4],
                }),
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
                return: (i) => ({
                    pathLength: [null, 0, -1],
                    opacity: [null, 0, 1],
                    rotateZ: [null, 0, -30],
                    translateY: [null, 0, -i / 4],
                    translateX: [null, 0, 0.5 + i / 2],
                    originX: 1,
                }),
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
                return: (i) => ({
                    pathLength: [null, 0, -1],
                    opacity: [null, 0, 1],
                    rotateZ: [null, 0, 30],
                    translateY: [null, 0, i / 4],
                    translateX: [null, 0, 0.5],
                    originX: 1,
                }),
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
                opened: (i) => ({
                    rotate: [0, 0, -45],
                    translateY: [-0, -i / 2, -i / 2],
                }),
                return: (i) => ({
                    rotate: [null, 30],
                    translateY: [null, -i / 4],
                }),
            },
        },
        menu: {
            backgroundClip: {
                hidden: {
                    clipPath: `polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)`,
                    transition: {
                        type: 'spring',
                        delay: 0.2,
                        stiffness: 150,
                        damping: 35,
                        velocity: -50,
                    },
                },
                enter: {
                    clipPath: `polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)`,
                    transition: {
                        type: 'spring',
                        stiffness: 150,
                        damping: 30,
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
        },
        cards: {
            stagger: {
                hidden: {
                    opacity: 0,
                    height: 0,
                    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
                },
                enter: {
                    opacity: 1,
                    height: 'auto',
                    transition: {
                        staggerChildren: 0.07,
                        staggerDirection: -1,
                    },
                },
            },
        },
        draw: {
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
        },
        slideshow: {
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
    },
}
