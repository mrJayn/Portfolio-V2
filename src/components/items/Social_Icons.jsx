import { motion } from 'framer-motion'
import Styled_Icon from './Styled_Icon'
import { socials } from '@config'

const Socials = ({ size = 30, action = null, ...props }) => {
    return socials.map(([title, href], i) => {
        return (
            <motion.div
                key={`social-icon-${i}`}
                onClick={action}
                custom={i + 1}
                {...props}
            >
                <a title={title} href={href}>
                    <Styled_Icon key={`social-${i}`} name={title} size={size} />
                </a>
            </motion.div>
        )
    })
}
export default Socials
