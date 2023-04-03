import { useRef, Fragment } from 'react'
import Image from 'next/image'
import { motion, motionValue, useSpring } from 'framer-motion'

const Featured_Slides = ({ inView, ...featured }) => {
    const rYref = useRef(0)
    const rY = motionValue(rYref.current)
    const rotateY = useSpring(rY, {
        type: 'spring',
        stiffness: 400,
        damping: 90,
        mass: 0.25,
    })
    function onPan(e, info) {
        const dX = info.delta.x
        if (dX !== 0) rY.set(rY.current + dX / 2)
    }
    function onPanEnd(e, info) {
        const snapPoint = Math.round(rY.current / 120) * 120
        rY.set(snapPoint)
        rYref.current = snapPoint
    }

    return (
        <motion.div
            className="full flex-center relative z-10 cursor-grab touch-none perspective-[100vh] active:cursor-grabbing"
            style={{ perspectiveOrigin: '50% 50%' }}
            onPan={onPan}
            onPanEnd={onPanEnd}
        >
            <motion.div
                className="preserve-3d flex-center absolute inset-0"
                style={{ rotateY, translateZ: '-25vh' }}
            >
                {Object.values(featured).map(({ data }, i) => (
                    <motion.div
                        key={data.title}
                        className={`preserve-3d flex-col-center absolute inset-x-0 overflow-hidden rounded-2xl bg-[#111a] shadow-[0_0_2.5px_1px_#FFF4] max-lg:mx-auto max-lg:max-w-md `}
                        style={{
                            transform: `
                            rotateY(calc(360deg / 3 * ${i})) 
                            translateZ(25vh)
                            `,
                        }}
                    >
                        <div className="pointer-events-none relative aspect-[11/7] w-full overflow-hidden rounded-2xl">
                            <Image
                                src={data.src}
                                alt={data.alt}
                                layout="fill"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-col-center z-10 text-center">
                            <h5 className="font-semibold leading-none text-slate-30 lg:whitespace-nowrap">
                                {data.title}
                            </h5>
                            <TECH {...data} />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}
const TECH = ({ tech }) => (
    <div className="flex-evenly w-full max-xl:landscape:flex-col">
        {tech.map((item) => (
            <Fragment key={item}>
                <p className="relative whitespace-nowrap font-robotoMono leading-tight ">
                    {item}
                </p>
                <span className="px-3 font-semibold text-teal-neon last-of-type:hidden max-xl:landscape:hidden">
                    &#x2022;
                </span>
            </Fragment>
        ))}
    </div>
)

export default Featured_Slides
