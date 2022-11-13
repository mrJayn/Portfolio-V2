import { motion } from 'framer-motion'
import Styled_Icon from './Styled_Icon'

const links = [
    {
        name: 'GitHub',
        href: 'https://github.com/mrJayn',
    },
    {
        name: 'Codepen',
        href: 'https://codepen.io/mrjayn',
    },
    {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/',
    },
]

const Socials = ({ size = 30, action = null, ...props }) =>
    links.map(({ name, href }, i) => (
        <motion.div
            key={`social-icon-${i}`}
            onClick={action}
            custom={i + 1}
            {...props}
        >
            <a title={name} href={href}>
                <Styled_Icon
                    styled
                    key={`social-${i}`}
                    name={name}
                    size={size}
                />
            </a>
        </motion.div>
    ))

export default Socials
