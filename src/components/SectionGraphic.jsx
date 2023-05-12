import { useEffect, useRef, Fragment } from 'react'
import Image from 'next/image'
import { motion, useCycle, motionValue, useSpring } from 'framer-motion'

const About_Images = ({ inView, src, alt }) => {
    const [activeImg, setActiveImg] = useCycle(0, 1, 2)
    useEffect(() => {
        if (!inView) return
        const interval = setInterval(() => setActiveImg(), 10000)
        return () => clearInterval(interval)
    })
    return (
        <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] portrait:h-2/3 landscape:w-3/4">
            <Image
                priority
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                quality={50}
            />
        </div>
    )
}

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
            className="perspective-[100vh] full flex-center relative z-10 cursor-grab touch-none active:cursor-grabbing"
            style={{ perspectiveOrigin: '50% 50%' }}
            onPan={onPan}
            onPanEnd={onPanEnd}
        >
            <motion.div
                className="flex-center absolute inset-0"
                style={{ rotateY, translateZ: '-25vh' }}
            >
                {Object.values(featured).map(({ data }, i) => (
                    <motion.div
                        key={data.title}
                        className={`flex-col-center absolute inset-x-0 overflow-hidden rounded-2xl bg-[#111a] shadow-[0_0_2.5px_1px_#FFF4] max-lg:mx-auto max-lg:max-w-md `}
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
                            <h5 className="font-semibold leading-[1] text-slate-30 lg:whitespace-nowrap">
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
                <p className="font-robotoMono relative whitespace-nowrap leading-[1.25] ">
                    {item}
                </p>
                <span className="px-3 font-semibold text-slate-neon last-of-type:hidden max-xl:landscape:hidden">
                    &#x2022;
                </span>
            </Fragment>
        ))}
    </div>
)

const Graphic = ({ id, data, featured, inView }) => {
    return (
        <>
            {id === 'about' && <About_Images inView={inView} {...data} />}

            {id === 'projects' && (
                <Featured_Slides inView={inView} {...featured} />
            )}
        </>
    )
}

export default Graphic
