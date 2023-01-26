import { motion } from 'framer-motion'

const Graphic = ({ ...props }) => {
    // https://www.solarsystemscope.com/textures/download/2k_earth_nightmap.jpg
    // https://eoimages.gsfc.nasa.gov/images/imagerecords/144000/144898/BlackMarble_2016_01deg.jpg
    const src =
        'https://eoimages.gsfc.nasa.gov/images/imagerecords/144000/144898/BlackMarble_2016_01deg.jpg'

    const Moon = ({ size = 1, radius, freq }) => {
        return (
            <div
                key="orbit"
                className="absolute top-1/2 left-1/2 rounded-full"
                style={{
                    height: `${radius}em`,
                    width: `${radius}em`,
                    margin: `${radius / -2}em 0em 0em ${radius / -2}em`,
                    animation: `orbit ${freq}s linear infinite`,
                    transformStyle: 'preserve-3d',
                }}
            >
                <div
                    key="pos"
                    className="absolute ml-[-1em] mt-[-1em] h-[2em] w-[2em]"
                    style={{
                        fontSize: `${size}em`,

                        top: '0%',
                        left: '50%',
                        transformStyle: 'preserve-3d',
                        animation: `invert ${freq}s linear infinite`,
                    }}
                >
                    <div
                        key="planet"
                        className="absolute top-1/2 left-1/2 ml-[-0.5em] mt-[-0.5em] h-[1em] w-[1em] rounded-[50%]"
                        style={{
                            backgroundImage:
                                'url(https://www.solarsystemscope.com/textures/download/2k_mercury.jpg)',
                            backgroundSize: '200%',
                            transformStyle: 'preserve-3d',
                            animation: `shadow-orbital ${freq}s linear infinite, rotate-earth ${freq}s linear infinite`,
                        }}
                    />
                </div>
            </div>
        )
    }

    const colors = {
        light: {
            less: '#81767790',
            default: '#90c0f0',
            bright: '#bde6f5',
        },
        dark: {
            default: '#040615',
        },
    }

    const fsMin = 24
    const fsMax = 48
    const screenMin = 320
    const screenMax = 1440

    return (
        <div
            className="absolute inset-0 max-w-full"
            style={{
                fontSize: `clamp(${fsMin}px, calc(${fsMin}px + (${fsMax} - ${fsMin}) * ((100vw - ${screenMin}px) / (${screenMax} - ${screenMin}))), ${fsMax}px)`,
            }}
        >
            <motion.div
                className="absolute top-1/2 left-1/2 ml-[-0.5em] mt-[-0.5em] h-[1em] w-[1em] overflow-hidden rounded-full"
                style={{
                    fontSize: '750%',
                    boxShadow: `
                        -0.0125em 0 0.015em -0.0075em ${colors.light.bright}`,
                }}
                {...props}
            >
                <div
                    key="night"
                    className="absolute inset-0 overflow-hidden rounded-full brightness-125"
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundSize: '250%',
                        backgroundPositionY: '50%',
                        animation: 'rotate-earth 80s linear infinite',
                    }}
                />
                <div
                    key="clouds"
                    className="absolute inset-0 rounded-l-full opacity-20"
                    style={{
                        backgroundImage:
                            'url(https://www.solarsystemscope.com/textures/download/2k_earth_clouds.jpg)',
                        backgroundSize: '250% 150%',
                        animation:
                            'rotate-earth 70s linear infinite, rotate-clouds 100s ease infinite',
                    }}
                />
                <div
                    key="shadows"
                    className="absolute inset-[-2px] rounded-full opacity-75"
                    style={{
                        boxShadow: `
                            inset 0.025em 0 0.025em -0.025em ${colors.light.bright},
                            inset 0.04em 0 0.06em -0.02em ${colors.light.default},
                            inset -0.02em 0 0.015em ${colors.light.less},
                            inset 0.1em 0 0.1em ${colors.dark.default},
                            inset -0.05em 0 0.1em ${colors.dark.default}`,
                    }}
                />
            </motion.div>
        </div>
    )
}
/** linear-gradient(135deg,#efbc23 30%, #ef8e38 60%) */
export default Graphic

/**
 * <div
                    id="globe"
                    className=" absolute inset-0 border-2 brightness-150"
                    style={{
                        perspective: '500px',
                        perspectiveOrigin: '50% 50%',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    {[...Array(panels + 1).keys()].map((i) => {
                        const total = panels - 1
                        const d = Math.floor(Math.abs(panels / 2 - i))
                        const Height = Math.PI / (2 * panels)
                        const angle = (45 / (panels / 2)) * d
                        const rotX = angle * Math.sign(panels / 2 - i)
                        const transZ = 0.125 - d * 0.00625

                        const Top = i / panels

                        console.log(d)
                        return (
                            <div
                                key={`panel-${i}`}
                                id={`panel-${i}`}
                                className=" absolute w-[1em]"
                                style={{
                                    height: Height + 'em',
                                    top: Top + 'em',
                                    transform: `translateY(-50%) rotateX(${rotX}deg) translateZ(${transZ}em)`,
                                    transformStyle: 'preserve-3d',
                                    backgroundImage: `url(${src})`,
                                    backgroundSize: `200% ${
                                        (panels + 1) * 100
                                    }%`,
                                    backgroundPositionY:
                                        (i / panels) * 100 + '%',
                                    animation:
                                        'rotate-earth 80s linear infinite',
                                }}
                            />
                        )
                    })}
                </div>
 */
