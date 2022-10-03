import { motion } from 'framer-motion'
const Tech = ({
    tech,
    state = null,
    even = null,
    staggerEffect = false,
    className = '',
    ...props
}) => {
    return tech.map((item, i) => {
        const stagFoward = even ? i : tech.length - i
        const stagBackwards = tech.length - stagFoward
        const motionProps = staggerEffect
            ? {
                  animate: state ? { opacity: 0 } : { opacity: 1 },
                  transition: {
                      duration: 0.25,
                      delay: state
                          ? stagBackwards * 0.1
                          : 0.25 + stagFoward * 0.1,
                  },
                  ...motionProps,
              }
            : { ...props }
        return (
            <motion.span
                key={item}
                className={`md:tracking-wide' relative w-full whitespace-nowrap capitalize italic sm:font-medium ${className}`}
                {...motionProps}
            >
                {item}
            </motion.span>
        )
    })
}
export default Tech
