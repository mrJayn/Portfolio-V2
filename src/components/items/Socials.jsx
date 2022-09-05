import { motion } from 'framer-motion'
import { FaGithub, FaCodepen, FaLinkedinIn, FaMailBulk } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { linksVariants } from '@config'
import Icon from '../icons/Icon'
const socials = [
    {
        title: 'GitHub',
        href: 'https://github.com/mrJayn',
        icon: FaGithub,
    },
    {
        title: 'Codepen',
        href: 'https://codepen.io/mrjayn',
        icon: FaCodepen,
    },
    {
        title: 'Linkedin',
        href: 'https://www.linkedin.com/in/',
        icon: FaLinkedinIn,
    },
    {
        title: 'Email',
        href: 'mailto:m63jayne@gmail.com',
        icon: AiOutlineMail,
    },
]

const Socials = ({ size, wrapStyle, ...props }) => {
    return (
        <motion.div
            className={`flex-btw w-full text-center ${wrapStyle} `}
            variants={linksVariants.socials}
        >
            {socials.map((item, i) => {
                return (
                    <motion.a
                        key={i}
                        href={item.href}
                        title={item.href}
                        className="flex-center relative mx-auto my-4 select-none "
                        style={{
                            height: size + 12,
                            width: size + 12,
                        }}
                        target="_blank"
                        rel="noreferrer"
                        {...props}
                    >
                        <Icon name={item.title} size={30} />
                    </motion.a>
                )
            })}
        </motion.div>
    )
}
export default Socials
