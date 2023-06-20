import { theme } from 'tailwind.config'

export const bounce = (value, { reverse = false } = {}) =>
    [0, 0.1, 0.43, 0.98, 0.75, 0.98, 0.93, 0.99, 0.98, 1].map((v) => (reverse ? 1 - v : v) * value)
export const bounceTimes = [0, 0.12, 0.24, 0.36, 0.54, 0.74, 0.82, 0.94, 0.96, 1]

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

export const FadeInOut = ({ duration = 0.5, delay = 0, delayShow = 0, delayExit = 0 } = {}) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: delay + delayShow, duration: duration, ease: 'easeIn' } },
    exit: { opacity: 0, transition: { delay: delay + delayExit, duration: duration, ease: 'easeIn' } },
})
