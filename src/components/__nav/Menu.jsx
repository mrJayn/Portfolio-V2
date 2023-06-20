import { motion } from 'framer-motion'
import { NavMotion } from '@motion'
import NavLinks from './NavLinks'
import { socials } from '@config'
import Paths from '../items/Paths'

const { menuClipProps, staggerProps, socialsVariants, backdropProps } = NavMotion.MenuMotion

const Socials = () =>
    socials.map(({ name, href }, i) => (
        <motion.a
            key={`social-icon-${i}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={name}
            className="flex-center relative aspect-[1/1] h-[2.35em] max-h-full rounded-lg bg-grey-75 p-2 hover:bg-grey-60"
            variants={socialsVariants}
            custom={i + 1}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-none stroke-black">
                <Paths name={name} />
            </svg>
        </motion.a>
    ))

const Menu = ({ toggleMenu }) => (
    <>
        <motion.div className="white fixed -inset-0.5 z-10 bg-black/25 backdrop-blur-lg" custom={0} {...backdropProps} />
        <motion.menu
            id="menu"
            className="fixed -inset-0.5 z-20 overflow-hidden bg-grey-95"
            custom={1}
            {...menuClipProps}
        >
            <div className="absolute inset-4 top-16 portrait:flex-col-btw landscape:flex-top">
                <NavLinks isMenu toggleMenu={toggleMenu} />

                <motion.div
                    className="flex-evenly w-full text-menu portrait:h-16 landscape:w-1/2 landscape:flex-col landscape:gap-y-2"
                    {...staggerProps}
                >
                    <Socials />
                </motion.div>
            </div>
        </motion.menu>
    </>
)

export default Menu
