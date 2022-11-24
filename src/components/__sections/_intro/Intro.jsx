import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'

import { TitlePaths } from './TitlePaths'
import { Styled_Button } from '@components'
import { introVariants as variants } from '@motion'
import { theme } from 'tailwind.config'

const TitleDefs = () => (
    <defs>
        <linearGradient id="TitleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={theme.colors.slate[40]} />
            <stop offset="100%" stopColor={theme.colors.slate[30]} />
        </linearGradient>
    </defs>
)
const Title = ({ initialDelay, onTitleComplete, initialAnim }) => {
    const ogLen = TitlePaths.length
    const Doubled = TitlePaths.concat(TitlePaths)

    const propTransition = (idx) => {
        const i = idx < ogLen ? idx + 1 : idx - ogLen
        const propDelay = (i, extraDelay) =>
            initialDelay + extraDelay + i * 0.08
        return {
            strokeOpacity: {
                duration: 0.25,
                delay: propDelay(i, 0),
            },
            pathLength: {
                duration: 0.5,
                ease: 'easeInOut',
                delay: propDelay(i, 0.15),
            },
            stroke: {
                duration: 0.75,
                ease: 'circIn',
                delay: propDelay(i, 0.3),
            },
            // fillOpacity & strokeWidth
            default: {
                duration: 1,
                ease: 'circInOut',
                delay: propDelay(i, 0.45),
            },
        }
    }

    const Title_Letters = () =>
        Doubled.map((path, i) => (
            <motion.path
                key={`title-letter-${i}`}
                d={path}
                style={
                    i < ogLen
                        ? {
                              fill: '#000',
                              strokeWidth: 0,
                              transform: 'translateY(5px)',
                              filter: 'blur(0px) contrast(2) brightness(0)',
                          }
                        : {}
                }
                initial={initialAnim}
                animate="show"
                variants={i < ogLen ? variants.TitleBlur : variants.Title}
                transition={propTransition(i)}
                onAnimationComplete={() => {
                    if (i == Doubled.length - 1) onTitleComplete()
                }}
            />
        ))
    return (
        <div className="relative aspect-[400/75] h-[1.25em] max-w-[90vw] text-6xl sm:h-[1.5em] md:h-[1.75em]">
            <svg viewBox="-20 -20 400 75" xmlns="http://www.w3.org/2000/svg">
                <TitleDefs />
                <g
                    strokeLinecap="round"
                    fill="url(#TitleGrad)"
                    fillRule="nonzero"
                    vectorEffect="non-scaling-stroke"
                >
                    <Title_Letters />
                </g>
            </svg>
        </div>
    )
}

const Intro = ({ isFirstLoad }) => {
    const ContentControls = useAnimation()
    const initialAnim = isFirstLoad.current ? 'hidden' : 'show'

    const onTitleComplete = () => {
        if (!isFirstLoad.current) return
        ContentControls.start('show')
        isFirstLoad.current = false
    }

    return (
        <motion.div
            className="flex-col-center full select-none md:absolute md:top-0 md:left-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.5, when: 'beforeChildren' }}
        >
            {/****/}
            <Title
                initialAnim={initialAnim}
                initialDelay={isFirstLoad.current ? 1.5 : 0.75}
                onTitleComplete={onTitleComplete}
            />
            {/****/}
            <motion.h2
                data-text="Portfolio"
                initial={initialAnim}
                animate={ContentControls}
                variants={variants.Content}
            >
                Portfolio
            </motion.h2>
            {/****/}
            <motion.div
                className="flex-col-btw mt-20 h-32 md:mt-32 md:h-auto md:w-9/12  md:flex-row md:justify-evenly landscape:mt-10 md:landscape:mt-32"
                initial={initialAnim}
                animate={ContentControls}
                variants={variants.StyledButton}
            >
                <Styled_Button>
                    <Link
                        href={{
                            pathname: '/section/[slug]',
                            query: { slug: 'projects' },
                        }}
                        as={'/Projects'}
                        scroll={false}
                    >
                        VIEW MY PROJECTS
                    </Link>
                </Styled_Button>
            </motion.div>
        </motion.div>
    )
}
export default Intro
