import { motion } from 'framer-motion'
const Section = ({
    children,
    id,
    fullScreen = true,
    marginBottom = true,
    scrollTarget = 'center',
}) => {
    return (
        <motion.section
            layout
            className={` relative mb-24 w-full max-w-[1280px] px-3 lg:mx-auto ${
                marginBottom ? 'md:mb-24' : 'md:mb-4'
            }`}
            style={{
                minHeight: fullScreen ? '100vh' : 'auto',
                height: 'auto',
            }}
            scrollTarget={scrollTarget}
            id={id}
        >
            <div className="h-full w-full">{children}</div>
        </motion.section>
    )
}

export default Section
