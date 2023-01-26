import Image from 'next/image'
import { motion } from 'framer-motion'
import { Featured_Slides } from '@components'
import { sectionVariants } from '@motion'

const Section_Graphic = ({ inView, isLg, data, featured }) => {
    const useFtd = featured !== undefined
    return (
        <motion.div
            className={`full -z-10 select-none ${
                !useFtd && 'pointer-events-none relative overflow-hidden shadow'
            }`}
            variants={sectionVariants.Graphic(isLg)}
            custom={useFtd}
        >
            {useFtd & isLg ? (
                <Featured_Slides inView={inView} {...featured} />
            ) : (
                <Image
                    src={data.src}
                    alt={data.alt}
                    layout="fill"
                    quality={25}
                    className="object-cover max-lg:object-top max-lg:opacity-10 max-lg:blur-sm lg:object-center"
                />
            )}
        </motion.div>
    )
}
export default Section_Graphic
