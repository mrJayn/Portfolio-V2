import { motion } from 'framer-motion'
import { FaGithub, FaCodepen, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
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

const Socials = ({ size, ...props }) => {
    return socials.map((item, i) => {
        const Icon = item.icon
        return (
            <motion.a
                key={i}
                className="mx-auto my-4 select-none rounded-md bg-gradient-to-t from-eee/75 to-eee/20 p-3 dark:from-black-light/75 dark:to-black-light/20 "
                href={item.href}
                target="_blank"
                rel="noreferrer"
                {...props}
            >
                <Icon size={size} />
            </motion.a>
        )
    })
}
export default Socials
