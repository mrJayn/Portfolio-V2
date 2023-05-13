import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const heights = {
    fit: 'py-5',
    xs: 'h-[250px]',
    sm: 'h-[325px]',
    md: 'h-[400px]',
    lg: 'h-[500px]',
    xl: 'h-[525px]',
    '2xl': 'h-[550px]',
}

const maxWidths = {
    xxs: 'max-w-[512px]',
    xs: 'max-w-[628px]',
    sm: 'max-w-[768px]',
    md: 'max-w-[900px]',
}

export default function SubSection({ title, children, className, ...props }) {
    return (
        <motion.div className={`my-5 w-full ${className}`} {...props}>
            {title && <h3>{title}</h3>}
            {children}
        </motion.div>
    )
}
