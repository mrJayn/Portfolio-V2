import { motion } from 'framer-motion'
import { navLinks } from '@config'
import { NavVariants } from '@motion'

function handleLink(sectionName) {
    if (sectionName === 'my Resume') {
        window.open('/assets/misc/resume2022.jpg', '_blank')
    } else {
        const y = document.querySelector(`#${sectionName}`).offsetTop
        window.scrollTo({ top: y })
    }
}

const NavLinks = ({ isMenu, toggleMenu }) => {
    return (
        <motion.ul
            className={
                isMenu
                    ? 'full flex-col-top gap-y-2 p-2'
                    : 'absolute top-0 right-4 flex h-full gap-x-8 max-lg:hidden'
            }
            initial="hidden"
            animate="show"
            {...(!isMenu && { exit: 'hidden' })}
            variants={NavVariants.NavLinks.Container}
        >
            {navLinks.map((sectionName) => (
                <motion.li
                    key={`${sectionName}-link`}
                    className={`relative flex cursor-pointer select-none items-center whitespace-nowrap font-medium leading-1 tracking-2xl text-grey-30 transition-[color] duration-150 ease-in hover:text-white ${
                        isMenu
                            ? 'h-[min(100%,2.5em)] w-full justify-start pl-2 text-menu-link uppercase shadow-[inset_0_-1.5px_#FFF1]'
                            : 'full justify-center text-[19px] capitalize'
                    }`}
                    variants={NavVariants.NavLinks.Link}
                    custom={isMenu}
                    onClick={() => {
                        handleLink(sectionName)
                        if (isMenu) setTimeout(() => toggleMenu(), 100)
                    }}
                >
                    {sectionName}
                </motion.li>
            ))}
        </motion.ul>
    )
}

export default NavLinks
