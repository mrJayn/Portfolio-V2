import { motion } from 'framer-motion'
import { Styled } from '@components'

import { menuVariants } from '@motion'

const MenuLinks = ({ toggleMenu }) => (
    <motion.ul
        className="full relative flex flex-col space-y-3 landscape:grid"
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
        className="fixed left-0 top-14 bottom-0 z-30 w-screen bg-nav"
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={menuVariants.backgroundClip}
    >
        <div className="absoluteFull flex-col-btw overflow-hidden p-4 landscape:flex-row">
            <MenuLinks toggleMenu={toggleMenu} />

            <motion.div
                className="relative grid w-full grid-cols-4 landscape:h-full landscape:w-1/2 landscape:grid-cols-1"
                variants={menuVariants.IconWrap}
            >
                <Styled.Socials
                    variants={menuVariants.Icons}
                    className="relative m-auto aspect-square h-12 sm:h-16"
                />
            </motion.div>
        </div>
    </motion.menu>
)

export default Menu
