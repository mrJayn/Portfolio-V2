import { motion } from 'framer-motion'
import Link from 'next/link'

const container_variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
}
const item_variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

const MenuLink = ({ link, handleClick, variants }) => {
    return (
        <motion.li
            onClick={handleClick}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link href={link.url}>{link.title}</Link>
        </motion.li>
    )
}

const MenuContent = ({ sections, handleClick }) => {
    return (
        <div className="menu-content">
            <motion.div variants={container_variants} className="menu-links">
                <ul>
                    {sections.map((i) => (
                        <MenuLink
                            key={`menu-link-${i.item}`}
                            link={i}
                            handleClick={handleClick}
                            variants={item_variants}
                        />
                    ))}
                </ul>
            </motion.div>
        </div>
    )
}
export default MenuContent
