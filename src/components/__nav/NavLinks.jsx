import { motion } from 'framer-motion'
import { NavMotion } from '@motion'
import { sections } from '@config'
import { scroll2id } from '@utils'

const sids = sections.map(({ id }) => id).slice(1)

export default function NavLinks({ isMenu, toggleMenu }) {
    const handleClick = (id) =>
        scroll2id(id, () => {
            if (isMenu) toggleMenu()
        })

    return (
        <motion.ul
            className={
                isMenu
                    ? 'full flex-col-top px-2 portrait:gap-y-[2.5vh] landscape:gap-y-2'
                    : 'absolute right-4 top-0 flex h-full gap-x-8 max-lg:hidden'
            }
            initial="hidden"
            animate="show"
            {...(!isMenu && { exit: 'hidden' })}
            variants={NavMotion.NavLinks.Container}
        >
            {sids.map((id) => (
                <motion.li
                    key={`${id}-link`}
                    className="h-auto w-full"
                    variants={NavMotion.NavLinks.Link}
                    custom={isMenu}
                >
                    <button
                        className={`relative flex w-full cursor-pointer select-none items-center tracking-2xl ${
                            isMenu
                                ? 'h-[2.25em] pl-2 text-menu font-medium uppercase text-current shadow-[inset_0_-3px_2px_-1px_#0002] hover:bg-white/25'
                                : `group h-full justify-center text-[19px]  capitalize`
                        }`}
                        onClick={() => handleClick(id)}
                    >
                        {id}
                        {!isMenu && (
                            <span className="absolute inset-x-0 h-[1px] origin-left translate-y-[0.65em] scale-x-0 rounded-full bg-black transition-transform delay-[100ms] duration-200 ease-tween group-hover:scale-x-100" />
                        )}
                    </button>
                </motion.li>
            ))}
        </motion.ul>
    )
}

/*
const NavLinks = ({ isMenu, toggleMenu }) => {
    const handleClick = (target) => {
        if (target === 'my Resume') {
            window.open('/assets/misc/resume2022.jpg', '_blank')
        } else {
            const y = document.querySelector(`#${target}`).offsetTop - 72
            window.scrollTo({ top: y, behavior: 'smooth' })
            if (isMenu) setTimeout(() => toggleMenu(), 100)
        }
    }

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
            {Object.keys(navLinks).map((id) => (
                <motion.li
                    key={`${id}-link`}
                    className={`relative flex cursor-pointer select-none items-center tracking-2xl text-grey-30 transition-[color] duration-150 ease-in hover:text-white ${
                        isMenu
                            ? 'h-[min(100%,2.5em)] w-full pl-2 text-menu-link font-medium uppercase shadow-[inset_0_-2px_#fff1]'
                            : `full justify-center text-[19px] capitalize`
                    }`}
                    variants={NavVariants.NavLinks.Link}
                    custom={isMenu}
                    onClick={() => handleClick(navLinks[id] ?? id)}
                >
                    {id}
                </motion.li>
            ))}
        </motion.ul>
    )
}

export default NavLinks
*/
