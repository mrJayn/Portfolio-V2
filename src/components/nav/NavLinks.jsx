import Link from 'next/link'
import { motion } from 'framer-motion'
import { menuVariants } from '@config'

// [ id , block scroll target ]
const sections = [
    ['about', 'center'],
    ['experience', 'center'],
    ['featured', 'start'],
    ['projects', 'start'],
    ['contact', 'end'],
    ['my Resume', '/assets/misc/resume2022.jpg'],
]

const NavLinks = ({ toggleMenu = null, forMenu = false }) => {
    const handleNavLink = (e, target) => {
        e.preventDefault()
        document
            .querySelector(e.target.getAttribute('href').substring(1))
            .scrollIntoView({
                behavior: 'smooth',
                block: target,
            })
    }
    const ul_props = {
        variants: forMenu ? menuVariants.menuLinks : menuVariants.navLinks,
        custom: true,
    }

    const li_props = {
        variants: menuVariants.children,
        custom: forMenu ? 10 : 50,
        whileTap: { scale: forMenu ? 0.95 : 1 },
        onClick: toggleMenu,
    }
    return (
        <motion.ul
            className={
                forMenu
                    ? 'flex-col-center landscape:full col-start-1 col-end-[-1] row-start-1 row-end-[-1] h-[70%] grid-flow-col grid-cols-2 grid-rows-4 landscape:grid'
                    : 'md:flex-right md:full hidden select-none'
            }
            {...ul_props}
        >
            {sections.map(([name, target], i) => {
                const isResumeLink = i == sections.length - 1
                return (
                    <motion.li
                        key={i}
                        className={`cursor-pointer font-medium tracking-tight text-black dark:text-grey-light md:text-grey-light md:hover:text-white ${
                            forMenu
                                ? 'landscape:flex-center my-auto text-2xl capitalize landscape:text-xl'
                                : 'flex-center mx-4 pt-2 pb-1 text-[16px] lg:text-[18px]'
                        }`}
                        style={{ transition: 'color 0.25s linear' }}
                        {...li_props}
                    >
                        {isResumeLink ? (
                            <a
                                href={target}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {name}
                            </a>
                        ) : (
                            <Link href={`/#${name}`} passHref>
                                <a onClick={(e) => handleNavLink(e, target)}>
                                    {name}
                                </a>
                            </Link>
                        )}
                    </motion.li>
                )
            })}
        </motion.ul>
    )
}

export default NavLinks
