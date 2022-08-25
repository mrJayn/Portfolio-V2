import { theme } from 'tailwind.config'

import assets from '@assets'
import { default_spring } from '@utils'

import { FaGithub, FaCodepen, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

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
            title: 'featured',
            url: '/#featured',
        },
        {
            title: 'projects',
            url: '/#projects',
        },
        {
            title: 'contact',
            url: '/#contact',
        },
        {
            title: 'my RESUME',
            url: '/assets/misc/resume2022.jpg',
        },
    ],
    skills: [
        {
            item: '1',
            skill: 'HTML',
            url: assets.skills.htmlImg,
        },
        {
            item: '2',
            skill: 'CSS',
            url: assets.skills.cssImg,
        },
        {
            item: '3',
            skill: 'Javascript',
            url: assets.skills.jsImg,
        },
        {
            item: '4',
            skill: 'React',
            url: assets.skills.reactImg,
        },
        {
            item: '5',
            skill: 'Tailwind',
            url: assets.skills.tailwindImg,
        },
        {
            item: '6',
            skill: 'Github',
            url: assets.skills.githubImg,
        },
        {
            item: '7',
            skill: 'Node',
            url: assets.skills.nodeImg,
        },
        {
            item: '8',
            skill: 'Python',
            url: assets.skills.pyImg,
        },
        {
            item: '9',
            skill: 'TensorFlow',
            url: assets.skills.tensorImg,
        },
    ],
    transitions: {
        default_spring: {
            type: 'spring',
            stiffness: 150,
            damping: 30,
            velocity: 50,
        },
    },
}

export const Variants = {
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
    fade_props: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    },
    fade: {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
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
    },
    cards: {
        infoCard: {
            hidden: (infoLoc) => {
                return {
                    opacity: 0,
                    x: infoLoc == 'left' ? 25 : -25,
                    backgroundColor: '#ffffffff',
                }
            },
            inView: (infoLoc) => {
                const just = infoLoc === 'left' ? 1 : -1
                return {
                    opacity: 1,
                    x: 0,
                    backgroundColor: '#ffffff00',
                    boxShadow: [
                        '0px 0px 0px 0px black',
                        `${just * 20}px 0px 20px -20px black`,
                        `${just * 7}px 0px 5px -10px black`,
                    ],
                    transition: {
                        default: { delay: 0.25, duration: 1, ease: 'easeOut' },
                        opacity: { delay: 0.25, duration: 0.5 },
                        backgroundColor: { delay: 2, duration: 1 },
                        boxShadow: { duration: 1.75, delay: 0.5 },
                    },
                }
            },
        },
        imgCard: {
            hidden: (infoLoc) => ({
                opacity: 0,
                x: infoLoc == 'left' ? '-100%' : '100%',
            }),
            inView: {
                opacity: 1,
                x: 0,
                transition: {
                    opacity: { delay: 0.75, duration: 1.25, ease: 'easeOut' },
                    x: { delay: 0.5, duration: 1.5, ease: 'easeOut' },
                },
            },
        },
        expanded_props: {},
        exitBtn_props: {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0, transition: { delay: 0.15 } },
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.95 },
        },
    },
    title: {
        hidden: {
            pathLength: 0,
            opacity: 0,
            fill: '#00000000',
            stroke: theme.colors.neon,
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
