import { motion } from 'framer-motion'
import { NavMotion } from '@motion'
import { Styled } from '@components'
import NavLinks from './NavLinks'

const { menuProps, staggerProps, socialsVariants } = NavMotion.MenuMotion

const Menu = ({ toggleMenu }) => (
    <motion.menu
        id="menu"
        className="fixed -inset-0.5 z-20 overflow-hidden bg-menu-gradient"
        {...menuProps}
    >
        <div className="absolute inset-0.5 top-16 portrait:flex-col-btw landscape:flex-top">
            <NavLinks isMenu toggleMenu={toggleMenu} />

            <motion.div
                className="flex-center w-full text-menu portrait:h-16 landscape:w-1/2 landscape:flex-col landscape:gap-y-2"
                {...staggerProps}
            >
                <Styled.Socials
                    className="m-auto h-[calc(2.25em)] p-2"
                    variants={socialsVariants}
                />
            </motion.div>
        </div>
    </motion.menu>
)

export default Menu
