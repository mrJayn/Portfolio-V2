import { motion } from 'framer-motion'
import { theme } from 'tailwind.config'
import { TitlePaths } from '@config'

const vars = {
    A: {
        hidden: { fillOpacity: 0, clipPath: 'inset(0% 0% 100% 0%)' },
        show: {
            fillOpacity: 1,
            clipPath: ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'],
        },
    },
    B: {
        hidden: {
            pathLength: 0,
            stroke: theme.colors.slate.neon,
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
}

const colors = [30, 80].map((v) => theme.colors.slate[v])
const SvgGradient = () => (
    <defs>
        <linearGradient id="TitleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            {colors.map((color, i) => (
                <stop
                    key={`title-gradient-color-${i}`}
                    offset={`${(100 * i) / (colors.length - 1)}%`}
                    stopColor={color}
                />
            ))}
        </linearGradient>
    </defs>
)

const getTransition = (i, anim) => {
    const delay = anim === 'show' ? 0.75 : 0
    const stagger = anim === 'show' ? 0.08 : 0
    const propDelay = (factor) => delay + 0.15 * factor + i * stagger
    return {
        strokeOpacity: {
            duration: 0.25,
            delay: propDelay(0),
        },
        pathLength: {
            duration: 0.5,
            ease: 'easeOut',
            delay: propDelay(1),
        },
        stroke: {
            duration: 0.75,
            ease: 'circIn',
            delay: propDelay(2),
        },
        clipPath: {
            duration: 0.5,
            ease: 'easeOut',
            delay: propDelay(2),
        },
        default: {
            duration: 1,
            ease: 'circOut',
            delay: propDelay(3),
        },
    }
}

const Title = () => (
    <div className="relative aspect-[5/1] h-TitleSVG max-w-[100vw] overflow-hidden">
        <svg
            height="100%"
            width="100%"
            viewBox="-10 -15 380 75"
            xmlns="http://www.w3.org/2000/svg"
        >
            <SvgGradient />
            <g
                strokeLinecap="round"
                fill="url(#TitleGrad)"
                fillRule="nonzero"
                vectorEffect="non-scaling-stroke"
            >
                {TitlePaths.concat(TitlePaths).map((path, i) => {
                    const setA = i < TitlePaths.length
                    return (
                        <motion.path
                            key={`title-letter-${i}`}
                            d={path}
                            style={
                                setA && {
                                    fill: colors[0],
                                    strokeWidth: 0,
                                    y: 2.5,
                                }
                            }
                            variants={{
                                hidden: {
                                    ...vars[setA ? 'A' : 'B'].hidden,
                                    transition: getTransition(
                                        setA ? i : i - TitlePaths.length,
                                        'hide'
                                    ),
                                },
                                show: {
                                    ...vars[setA ? 'A' : 'B'].show,
                                    transition: getTransition(
                                        setA ? i : i - TitlePaths.length,
                                        'show'
                                    ),
                                },
                                exit: {
                                    strokeOpacity: 0,
                                    fillOpacity: 0,
                                    y: -50,
                                    transition: {
                                        duration: 0.75,
                                        ease: 'easeIn',
                                    },
                                },
                            }}
                        />
                    )
                })}
            </g>
        </svg>
    </div>
)

export default Title
