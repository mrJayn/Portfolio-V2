import { introVariants } from '@motion'
import { motion } from 'framer-motion'

const variants = introVariants.Graphic

const Graphic = ({ ...props }) => {
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
                    /** animation: orbitalAnim, */
                    transformStyle: 'preserve-3d',
                    height: radius + 'em',
                    width: radius + 'em',
                    margin: `${radius / -2}em 0em 0em ${radius / -2}em`,
                }}
            >
                <div
                    className="absolute top-1/2 left-1/2 ml-[-0.5em] mt-[-0.5em] h-[1em] w-[1em] rounded-[50%] shadow-inset"
                    style={{
                        /**animation: invertAnim, */
                        transformStyle: 'preserve-3d',
                        fontSize: size + 'em',
                        margin: `${radius / -2}em 0em 0em ${radius / -2}em`,
                        backgroundColor: color,
                    }}
                />
            </div>
        )
    }

    return (
        <div className="absolute inset-0 max-w-full">
            <div className="full relative">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        transform: 'rotateX(75deg) rotateY(5deg)',
                        transformStyle: 'preserve-3d',
                    }}
                    {...props}
                >
                    {/**<Orbital radius={12} freq={15} color="#f60" /> */}
                    <div
                        className="absolute top-1/2 left-1/2 ml-[-0.5em] mt-[-0.5em] h-[1em] w-[1em] rounded-[50%] bg-slate text-[6em] shadow-inset "
                        style={{
                            transform: 'rotateX(-90deg)',
                            transformStyle: 'preserve-3d',
                        }}
                    />
                    <div
                        className="absolute top-1/2 left-1/2 ml-[-0.5em] mt-[-0.5em] h-[1em] w-[1em] rounded-full text-[13.5em]"
                        style={{
                            background:
                                'radial-gradient( #0000 30%, var(--blackhole-light-1) 40%, var(--blackhole-light-2) 42.5%,var(--blackhole-light-3) 55%, #0000 70%)',
                        }}
                    />
                    <Orbital size={0.75} radius={17} freq={10} />
                </motion.div>
            </div>
        </div>
    )
}
/** linear-gradient(135deg,#efbc23 30%, #ef8e38 60%) */
export default Graphic
