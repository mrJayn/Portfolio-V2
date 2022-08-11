import { useEffect } from 'react'
import { motion } from 'framer-motion'
import srConfig from '@utils'

const Section = ({
    children,
    id,
    fullScreen = true,
    marginBottom = true,
    ...props
}) => {
    useEffect(() => {
        async function animate() {
            const sr = (await import('scrollreveal')).default
            sr().reveal('.useInView', srConfig)
        }
        animate()
    }, [])

    return (
        <motion.section
            layout
            className={` relative mb-24 w-full max-w-[1240px]  lg:mx-auto ${
                marginBottom ? 'md:mb-24' : 'md:mb-4'
            }`}
            style={{
                minHeight: fullScreen ? '100vh' : 'auto',
                height: 'auto',
            }}
            id={id}
        >
            <div className="h-full w-full">{children}</div>
        </motion.section>
    )
}

export default Section