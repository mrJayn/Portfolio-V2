import Image from 'next/image'
import { motion } from 'framer-motion'
import { sectionVariants } from '@motion'
import Ftd_Slides from './__sections/_projects/Featured_Slides'

const Section_Graphic = ({ isLg, data, featured }) => {
    const isProjects = featured !== undefined
    return (
        <motion.div
            className={`full -z-10 select-none border-2 ${
                !isProjects &&
                'pointer-events-none relative overflow-hidden shadow'
            }`}
            variants={isLg && sectionVariants.Graphic}
            custom={isProjects}
        >
            {isProjects & isLg ? (
                <div className="full relative border-2 border-red">
                    <Ftd_Slides {...featured} />
                </div>
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
