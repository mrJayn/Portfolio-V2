import { motion } from 'framer-motion'
import { menuVariants } from '@motion'
import { Styled } from '@components'
import NavLinks from './NavLinks'

const Menu = ({ toggleMenu }) => (
    <motion.menu
        className="fixed -inset-0.5 top-16 z-[98] overflow-hidden bg-nav"
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={menuVariants.Wrapper}
    >
        <div className="portrait:flex-col-btw landscape:flex-top absolute inset-1 top-0">
            <NavLinks
                loc="menu"
                wrapClassName="flex-col-evenly full gap-y-2 p-2"
                className={`flex-left full cursor-pointer select-none whitespace-nowrap  pl-2 text-menu-link uppercase leading-1 tracking-2xl text-white/75`}
                toggleMenu={toggleMenu}
                custom={-25}
            />

            <div className="flex-btw min-h-[25vmin] portrait:w-full landscape:h-full landscape:w-1/2 landscape:flex-col">
                <Styled.Socials className="m-auto h-[15vmin] max-h-[80px]" />
            </div>
        </div>
    </motion.menu>
)

export default Menu
