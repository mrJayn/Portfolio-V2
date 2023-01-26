import { motion, AnimatePresence } from 'framer-motion'
import { Styled } from '@components'

import { menuVariants } from '@motion'
import NavItems from './NavItems'

const Menu = ({ toggleMenu }) => (
    <motion.menu
        className="fixed left-0 top-14 bottom-0 z-30 w-screen bg-nav"
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={menuVariants.backgroundClip}
    >
        <div className="absoluteFull flex-col-btw overflow-hidden p-4 landscape:flex-row">
            <NavItems.MenuLinks toggleMenu={toggleMenu} />

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
