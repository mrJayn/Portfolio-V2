import Link from 'next/link'
import { motion } from 'framer-motion'

import { config } from '@config'
import { useScreenOrientation } from '@hooks'

const MenuContent = ({ menuState, handleClick }) => {
    return (
        <motion.div
            id="menu_content"
            className="flex-col-btw h-full w-full opacity-100"
            initial={false}
            animate={menuState}
        >
            {/** LINKS **/}
            <motion.ul
                className="flex-col-center h-[70%]"
                variants={config.variants.menu.parent}
                custom={true}
            >
                {config.sectionLinks.map((link) => (
                    <motion.li
                        key={`menu-linkTo-${link.title}`}
                        className="styled-link my-auto text-2xl font-medium capitalize tracking-tight text-lightgrey hover:text-white"
                        style={{ transition: 'color 0.25s linear' }}
                        onClick={handleClick}
                        variants={config.variants.fadeY}
                        custom={10}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href={link.url}>{link.title}</Link>
                    </motion.li>
                ))}
            </motion.ul>
            {/** FOOTER  **/}
            <motion.div
                className="flex-btw w-full text-center"
                variants={config.variants.menu.parent}
                custom={false}
            >
                {/** FOOTER LINKS **/}
                {config.socials.map((social, i) => {
                    const Icon = social.icon
                    const linkHref =
                        i !== config.socials.length - 1
                            ? social.url
                            : `mailto:${config.email}`
                    return (
                        <motion.a
                            key={`social-${i}`}
                            className="styled-el mx-auto my-4 p-3"
                            href={linkHref}
                            target="_blank"
                            rel="noreferrer"
                            variants={config.variants.fade}
                            transition={{
                                type: 'spring',
                                stiffness: 1000,
                                velocity: -100,
                            }}
                        >
                            <Icon size={30} />
                        </motion.a>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}

const Menu = ({ isOpen, handleMenu }) => {
    const menuState = isOpen ? 'enter' : 'hidden'
    const orientation = useScreenOrientation()

    return (
        <motion.div
            id="menu"
            className="fixed left-0 top-0 h-screen w-screen bg-charcoal/70 md:hidden"
            data-isopen={isOpen}
            data-orientation={orientation}
            initial={false}
            animate={menuState}
        >
            <motion.div
                className="flex-center absolute top-0 left-0 h-screen w-screen bg-charcoal px-3 pb-10 pt-[12.5vh]"
                variants={config.variants.menu.backgroundClip}
            >
                <MenuContent menuState={menuState} handleClick={handleMenu} />
            </motion.div>
        </motion.div>
    )
}

export default Menu
