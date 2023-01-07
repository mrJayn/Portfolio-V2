import Image from 'next/image'
import { motion } from 'framer-motion'
import { Featured_Slides } from '@components'

const Section_Graphic = ({ inView, isLg, featured, data }) => {
    const useFtd = featured !== undefined
    const variants = isLg
        ? {
              hidden: {
                  opacity: 0,
                  scale: useFtd ? 1 : 0.65,
                  borderRadius: '3rem',
                  transition: { duration: 1, ease: 'easeInOut' },
              },
              show: {
                  opacity: 1,
                  scale: useFtd ? 1 : 0.65,
                  borderRadius: '3rem',
                  transition: { duration: 1.5, ease: 'easeInOut' },
              },
              exit: {
                  opacity: useFtd ? 0 : 0.25,
                  scale: 1,
                  borderRadius: '0rem',
                  transition: { duration: 0.75, ease: 'easeInOut' },
              },
          }
        : {
              show: { opacity: 1 },
              exit: { opacity: 0 },
          }
    return (
        <motion.div
            key={`${data.id}-section-graphic-isLg`}
            className={`full pointer-events-none -z-10 select-none ${
                !useFtd & isLg &&
                'pointer-events-none relative overflow-hidden shadow'
            }`}
            style={{ scale: 1 }}
            variants={variants}
        >
            {useFtd & isLg ? (
                <Featured_Slides isLg inView={inView} {...featured} />
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
