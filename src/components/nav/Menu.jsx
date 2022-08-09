import Link from 'next/link'
import { motion } from 'framer-motion'

import { config } from '@config'
import { useScreenOrientation } from '@hooks'

const [variants, menuVariants] = [config.variants, config.variants.menu]

const MenuContent = ({ menuState, handleClick }) => {
    const orientation = useScreenOrientation()

    return (
        <motion.div
            className="menu-content"
            data-orientation={orientation}
            initial={false}
            animate={menuState}
        >
            {/** LINKS **/}
            <motion.ul
                className="menu-sections"
                variants={menuVariants.parent}
                custom={true}
            >
                {config.sectionLinks.map((link) => (
                    <motion.li
                        key={`menu-linkTo-${link.title}`}
                        onClick={handleClick}
                        variants={variants.fadeY}
                        custom={10}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href={link.url}>{link.title}</Link>
                    </motion.li>
                ))}
            </motion.ul>
            {/** FOOTER  **/}
            <motion.div variants={menuVariants.parent} custom={false}>
                {/** FOOTER LINKS **/}
                {config.socials.map((social, i) => {
                    const Icon = social.icon
                    return (
                        <motion.a
                            key={`social-${i}`}
                            href={
                                i !== config.socials.length - 1
                                    ? social.url
                                    : `mailto:${config.email}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={variants.fade}
                            custom={0}
                            transition={{
                                type: 'spring',
                                stiffness: 1000,
                                velocity: -100,
                            }}
                        >
                            <Icon size={24} />
                        </motion.a>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}

const Menu = ({ state, handleClick }) => {
    const menuState = state ? 'enter' : 'hidden'
    return (
        <motion.div
            className="menu"
            data-state={menuState}
            initial={false}
            animate={menuState}
        >
            <motion.div
                className="menu-container"
                variants={menuVariants.backgroundClip}
            >
                <MenuContent menuState={menuState} handleClick={handleClick} />
            </motion.div>
        </motion.div>
    )
}

export default Menu
