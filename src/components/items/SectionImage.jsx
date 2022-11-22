import { motion } from 'framer-motion'
import Image from 'next/image'

const SectionImage = ({ isPriority = false, src, alt, ...props }) => {
    const foldPriority = src == '/assets/misc/mikeJayne.JPG'
    return (
        <motion.div
            className="flex-center absoluteFull -z-10 p-2 pt-0 xs:p-4 sm:p-8 md:relative md:z-0 md:w-full md:p-0"
            {...props}
        >
            <div className="full relative overflow-hidden rounded-4xl shadow md:max-w-[50vw]">
                <span className="absoluteFull z-10 shadow-inset" />
                <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectPosition="top"
                    objectFit="cover"
                    className="opacity-25 md:opacity-90"
                    priority={isPriority}
                />
            </div>
        </motion.div>
    )
}
export default SectionImage
