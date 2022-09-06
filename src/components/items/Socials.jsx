import { motion } from 'framer-motion'
import DefGradient from '../icons/gradient'
import Icon from '../icons/Icon'

const socials = [
    ['GitHub', 'https://github.com/mrJayn'],
    ['Codepen', 'https://codepen.io/mrjayn'],
    ['Linkedin', 'https://www.linkedin.com/in/'],
    ['Email', 'mailto:m63jayne@gmail.com'],
]

const Socials = ({ size = 30, defId, ...motionProps }) => {
    return (
        <>
            {socials.map(([title, href], i) => {
                return (
                    <motion.a
                        key={`social-${i}`}
                        href={href}
                        title={href}
                        target="_blank"
                        rel="noreferrer"
                        className="landscape:m-auto"
                        style={{
                            height: size + 12,
                            width: size + 12,
                        }}
                        {...motionProps}
                    >
                        <Icon name={title} size={size} defId={defId} />
                    </motion.a>
                )
            })}
            <svg className="pointer-events-none invisible absolute select-none">
                <DefGradient defId={defId} />
            </svg>
        </>
    )
}
export default Socials
