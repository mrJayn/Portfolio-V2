export const navDelay = 3000
/*export const spring = "spring(1,20,20,5)";*/

/*
SPRING DEFAULTS =
    {
        type: 'spring',
        bounce: 0.25,
        damping: 10,
        mass: 1,
        stiffness: 100,
        velocity: 2,
        restSpeed: 0.01,
        restDelta: 0.01,
    },
*/

export const myVariants = {
    nav: {
        parent: {
            show: {
                opacity: 1,
                transition: {
                    when: 'beforeChildren',
                    staggerChildren: 0.5,
                    staggerDirection: 1,
                },
            },
            hidden: {
                opacity: 0,
            },
        },
        child: {
            show: {
                when: 'beforeChildren',
                y: '0px',
                opacity: 1,
                transition: {
                    type: 'spring',
                    stiffness: 1000,
                    velocity: 300,
                    restDelta: 0.02,
                },
            },
            hidden: {
                y: '-25px',
                opacity: 0,
            },
        },
        child_logo: {
            show: {
                opacity: [
                    0, 0.5, 0.25, 0.75, 0.1, 0.75, 0, 0, 0, 0, 0.5, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0.5, 0.25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5,
                    0.25, 0.75, 1,
                ],
                transition: {
                    delay: 1.25,
                    duration: 1.5,
                },
            },
            hidden: {
                opacity: 0,
            },
        },
        child_links: {
            show: {
                opacity: 1,
                transition: {
                    duration: 0.25,
                },
            },
            hidden: {
                opacity: 0,
            },
        },
        parent_links: {
            show: {
                opacity: 1,
                transition: {
                    when: 'beforeChildren',
                    staggerChildren: 0.07,
                    staggerDirection: 1,
                },
            },
            hidden: {
                opacity: 0,
            },
        },
    },
    burger: {
        top: {
            closed: {
                rotate: 0,
                translateY: [2, 0],
            },
            opened: {
                rotate: [0, 0, 45],
                translateY: [0, 2, 2],
            },
        },
        center: {
            closed: {
                pathLength: [0, 0, 5],
                opacity: [0, 1, 1],
            },
            opened: {
                pathLength: [5, 5, 0],
                opacity: [1, 0, 0],
            },
        },
        bottom: {
            closed: {
                rotate: 0,
                translateY: [-2, 0],
            },
            opened: {
                rotate: [0, 0, -45],
                translateY: [-0, -2, -2],
            },
        },
    },
    menu: {
        menu_clip: {
            show: {
                clipPath: `polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)`,
                transition: {
                    type: 'spring',
                    stiffness: 150,
                    damping: 30,
                    velocity: 50,
                    restDelta: 0.02,
                },
            },
            hide: {
                clipPath: `polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)`,
                transition: {
                    type: 'spring',
                    delay: 0.2,
                    stiffness: 150,
                    damping: 35,
                    velocity: -50,
                },
            },
        },
        parent: {
            show: (custom = true) => ({
                transition: {
                    when: 'beforeChildren',
                    staggerChildren: 0.05,
                    delayChildren: custom ? 0 : 0.5,
                },
            }),
            hide: (custom = true) => ({
                transition: {
                    staggerChildren: custom ? 0.05 : 0,
                    delayChildren: custom ? 0.15 : 0,
                    staggerDirection: custom ? -1 : 1,
                },
            }),
        },
        child: {
            show: {
                y: '0px',
                opacity: 1,
                transition: {
                    type: 'spring',
                    stiffness: 1000,
                    velocity: -300,
                },
            },
            hide: (dy = 50) => ({
                y: -dy + 'px',
                opacity: 0,
                transition: {
                    type: 'spring',
                    stiffness: 150,
                },
            }),
        },
    },
}

export function toggleScrolling(state) {
    if (typeof window !== undefined) {
        document.querySelector('body').style.overflow =
            state == true ? 'auto' : 'hidden'
    }
}
