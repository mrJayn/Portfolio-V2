import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { toggleScrolling } from '@utils'

const StyledButton = ({ children, action = null, allowScroll = true }) => {
    const ref = useRef()
    const inView = useInView(ref, { once: true })

    const styledBtn = {
        className:
            'flex-center z-10 cursor-pointer select-none rounded-xl bg-teal-10 text-center text-md font-semibold tracking-wide md:text-lg',
        style: {
            boxShadow: `0 5px 10px -10px rgba(0,0,0,0.95)`,
            color: 'rgba(0,0,0,0.50)',
        },
        onClick: () => {
            action()
            toggleScrolling({ allowScroll })
        },
        initial: { opacity: 0, scale: 0.65 },
        animate: inView && {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: 0.25, ease: 'easeOut' },
        },
        whileHover: {
            color: 'rgba(0,0,0,1)',
            translateY: -2.5,
            boxShadow: `0px 10px 15px -10px rgba(0,0,0,0.75)`,
        },
        whileTap: { scale: 0.95 },
    }

    return (
        <motion.button ref={ref} {...styledBtn}>
            {children}
        </motion.button>
    )
}
export default StyledButton
