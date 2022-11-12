import { motion } from 'framer-motion'
import Image from 'next/image'

const Styled_Img = ({ src, alt, ...props }) => {
    const isPriority = src == '/assets/misc/mikeJayne.JPG'
    return (
        <motion.div
            className="flex-center absolute top-12 left-0 right-0 bottom-8 -z-10 w-full min-w-[50%] px-4 opacity-20 sm:bottom-0 sm:top-0 md:relative md:z-0 md:px-0 md:opacity-100"
            {...props}
        >
            <div className="md:full full relative overflow-hidden rounded-3xl shadow sm:aspect-[0.9/1] sm:h-auto sm:rounded-4xl md:aspect-auto md:max-w-[50vw] md:opacity-100">
                <span className="absoluteFull z-10 shadow-inset contrast-150" />
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
