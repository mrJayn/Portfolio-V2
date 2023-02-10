import { motion } from 'framer-motion'
import { Styled } from '@components'

import { menuVariants } from '@motion'

const MenuLinks = ({ toggleMenu }) => (
    <motion.ul
        className="relative flex w-full flex-col space-y-3 landscape:mb-auto landscape:grid"
        variants={menuVariants.Links.Wrap}
    >
        <Styled.SectionLinks
            className="landscape:flex-left rounded-xl py-[2vh] px-5 tracking-2xl saturate-50 landscape:max-h-[4em]"
            action={toggleMenu}
            style={{
                boxShadow:
                    'inset 1.5px -1.5px 0rem #333, inset -1.5px 1.5px 0rem #40606f',
            }}
            variants={menuVariants.Links.Items}
            whileHover={{
                color: '#fff',
                marginLeft: '4px',
                filter: 'brightness(1.5) saturate(0.75)',
            }}
        />
    </motion.ul>
)

const Menu = ({ toggleMenu }) => (
    <motion.menu
        className="fixed inset-0 top-14 z-30 bg-nav"
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={menuVariants.backgroundClip}
    >
        <div className="absoluteFull flex-btw overflow-hidden px-4 portrait:flex-col">
            <MenuLinks toggleMenu={toggleMenu} />

            <motion.div
                className="relative grid w-full portrait:grid-cols-4 landscape:h-full landscape:w-1/2"
                variants={menuVariants.IconWrap}
            >
                <Styled.Socials
                    variants={menuVariants.Icons}
                    className="socials-icon-bg relative m-auto aspect-square h-12 max-h-full portrait:mb-4"
                />
            </motion.div>
        </div>
    </motion.menu>
)

export default Menu
