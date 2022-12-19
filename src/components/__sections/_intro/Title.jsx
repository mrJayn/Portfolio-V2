import { motion } from 'framer-motion'
import { theme } from 'tailwind.config'
import { introVariants as variants } from '@motion'
import { TitlePaths } from './TitlePaths'

const TitleDefs = () => (
    <defs>
        <linearGradient id="TitleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={theme.colors.slate[10]} />
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

    return (
        <div className="relative aspect-[5/1] min-h-[70px] max-w-[100vw] overflow-hidden md:min-h-[92px] lg:min-h-[112px]">
            <svg
                height="100%"
                width="100%"
                viewBox="-10 -15 380 75"
                xmlns="http://www.w3.org/2000/svg"
            >
                <TitleDefs />
                <g
                    strokeLinecap="round"
                    fill="url(#TitleGrad)"
                    fillRule="nonzero"
                    vectorEffect="non-scaling-stroke"
                >
                    {Doubled.map((path, index) => (
                        <motion.path
                            key={`title-letter-${index}`}
                            d={path}
                            style={
                                index < ogLen
                                    ? {
                                          fill: '#000',
                                          strokeWidth: 0,
                                          transform: 'translateY(5px)',
                                          filter: 'blur(1px) contrast(1)',
                                      }
                                    : {}
                            }
                            initial={initialAnim}
                            animate="show"
                            variants={
                                index < ogLen
                                    ? variants.TitleBlur
                                    : variants.Title
                            }
                            transition={propTransition(index)}
                            onAnimationComplete={() => {
                                if (index == Doubled.length - 1)
                                    onTitleComplete()
                            }}
                        />
                    ))}
                </g>
            </svg>
        </div>
    )
}

export default Title