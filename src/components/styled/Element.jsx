import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const Element = ({ children, href, vars = null, ...props }) => {
    const [hover, setHover] = useState(false)
    return (
        <motion.div
            className={`styled-element ${hover ? 'active' : ''}`}
            whileTap={{ scale: -1, borderRadius: '50%' }}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            variants={vars}
        >
            <Link href={href}>{children}</Link>
        </motion.div>
    )
}
export default Element
