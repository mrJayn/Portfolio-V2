import { motion } from 'framer-motion'
import { NavVariants } from '@motion'
import { Styled } from '@components'
import NavLinks from './NavLinks'

const Menu = ({ toggleMenu }) => (
    <motion.menu
        className="fixed -inset-0.5 top-[60px] z-[98] overflow-hidden bg-nav"
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={NavVariants.Menu.Wrapper}
    >
        <div className="portrait:flex-col-btw landscape:flex-top absolute inset-1 top-0">
            <NavLinks isMenu toggleMenu={toggleMenu} />

            <div className="flex-btw min-h-[25vmin] portrait:w-full landscape:h-full landscape:w-1/2 landscape:flex-col">
                <Styled.Socials className="m-auto h-[15vmin] max-h-[80px]" />
            </div>
        </div>
    </motion.menu>
)

export default Menu
