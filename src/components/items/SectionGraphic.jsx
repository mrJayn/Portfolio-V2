import { useEffect } from 'react'
import Image from 'next/image'
import { motion, useCycle } from 'framer-motion'

import { skill_icons } from '@config'
import { sectionGraphicVariants as variants } from '@motion'
import Icons from './Icons'
import Featured_Slides from './FeaturedSlides'

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

const Graphic = ({ id, data, featured, inView }) => {
    return (
        <>
            {/**
            *  {id === 'about' && <About_Images inView={inView} {...data} />}
            {id === 'experience' && <Experience_Skills />}
            */}
            {id === 'projects' && (
                <Featured_Slides inView={inView} {...featured} />
            )}
        </>
    )
}

export default Graphic
