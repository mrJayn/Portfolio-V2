import { motion } from 'framer-motion'
import { Styled_Icons } from '@components'

const socials = [
    ['GitHub', 'https://github.com/mrJayn'],
    ['Codepen', 'https://codepen.io/mrjayn'],
    ['Linkedin', 'https://www.linkedin.com/in/'],
    ['Email', 'mailto:m63jayne@gmail.com'],
]

const Socials = ({ size = 30, invert = false, ...motionProps }) => {
    return socials.map(([title, href], i) => {
        return (
            <Styled_Icons
                key={`social-${i}`}
                name={title}
                href={href}
                size={size}
                invert={invert}
                className="landscape:m-auto"
                style={{
                    height: size + 12,
                    width: size + 12,
                }}
                {...motionProps}
            />
        )
    })
}
export default Socials
