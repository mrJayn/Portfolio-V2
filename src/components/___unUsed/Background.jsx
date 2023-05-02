import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from 'framer-motion'
import BgPaths from './BgPaths'

const springConfig = {
    type: 'spring',
    stiffness: 950,
    damping: 400,
    mass: 10,
    restDelta: 0.001,
}

function useParallax(value, n, invert = 0) {
    return useTransform(value, (v) => `${(v - invert) * n}vh`)
}

const Background = ({}) => {
    const reducedMotion = useReducedMotion()

    const { scrollYProgress } = useScroll()
    const ySpring = useSpring(scrollYProgress, springConfig)
    const baseY = reducedMotion ? scrollYProgress : ySpring

    // Main
    const y = useTransform(baseY, [0, 1], ['0vh', '-215vh'])
    const opacity = useTransform(baseY, [0, 1], [1, 0.25])

    // Stars
    const yStars1 = useTransform(baseY, [0, 1], ['10vh', '-70vh'])
    const opacityStars = useTransform(baseY, [0, 0.5], [0.5, 0])
    // Clouds
    const xClouds1 = useTransform(baseY, [0, 1], ['-20vw', '0vw'])
    const xClouds2 = useTransform(baseY, [0, 1], ['20vw', '0vw'])
    // Moutains & Foreground
    const yFgA = useParallax(baseY, 70, 0.85)
    const yFgB = useParallax(baseY, -25, 1)
    const yFgC = useParallax(baseY, -75, 1)
    const yFgD = useParallax(baseY, -150, 1)

    return (
        <>
            <BgGradients />
            <motion.div
                id="scene-bg"
                className="fixed top-0 left-0 z-0 h-[300vh] w-screen overflow-hidden"
                style={{
                    y,
                    opacity,
                    backgroundImage: `
                    linear-gradient(#000 30%, #112 45%, #323 55%, #844, #f95, #f90 90%)`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 2, ease: 'easeIn' },
                }}
            >
                {/** Stars **/}
                <motion.div
                    id="stars-1"
                    className="stars absolute top-0 left-0 z-10 aspect-square h-[3px] rounded-full text-white"
                    style={{ y: yStars1, opacity: opacityStars }}
                />
                <motion.div
                    id="stars-2"
                    className="stars absolute top-0 left-0 z-10 aspect-square h-[2px] scale-y-50 rounded-full text-[#ceb9ff] opacity-50"
                />

                {/** Clouds **/}
                <div className="absolute inset-x-0 top-[40%] z-40 opacity-40">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1000 250"
                        className="full overflow-visible"
                    >
                        <motion.g id="clouds-1" style={{ x: xClouds1 }}>
                            <image
                                width="80%"
                                height="100%"
                                preserveAspectRatio="none"
                                transform="translate(500 0)"
                                xlinkHref="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/starry-sky/images/cloud.png"
                            />
                        </motion.g>
                        <motion.g id="clouds-2" style={{ x: xClouds2 }}>
                            <image
                                width="100%"
                                height="150%"
                                preserveAspectRatio="none"
                                transform="translate(-250 -40) rotate(5)"
                                xlinkHref="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/starry-sky/images/cloud-2.png"
                            />
                        </motion.g>
                    </svg>
                </div>

                {/** Moutains **/}
                <div className="absolute inset-x-0 bottom-0 z-30 h-screen">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 4000 2000"
                        preserveAspectRatio="xMinYMin slice"
                        className="full overflow-visible"
                    >
                        <motion.g id="bg-mtns" style={{ y: yFgA }}>
                            <path
                                d={BgPaths.layer1[0]}
                                fill="url(#mtn-grad1)"
                            />
                            <path
                                d={BgPaths.layer1[1]}
                                fill="url(#mtn-grad2)"
                            />
                        </motion.g>
                        <motion.path
                            id="bg-trees"
                            style={{ y: yFgB }}
                            d={BgPaths.layer3}
                            fill="url(#mtn-grad3)"
                        />
                        <motion.path
                            id="terrain"
                            style={{ y: yFgC }}
                            d={BgPaths.layer4}
                            fill="url(#mtn-grad4)"
                        />
                        <motion.g id="foreground" style={{ y: yFgD }}>
                            <rect y={990} fill="#000" className="full " />
                            <path d={BgPaths.layer5} fill="#000" />
                        </motion.g>
                    </svg>
                </div>
            </motion.div>
        </>
    )
}
const BgGradients = () => (
    <svg width="0" height="0">
        <defs>
            {/** Clouds Defs */}
            <linearGradient
                id="cloud-grad1"
                x1="256"
                y1="128"
                x2="256"
                y2="300"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0.1" stopColor="#f18d3d" />
                <stop offset="0.5" stopColor="#fff" />
                <stop offset="1" stopColor="#41212c" />
            </linearGradient>

            {/** Mountain Gradients */}
            <linearGradient
                id="grad1"
                x1="467.26"
                y1="500"
                x2="467.26"
                y2="225.47"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0.01" stopColor="#ffb8bd" />
                <stop offset="1" stopColor="#914d64" />
            </linearGradient>
            <linearGradient
                id="grad2"
                x1="216.56"
                y1="227.64"
                x2="191.14"
                y2="600.82"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#70375a" />
                <stop offset="0.96" stopColor="#8a6e95" />
            </linearGradient>
            <linearGradient
                id="grad3"
                x1="1"
                y1="413.12"
                x2="340.58"
                y2="413.12"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#433d6c" />
                <stop offset="1" stopColor="#392e54" />
            </linearGradient>
            <linearGradient
                id="grad4"
                x1="259.18"
                y1="335.54"
                x2="213.65"
                y2="500.39"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#0e0a1a" />
                <stop offset="0.3" stopColor="#100d1f" />
                <stop offset="0.64" stopColor="#17142c" />
                <stop offset="0.95" stopColor="#201f3f" />
            </linearGradient>

            {/** Mountain Gradients */}
            <linearGradient
                id="mtn-grad1"
                x1="2000"
                y1="600"
                x2="2000"
                y2="2000"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0.01" stopColor="#ffc0bd" />
                <stop offset="1" stopColor="#914d6488" />
            </linearGradient>
            <linearGradient id="mtn-grad2" x1="0" y1="1" x2="1" y2="1">
                <stop offset="0" stopColor="#70375a" />
                <stop offset="0.96" stopColor="#8a6e95" />
            </linearGradient>

            <linearGradient
                id="mtn-grad3"
                x1="2000"
                x2="2000"
                y1="600"
                y2="1000"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0.2" stopColor="#433d6c" />
                <stop offset="1" stopColor="#17142c" />

                {/** 17142c -- 392e54  */}
            </linearGradient>

            <linearGradient
                id="mtn-grad4"
                x1="2000"
                x2="1970"
                y1="700"
                y2="1000"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#0e0a1a" />
                <stop offset="0.3" stopColor="#100d1f" />
                <stop offset="0.64" stopColor="#17142c" />
                <stop offset="0.95" stopColor="#201f3f" />
            </linearGradient>
        </defs>
    </svg>
)
export default Background
