import { motion } from 'framer-motion'
import { NavMotion } from '@motion'
import { Styled } from '@components'
import NavLinks from './NavLinks'

const { menuClipProps, staggerProps, socialsVariants, backdropProps } =
    NavMotion.MenuMotion

const Menu = ({ toggleMenu }) => (
    <>
        <motion.div
            className="white fixed -inset-0.5 z-10 bg-black/25 backdrop-blur-lg"
            custom={0}
            {...backdropProps}
        />
        <motion.menu
            id="menu"
            className="fixed -inset-0.5 z-20 overflow-hidden bg-gradient-to-b from-grey-20/70 to-grey-30/70"
            custom={1}
            {...menuClipProps}
        >
            <div className="absolute inset-4 top-16 portrait:flex-col-btw landscape:flex-top">
                <NavLinks isMenu toggleMenu={toggleMenu} />

                <motion.div
                    className="flex-evenly w-full text-menu portrait:h-16 landscape:w-1/2 landscape:flex-col landscape:gap-y-2"
                    {...staggerProps}
                >
                    <Styled.Socials
                        className="bg-grey-20 hover:bg-white"
                        variants={socialsVariants}
                    />
                </motion.div>
            </div>
        </motion.menu>
    </>
)

export default Menu
