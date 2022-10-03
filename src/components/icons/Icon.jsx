import { motion } from 'framer-motion'
import { Cases } from './Cases'

/** Credit for Icon Usage System
 *    BRITTANY CHIANG - https://brittanychiang.com/
 **/
const Icon = ({ name, size = 40, href, style = '', ...props }) => {
    return (
        <motion.a
            href={href}
            title={name}
            target="_blank"
            rel="noreferrer noopener"
            style={{
                hieght: size,
                width: size,
            }}
            {...props}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`full fill-transparent stroke-black ${style}`}
            >
                <Cases name={name} />
            </svg>
        </motion.a>
    )
}

export default Icon
