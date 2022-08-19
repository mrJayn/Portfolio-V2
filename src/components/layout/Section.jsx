import { motion } from 'framer-motion'
const srConfig = {
    delay: 250,
    duration: 500,
    distance: '50px',
    origin: 'bottom',
    reset: false,
    mobile: true,
    viewFactor: 0.25,
    useDelay: 'always',
    easing: 'ease-out',
}
const Section = ({ children, id, fullScreen = true, marginBottom = true }) => {
    return (
        <motion.section
            layout
            className={` relative mb-24 w-full max-w-[1440px]  lg:mx-auto ${
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

/**
 * 
 *     useEffect(() => {
        async function animate() {
            const sr = (await import('scrollreveal')).default
            sr().reveal('.useInView', srConfig)
        }
        animate()
    }, [])


    
 */
