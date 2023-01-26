import Image from 'next/image'
import { motion } from 'framer-motion'

const Featured_IMG = ({ src, alt, isEven, isHome = false, ...motionProps }) => (
    <motion.div
        key={`featured-image-${alt}`}
        className={
            isHome
                ? 'full relative -z-10 overflow-hidden rounded-4xl'
                : `relative z-0 mx-auto h-[475px] w-full select-none overflow-hidden rounded-xl shadow-md max-lg:max-w-lg md:h-[550px] lg:absolute lg:h-[80%] lg:w-full lg:shadow-none portrait:max-h-[75vh] ${
                      isEven
                          ? 'lg:right-[calc(-100%-64px)]'
                          : 'lg:left-[calc(-100%-64px)]'
                  }`
        }
        {...motionProps}
    >
        <Image
            src={src}
            alt={alt}
            layout="fill"
            className="object-cover object-top"
        />
    </motion.div>
)

export default Featured_IMG
