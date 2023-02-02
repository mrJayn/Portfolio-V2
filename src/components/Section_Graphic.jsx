import Image from 'next/image'
import { motion } from 'framer-motion'
import { sectionVariants } from '@motion'
import Ftd_Slides from './__sections/_projects/Featured_Slides'

const Section_Graphic = ({ isLg, data, featured }) => {
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
                <Ftd_Slides {...featured} />
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
