import { motion } from 'framer-motion'
import Image from 'next/image'

const Styled_Img = ({ src, alt, ...props }) => {
    const isPriority = src == '/assets/misc/mikeJayne.JPG'
    return (
        <motion.div
            className="flex-center relative h-auto w-full md:h-full"
            {...props}
        >
            <div className="md:full relative aspect-[4/3] w-10/12 overflow-hidden rounded-lg shadow-sm md:aspect-auto md:shadow">
                <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectPosition="top"
                    objectFit="cover"
                    priority={isPriority}
                />
            </div>
        </motion.div>
    )
}
export default Styled_Img
