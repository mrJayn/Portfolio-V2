import { motion } from 'framer-motion'

const Graphic = () => {
    const Orbital = ({
        size = 1,
        radius,
        freq,
        color = 'rgb(222 222 222 / 1)',
    }) => {
        const orbitalAnim = `orbit ${freq}s linear infinite`
        const invertAnim = `invert ${freq}s linear infinite`

        return (
            <div
                className="absolute top-1/2 left-1/2 rounded-full"
                style={{
                    transformStyle: 'preserve-3d',
                    height: radius + 'em',
                    width: radius + 'em',
                    margin: `${radius / -2}em 0em 0em ${radius / -2}em`,
                }}
            >
                <div
                    className="absolute top-1/2 left-1/2 rounded-[50%]"
                    style={{
                        animation: orbitalAnim,
                        transformStyle: 'preserve-3d',
                        height: radius + 'em',
                        width: radius + 'em',
                        margin: `${radius / -2}em 0em 0em ${radius / -2}em`,
                    }}
                >
                    <div
                        className="absolute top-1/2 left-1/2 ml-[-0.5em] mt-[-0.5em] h-[1em] w-[1em] rounded-[50%] shadow-inset"
                        style={{
                            animation: invertAnim,
                            transformStyle: 'preserve-3d',
                            fontSize: size + 'em',
                            margin: `${radius / -2}em 0em 0em ${radius / -2}em`,
                            backgroundColor: color,
                        }}
                    />
                </div>
            </div>
        )
    }

    const BlackHole = () => (
        <div
            className="absolute top-1/2 left-1/2 ml-[-0.5em] mt-[-0.5em] h-[1em] w-[1em] rounded-[50%] bg-slate text-[6em] shadow-inset"
            style={{
                transform: 'rotateX(-90deg)',
                transformStyle: 'preserve-3d',
            }}
        />
    )

    return (
        <div className="absolute inset-0">
            <div className="full relative">
                <motion.div
                    className="absolute inset-0 will-change-transform"
                    style={{
                        transform: 'rotateX(75deg) rotateY(5deg)',
                        transformStyle: 'preserve-3d',
                    }}
                    initial={false}
                    whileInView={{
                        rotateX: [70, 75],
                        rotateY: [2.5, 5],
                        transition: { duration: 4, ease: 'easeInOut' },
                    }}
                >
                    {/**<Orbital radius={12} freq={15} color="#f60" /> */}
                    <BlackHole />
                    <Orbital size={0.75} radius={20} freq={10} />

                    <div
                        className="curve-outer absolute top-1/2 left-1/2 ml-[-0.5em] mt-[-0.5em] h-[1em] w-[1em] rounded-full bg-blackHole_LightRing text-[15em]"
                        style={{
                            animation: 'orbit 10s linear infinite',
                        }}
                    ></div>
                </motion.div>
            </div>
        </div>
    )
}
/** linear-gradient(135deg,#efbc23 30%, #ef8e38 60%) */
export default Graphic
