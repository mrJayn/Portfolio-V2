import { navLinkVariants } from '@motion'
import { navLinks, handleNavLink } from '@utils'
import { motion } from 'framer-motion'

const NavLinks = ({ loc, wrapClassName, toggleMenu = false, ...props }) => (
    <motion.ul
        className={wrapClassName}
        initial="hidden"
        animate="show"
        {...(loc == 'navbar' && { exit: 'hidden' })}
        variants={navLinkVariants.Container}
    >
        {navLinks.map((sectionName) => (
            <motion.li
                key={`${sectionName}-link`}
                variants={navLinkVariants.Link}
                onClick={(e) => {
                    if (loc === 'menu') {
                        e.currentTarget.style.webkitTextStroke = '1px #6199ff'
                    }
                    handleNavLink(sectionName, toggleMenu)
                }}
                whileHover={{ color: '#fff' }}
                {...props}
            >
                {sectionName}
            </motion.li>
        ))}
    </motion.ul>
)

export default NavLinks
