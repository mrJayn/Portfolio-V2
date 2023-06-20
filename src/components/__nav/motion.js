export const navLinksMotion = {
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
}
export const burgerVariants = {
    outer: {
        burg: {
            y: 0,
            rotate: 0,
            transition: {
                y: { delay: 0.35, duration: 0.35 },
                rotate: { duration: 0.35, ease: 'easeIn' },
            },
        },
        x: (i) => ({
            y: i,
            rotate: i * 45,
            transition: {
                y: { duration: 0.35 },
                rotate: { delay: 0.35, duration: 0.35, ease: 'easeOut' },
            },
        }),
    },
    inner: {
        burg: { opacity: 1, transition: { delay: 0.35 } },
        x: { opacity: 0, transition: { delay: 0.35 } },
    },
}
export const backBtnMotion = {
    wrapVars: {
        hidden: {
            opacity: 0,
            transition: { when: 'afterChildren', duration: 0.25, ease: 'easeIn' },
        },
        show: {
            opacity: 1,
            transition: { when: 'beforeChildren', delay: 0.5, duration: 0.25, ease: 'easeIn' },
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
export const logoMotion = {
    pathVars: {
        hidden: {
            pathLength: 0,
            stroke: '#6199ff',
            strokeOpacity: 0,
            strokeWidth: 20,
            fill: '#a3a3a3',
            fillOpacity: 0,
        },
        show: {
            pathLength: 1,
            stroke: '#a3a3a3',
            strokeOpacity: 1,
            strokeWidth: 0,
            fill: '#a3a3a3',
            fillOpacity: 1,
        },
    },
    rectVars: {
        hidden: {
            pathLength: 0,
            stroke: '#6199ff',
            strokeOpacity: 0,
            strokeWidth: 20,
            fill: '#a3a3a3',
            fillOpacity: 0,
        },
        show: {
            pathLength: 1,
            stroke: '#a3a3a3',
            strokeOpacity: 1,
            strokeWidth: 0,
            fill: '#a3a3a3',
            fillOpacity: 1,
            x: 0,
        },
    },
    transition: {
        strokeOpacity: { duration: 0.01 },
        pathLength: { duration: 2, ease: 'easeInOut' },
        default: {
            duration: 2,
            ease: 'easeIn',
            delay: 1.5,
        },
    },
}
