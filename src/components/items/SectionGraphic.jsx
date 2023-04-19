import { useEffect, useRef, Fragment } from 'react'
import Image from 'next/image'
import { motion, useCycle, motionValue, useSpring } from 'framer-motion'

import { skill_icons } from '@config'
import { sectionGraphicVariants as variants } from '@motion'
import Icons from './Icons'

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

const Experience_Skills = () => (
    <motion.div
        className="relative grid aspect-square w-3/4 max-w-[450px] grid-cols-3 portrait:mb-auto portrait:pt-[13%] portrait:pb-[20%] landscape:pt-[20%]"
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ once: true, amount: 0.33 }}
    >
        {skill_icons.map(({ title }, i) => {
            const corner = i < 3 ? i % 2 == 0 : i % 2 !== 0
            const xD = i % 3 == 0 ? -1 : 1
            const yD = i < 3 ? -1 : 1
            return (
                <div
                    key={title}
                    className="relative mx-auto aspect-square w-full"
                    style={{
                        transform: `translateY(${
                            corner ? 0 : 25 * yD
                        }%) rotate(${corner ? -25 * xD * yD : 0}deg)`,
                    }}
                >
                    <Icons name={title} />
                </div>
            )
        })}
    </motion.div>
)

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
                            <h5 className="font-semibold leading-1 text-slate-30 lg:whitespace-nowrap">
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
                <p className="relative whitespace-nowrap font-robotoMono leading-1.25 ">
                    {item}
                </p>
                <span className="px-3 font-semibold text-teal-neon last-of-type:hidden max-xl:landscape:hidden">
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
            {id === 'experience' && <Experience_Skills />}

            {id === 'projects' && (
                <Featured_Slides inView={inView} {...featured} />
            )}
        </>
    )
}

export default Graphic
