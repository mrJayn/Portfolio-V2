import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { BgProps } from '@components'

const springConfig = {
    type: 'spring',
    stiffness: 400,
    damping: 90,
    mass: 1,
    restDelta: 0.001,
}

function useParallax(value, n, invert = 0) {
    return useTransform(value, (v) => `${(v - invert) * n}vh`)
}

const Background = ({}) => {
    const { scrollYProgress } = useScroll()
    const ySpring = useSpring(scrollYProgress, springConfig)

    // Main
    const y = useTransform(ySpring, [0, 1], ['0vh', '-200vh'])
    // Stars
    const yStars1 = useTransform(ySpring, [0, 1], ['10vh', '-70vh'])
    const opacityStars = useTransform(ySpring, [0, 0.5], [0.5, 0])
    // Clouds
    const xClouds1 = useTransform(ySpring, [0, 1], ['-20vw', '0vw'])
    const xClouds2 = useTransform(ySpring, [0, 1], ['20vw', '0vw'])
    // Moutains & Foreground
    const yFgA = useParallax(ySpring, 75, 0.75)
    const yFgB = useParallax(ySpring, -75, 1)
    const yFgC = useParallax(ySpring, -120, 1)
    const yFgD = useParallax(ySpring, -175, 1)

    return (
        <>
            <BgProps.BgDefs />

            <motion.div
                id="scene-bg"
                className="fixed top-0 left-0 z-0 h-[300vh] w-screen overflow-hidden"
                style={{
                    y,
                    backgroundImage: `
                    linear-gradient(70deg, #112 0%, #0000 0%),
                    linear-gradient(#000 30%, #112 45%, #323 55%, #844, #f95, #f90 90%)`,
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

                <div className="absolute inset-x-0 top-[40%] z-20 opacity-75">
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
                        viewBox="0 0 4000 1990"
                        preserveAspectRatio="xMinYMin slice"
                        className="h-full w-full overflow-visible"
                    >
                        <motion.g id="bg-mtns" style={{ y: yFgA }}>
                            <path
                                d={BgProps.ds.foreground.layer1[0]}
                                fill="url(#grad1)"
                            />
                            <path
                                d={BgProps.ds.foreground.layer1[1]}
                                fill="url(#grad2)"
                            />
                        </motion.g>
                        <motion.path
                            id="bg-trees"
                            style={{ y: yFgB }}
                            d={BgProps.ds.foreground.layer3}
                            fill="url(#grad3)"
                        />
                        <motion.path
                            id="terrain"
                            style={{ y: yFgC }}
                            d={BgProps.ds.foreground.layer4}
                            fill="url(#grad4)"
                        />
                        <motion.g id="foreground" style={{ y: yFgD }}>
                            <rect
                                y="50%"
                                className="full absolute fill-black"
                            />
                            <path
                                d={BgProps.ds.foreground.layer5}
                                fill="#000"
                            />
                        </motion.g>
                    </svg>
                </div>
            </motion.div>
        </>
    )
}

export default Background
