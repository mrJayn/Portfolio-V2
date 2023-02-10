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
            opacity: { duration: 0.5 },
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

export const sectionVariants = {
    Content: (isLg) =>
        isLg
            ? {
                  Container: {
                      hidden: {
                          transition: { duration: 0.75, ease: 'easeIn' },
                      },
                      show: {
                          transition: {
                              staggerChildren: 0.25,
                              staggerDirection: 1,
                              delayChildren: 0.25,
                          },
                      },
                      exit: {
                          transition: {
                              duration: 0.75,
                              ease: 'easeIn',
                              staggerChildren: 0.1,
                          },
                      },
                  },
                  Title: {
                      hidden: { opacity: 0 },
                      show: { opacity: 1, transition: { duration: 0.5 } },
                      exit: { opacity: 1 },
                  },
                  Item: {
                      hidden: { opacity: 0 },
                      show: { opacity: 1, transition: { duration: 0.5 } },
                      exit: { opacity: 0 },
                  },
              }
            : {
                  Container: {},
                  Title: {
                      hidden: { opacity: 0 },
                      show: { opacity: 1, transition: { duration: 0.5 } },
                      exit: { opacity: 1 },
                  },
                  Item: {
                      hidden: { opacity: 0 },
                      show: { opacity: 1, transition: { duration: 0.5 } },
                      exit: { opacity: 0 },
                  },
              },
    Contents: {
        Dsktp: {
            Container: {
                hidden: {
                    transition: { duration: 0.75, ease: 'easeIn' },
                },
                show: {
                    transition: {
                        staggerChildren: 0.25,
                        staggerDirection: 1,
                        delayChildren: 0.25,
                    },
                },
                exit: {
                    transition: {
                        duration: 0.75,
                        ease: 'easeIn',
                        staggerChildren: 0.1,
                    },
                },
            },
            Title: {
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.5 } },
                exit: { opacity: 1 },
            },
            Item: {
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.5 } },
                exit: { opacity: 0 },
            },
        },
        Mobile: {
            Container: {},
            Title: {
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.5 } },
                exit: { opacity: 1 },
            },
            Item: {
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.5 } },
                exit: { opacity: 0 },
            },
        },
    },
    Graphic: {
        hidden: (useFtd) => ({
            opacity: 0.15,
            scale: useFtd ? 1 : 0.65,
            borderRadius: '3rem',
            transition: { duration: 1, ease: 'easeInOut' },
        }),
        show: (useFtd) => ({
            opacity: 1,
            scale: useFtd ? 1 : 0.65,
            borderRadius: '3rem',
            transition: { duration: 1.5, ease: 'easeInOut' },
        }),
        exit: (useFtd) => ({
            opacity: useFtd ? 0 : 0.25,
            scale: 1,
            borderRadius: '0rem',
            transition: { duration: 0.75, ease: 'easeInOut' },
        }),
    },
}

export const slugHeroVariants = {
    Container: {
        hidden: { height: '100vh' },
        show: {
            height: '95vh',
            transition: {
                delay: 1.5,
                duration: 0.7,
                ...noBounceSpring,
                staggerChildren: 0.25,
            },
        },
        exit: {
            height: '100vh',
            transition: { duration: 0.7, ...noBounceSpring },
        },
    },
    Title: {
        hidden: (i) => ({
            opacity: i == null ? 0 : 1,
            x: i == null ? 0 : i + '%',
            color: '#FFFF',
            letterSpacing: '0.05em',
        }),
        show: {
            opacity: 1,
            x: '0%',
            color: '#FFF0',
            letterSpacing: '0.15em',
            transition: {
                duration: 2,
                ...noBounceSpring,
            },
        },
        exit: (i) => ({
            opacity: i == null ? 0 : 1,
            x: i == null ? 0 : i + '%',
            color: '#FFFF',
            letterSpacing: '0.05em',
            transition: { duration: 0.75, ...noBounceSpring },
        }),
    },
    Text: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: 0.5, delayChildren: 0.25 },
        },
        exit: { opacity: 0 },
    },
    Decoration: {
        hidden: { opacity: 0, scaleX: 0 },
        show: {
            opacity: 1,
            scaleX: 1,
            transition: { duration: 1.5, ...noBounceSpring },
        },
        exit: {
            opacity: 0,
            scaleX: 0,
            transition: { duration: 0.5 },
        },
    },
    Chevron: {
        hidden: { opacity: 0, y: '10vh' },
        show: {
            opacity: 1,
            y: '-2.5vh',
            transition: {
                delay: 1.5,
                opacity: { duration: 0.4 },
                y: {
                    duration: 0.7,
                    ease: 'backOut',
                },
            },
        },
        exit: {
            opacity: 0,
            y: '10vh',
            transition: { duration: 0.7, ...noBounceSpring },
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
    Wrap: {
        hidden: { opacity: 0, rowGap: '15vh' },
        show: (is1st) => ({
            opacity: 1,
            rowGap: '0vh',
            transition: {
                duration: 1,
                when: 'beforeChildren',
                staggerChildren: 0.15,
                delayChildren: is1st ? 1 : 0,
            },
        }),
        exit: {
            opacity: 0,
            rowGap: '15vh',
            transition: { duration: 0.75 },
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
            hidden: { fillOpacity: 0 },
            show: { fillOpacity: 1 },
        },
    },
    SubHead: {
        hidden: {
            opacity: 0,
            y: '100%',
            clipPath: 'inset(0% 0% 100% 0%)',
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
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'backOut' },
        },
        exit: {
            opacity: 0,
            y: 100,
            transition: { duration: 0.5 },
        },
    },
    Graphic: {
        hidden: { rotate: 0, y: '25vh', scale: 0.5 },
        show: (is1st) => ({
            rotate: 0,
            y: '0vh',
            scale: 1,
            transition: {
                default: { duration: 3, ease: 'easeOut' },
                y: { duration: 3, ease: 'backOut' },
            },
        }),
        exit: {
            rotateX: 67,
            rotateY: 0,
            y: '-150vh',
            transition: { duration: 0.5, ease: 'circIn' },
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
export const ftdSlidesVariants = {
    Slide: {
        show: (i) => ({
            opacity: 1,
            scale: 1,
            x: i * -33 + 'vw',
            transition: { duration: 1, ...noBounceSpring },
        }),
        hidden: {
            opacity: 0,
            scale: 0.9,
            x: '0vw',
            transition: { duration: 0.5 },
        },
    },
    Content: {
        show: (i) => ({
            opacity: i === 0 ? 1 : 0,
            x: i === 0 ? '0%' : '-75%',
            transition: {
                opacity: { duration: 1 },
                x: {
                    duration: 1,
                    type: 'spring',
                    bounce: 0,
                },
            },
        }),
        hidden: (i) => ({
            opacity: 0,
            x: '-15%',
            transition: {
                duration: 0.5,
                ease: 'easeIn',
            },
        }),
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

export const contactSectionVariants = {
    Content: {
        hidden: {},
        show: { transition: { delayChildren: 1 } },
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
    Footer: {
        hidden: { y: '100%', transition: { duration: 0.5, ease: 'backIn' } },
        show: {
            y: '0%',
            transition: { duration: 1, ease: 'backOut' },
        },
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
            transition: { duration: 0.7, ...noBounceSpring },
        }),
        show: {
            opacity: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            transition: {
                clipPath: { duration: 2, ...noBounceSpring },
                opacity: { duration: 0.5 },
            },
        },
        exit: (even = null) => ({
            opacity: 0,
            clipPath: even
                ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
                : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
            transition: { duration: 0.7, ...noBounceSpring },
        }),
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
