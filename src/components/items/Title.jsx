import { motion } from 'framer-motion'
import { theme } from 'tailwind.config'
import { TitlePaths_split, Title_Paths } from '@config'
import { TitleVariants } from '@motion'
import { useEffect } from 'react'

const vars = {
    A: {
        hidden: { opacity: 1, clipPath: 'inset(-10% -10% 100% -10%)' },
        show: {
            opacity: 1,
            clipPath: [
                'inset(110% -10% -10% -10%)',
                'inset(-10% -10% -10% -10%)',
            ],
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

const slate = (x) => theme.colors.slate[x]

const getTr = (n, dly = 0.5, stag = 0.1) => {
    const getDe = (factor) => dly + 0.2 * factor + n * stag
    return {
        strokeOpacity: {
            duration: 0.2,
            delay: getDe(0),
        },
        pathLength: {
            duration: 0.4,
            ease: 'linear',
            delay: getDe(1),
        },
        stroke: {
            duration: 0.2,
            delay: getDe(3),
        },
        default: {
            duration: 1,
            ease: 'circIn',
            delay: getDe(2),
        },
    }
}

const Title = () => {
    const { MICHAEL, JAYNE } = TitlePaths_split
    /*
        MICHAEL -   0 0   576.6   111.0
        JANYE     -   0 0   424.8  141.6
        -----------------------------
                            0 0       -      252.6
        Full          -   0 0 1027.2 144.6
    */

    return (
        <svg
            id="title-lg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -20 1028 150"
            className="h-title max-w-full overflow-visible"
            preserveAspectRatio="xMidYMid"
            style={{
                strokeLinecap: 'round',
                vectorEffect: 'non-scaling-stroke',
            }}
        >
            <defs>
                <linearGradient
                    id="title-grad1"
                    x1="0"
                    y1="-20"
                    x2="0"
                    y2="150"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#000" />
                    <stop offset={0.15} stopColor={theme.colors.slate[40]} />
                    <stop offset={1} stopColor="#FFF" />
                </linearGradient>
            </defs>
            {Title_Paths.map((path, i) => (
                <motion.path
                    key={`jayne-letter${i}`}
                    d={path}
                    fill="url(#title-grad1)"
                    variants={TitleVariants}
                    transition={getTr(i)}
                />
            ))}
        </svg>
    )
}
/*
  <g transform="translate(0 0)">
                    {MICHAEL.map((path, i) => (
                        <motion.path
                            key={`jayne-letter${i}`}
                            d={path}
                            fill="url(#title-grad1)"
                            variants={TitleVariants}
                            transition={getTr(i)}
                        />
                    ))}
                </g>
                <g transform="translate(43.3 -5)">
                    {JAYNE.map((path, i) => (
                        <motion.path
                            key={`jayne-letter${i}`}
                            d={path}
                            fill="url(#title-grad1)"
                            variants={TitleVariants}
                            transition={getTr(i + 8)}
                        />
                    ))}
                </g>
*/
export default Title
